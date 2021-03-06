/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import equal from "fast-deep-equal";
import usePrevious from "../../utils/hooks/usePrevious";
import { mergeDeep } from "../../utils/AnalyticsUtilities";
import {
  createChart,
  IChartApi,
  MouseEventHandler,
  TimeRangeChangeEventHandler,
} from "lightweight-charts";

const BaseChart = (props: any) => {
  const {
    autoHeight,
    autoWidth,
    backgroundTheme,
    charts,
    colors,
    darkTheme,
    fitAll,
    from,
    height,
    onClick,
    onCrosshairMove,
    onTimeRangeMove,
    options,
    to,
    timeScale,
    width,
    data,
    type = "line",
  } = props;
  const prevProps = usePrevious(props);
  const chartDiv = React.useRef<any>();
  const [series, setSeries] = React.useState<any>([]);
  const [chart, setChart] = React.useState<IChartApi>();
  const { customDarkTheme, lightTheme } = backgroundTheme;
  const resizeHandler = () => {
    const newWidth =
      autoWidth && chartDiv.current && chartDiv.current.parentNode.clientWidth;
    const newHeight =
      autoHeight && chartDiv.current
        ? chartDiv.current.parentNode.clientHeight
        : height;

    chart?.resize(newWidth, newHeight);
  };

  const handleLinearInterpolation = (
    serieData: string | any[],
    candleTime: number
  ) => {
    if (!candleTime || serieData.length < 2 || !serieData[0].value)
      return serieData;
    const first = serieData[0].time;
    const last = serieData[serieData.length - 1].time;
    const newData = new Array(Math.floor((last - first) / candleTime));
    newData[0] = serieData[0];
    const index = 1;
    for (let i = 1; i < serieData.length; i += 1) {
      newData[index + 1] = serieData[i];
      const prevTime = serieData[i - 1].time;
      const prevValue = serieData[i - 1].value;
      const { time, value } = serieData[i];
      for (
        let interTime = prevTime;
        interTime < time - candleTime;
        interTime += candleTime
      ) {
        // interValue get from the Taylor-Young formula
        const interValue =
          prevValue +
          (interTime - prevTime) * ((value - prevValue) / (time - prevTime));
        newData[index + 1] = { time: interTime, value: interValue };
      }
    }
    // return only the valid values
    return newData.filter((x) => x);
  };

  const addSeriesFunctions = {
    candlestick: "addCandlestickSeries",
    line: "addLineSeries",
    area: "addAreaSeries",
    bar: "addBarSeries",
    histogram: "addHistogramSeries",
    baseline: "addBaselineSeries",
  };

  const addSeries = (serie, serieType) => {
    const func = addSeriesFunctions[serieType];
    const color =
      (serie.options && serie.options.color) ||
      colors[series.length % colors.length];
    let mySeries;
    if (chart) {
      mySeries = chart[func]({
        color,
        ...serie.options,
      });
      const interpolatedData = handleLinearInterpolation(
        data,
        serie.linearInterpolation
      );
      mySeries.setData(interpolatedData);
      if (serie.markers) series.setMarkers(serie.markers);
      if (serie.priceLines) {
        serie.priceLines.forEach((line) => series.createPriceLine(line));
      }
      if (serie.basevalue) {
        mySeries.setBaseValue(serie.basevalue);
      }
    }
    return mySeries;
  };

  const handleSeries = () => {
    switch (type) {
      case "candlestick":
        setSeries([...series, addSeries(data, "candlestick")]);
        break;
      case "line":
        setSeries([...series, addSeries(data, "line")]);
        break;
      case "area":
        setSeries([...series, addSeries(data, "area")]);
        break;
      case "bar":
        setSeries([...series, addSeries(data, "bar")]);
        break;
      case "histogram":
        setSeries([...series, addSeries(data, "histogram")]);
        break;
      case "baseline": {
        const newSerie = addSeries(data, "baseline");
        newSerie.options = options.baseline;
        setSeries([...series, newSerie]);
        break;
      }
      default:
        break;
    }
  };

  const removeSeries = () => {
    try {
      series.forEach((serie) => {
        if (serie) chart?.removeSeries(serie);
        const index = series.indexOf(serie);
        const newSeries = series.splice(index, 1);
        if (index > -1) {
          setSeries({ newSeries });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleEvents = () => {
    onClick && chart?.subscribeClick(onClick);
    onCrosshairMove && chart?.subscribeCrosshairMove(onCrosshairMove);
    onTimeRangeMove &&
      chart?.timeScale().subscribeVisibleTimeRangeChange(onTimeRangeMove);
  };
  const unsubscribeEvents = (previousProps: {
    onClick: MouseEventHandler;
    onCrosshairMove: MouseEventHandler;
    onTimeRangeMove: TimeRangeChangeEventHandler;
  }) => {
    chart?.unsubscribeClick(previousProps.onClick);
    chart?.unsubscribeCrosshairMove(previousProps.onCrosshairMove);
    chart
      ?.timeScale()
      .unsubscribeVisibleTimeRangeChange(previousProps.onTimeRangeMove);
  };

  const handleTimeRange = () => {
    try {
      if (from && to && chart) {
        if (fitAll) {
          chart.timeScale().resetTimeScale();
          chart.timeScale().fitContent();
        } else {
          chart.timeScale().setVisibleRange({ from, to });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateChart = () => {
    let customOptions = darkTheme ? customDarkTheme : lightTheme;

    customOptions = mergeDeep(customOptions, {
      width: autoWidth ? chartDiv.current.parentNode.clientWidth : width,
      height: autoHeight ? chartDiv.current.parentNode.clientHeight : height,
      ...options,
    });

    chart?.applyOptions(customOptions);

    handleSeries();
    handleEvents();
    handleTimeRange();

    if (autoWidth || autoHeight) {
      // resize the chart with the window
      window.addEventListener("resize", resizeHandler);
    }
  };

  React.useEffect(() => {
    const newChart = createChart(chartDiv.current);
    setChart(newChart);
  }, []);

  React.useEffect(() => {
    if (chart) {
      handleUpdateChart();
      resizeHandler();
    }
  }, [chart]);

  React.useEffect(() => {
    !autoWidth &&
      !autoHeight &&
      window.removeEventListener("resize", resizeHandler);
  }, [autoWidth, autoHeight]);

  React.useEffect(() => {
    prevProps &&
      !equal(
        [
          prevProps.onCrosshairMove,
          prevProps.onTimeRangeMove,
          prevProps.onClick,
        ],
        [onCrosshairMove, onTimeRangeMove, onClick]
      ) &&
      unsubscribeEvents(prevProps);
  }, [
    prevProps?.onCrosshairMove,
    prevProps?.onClick,
    prevProps?.onTimeRangeMove,
    onCrosshairMove,
    onTimeRangeMove,
    onClick,
  ]);

  React.useEffect(() => {
    if (
      prevProps &&
      !equal([prevProps.charts, prevProps.options], [charts, options])
    ) {
      removeSeries();
      handleUpdateChart();
    }
  }, [timeScale, prevProps?.charts, charts, prevProps?.options, options]);

  React.useEffect(() => {
    if (!prevProps) return;
    if (prevProps.from !== from || prevProps.to !== to) {
      handleTimeRange();
    }
  }, [prevProps?.from, prevProps?.to, from, to]);

  return <div ref={chartDiv} style={{ position: "relative" }} />;
};

export default BaseChart;
