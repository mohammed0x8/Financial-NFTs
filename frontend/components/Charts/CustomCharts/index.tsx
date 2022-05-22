import React, { useState, useEffect, useRef } from "react";
import useIsMounted from "../../../utils/hooks/isMounted";
import Charts from "../Charts";
import MockData from "../../../utils/MockData";

export default function CustomCharts() {
  const isMounted = useIsMounted();

  const [chartData, setChartData] = useState<any>({
    btc_only: [[], []],
    eth_only: [[]],
    invest_50_50: [[]],
    invest_60_40: [[]],
    invest_80_20: [[]],
    invest_day: [[]],
  });

  const charts = [
    {
      title: "BTC ONlY",
      description: "Lorem IPSUM",
      data: chartData.btc_only,
      props: {
        unit: "$",
      },
      type: "line",
    },
    {
      title: "ETH ONLY",
      description: "Lorem IPSUM",
      data: chartData.eth_only,
      props: {
        unit: "$",
      },
      type: "line",
    },
    {
      title: "50/50",
      description: "Lorem IPSUM",
      data: chartData.invest_50_50,
      props: {
        unit: "$",
      },
      type: "line",
    },
    {
      title: "60/40",
      description: "Lorem IPSUM",
      data: chartData.invest_60_40,
      props: {
        unit: "$",
      },
      type: "line",
    },
    {
      title: "80/20",
      description: "Lorem IPSUM",
      data: chartData.invest_80_20,
      props: {
        unit: "$",
      },
      type: "line",
    },
    {
      title: "Day",
      description: "Lorem IPSUM",
      data: chartData.invest_day,
      props: {
        unit: "$",
      },
      type: "line",
    },
  ];

  const [data, setData] = React.useState<any>([]);

  async function loadDataCharts() {
    // TODO -> data shenaningans

    const getTimestamp = (date_time: String): Number => {
      var dateParts = date_time.match(/(\d+)-(\d+)-(\d+)/) || "";
      const date = new Date(
        parseInt(dateParts[1]),
        parseInt(dateParts[2], 10) - 1,
        parseInt(dateParts[3])
      );
      return date.getTime() / 1000;
    };

    const getChartsData = async () => {
      const btc_only = [
        MockData.map((d) => {
          return { time: getTimestamp(d.date_time), value: d.btc_only };
        }),
      ];
      const eth_only = [
        MockData.map((d) => {
          return { time: getTimestamp(d.date_time), value: d.eth_only };
        }),
      ];
      const invest_50_50 = [
        MockData.map((d) => {
          return { time: getTimestamp(d.date_time), value: d.invest_50_50 };
        }),
      ];
      const invest_60_40 = [
        MockData.map((d) => {
          return { time: getTimestamp(d.date_time), value: d.invest_60_40 };
        }),
      ];
      const invest_80_20 = [
        MockData.map((d) => {
          return { time: getTimestamp(d.date_time), value: d.invest_80_20 };
        }),
      ];
      const invest_day = [
        MockData.map((d) => {
          return { time: getTimestamp(d.date_time), value: d.invest_day };
        }),
      ];

      if (isMounted.current) {
        setChartData({
          btc_only: btc_only,
          eth_only: eth_only,
          invest_50_50: invest_50_50,
          invest_60_40: invest_60_40,
          invest_80_20: invest_80_20,
          invest_day: invest_day,
        });
      }
    };
    await getChartsData();
  }
  useEffect(() => {
    loadDataCharts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Charts charts={charts} />;
}
