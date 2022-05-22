import React from "react";
import { Box } from "@chakra-ui/react";
import BaseLabels from "./BaseLabel";
import dynamic from "next/dynamic";
const BaseChart = dynamic(() => import("./BaseChart"), {
  ssr: false,
});

import { DataSelector, TimeSelector } from "./Selectors";
import {
  options,
  customDarkTheme,
  lightTheme,
  colors,
} from "../../utils/AnalyticsUtilities";

const Chart = (props: any) => {
  const [from, setFrom] = React.useState<number>();
  const [fitAll, setFitAll] = React.useState<boolean>(false);

  const setDateRange = (timeMode: string): void => {
    if (timeMode === "all") {
      setFitAll(true);
    } else {
      setFitAll(false);
      const daysToSubtract =
        timeMode === "week" ? 7 : timeMode === "month" ? 30 : 365;
      const dateOffset = 24 * 60 * 60 * 1000 * daysToSubtract;
      const newFrom =
        new Date(new Date().getTime() - dateOffset).getTime() / 1000;
      setFrom(newFrom);
    }
  };

  React.useEffect(() => {
    setDateRange(props.timeMode);
  }, [props.timeMode]);

  const n = !props.isMobile;
  const to = new Date().getTime() / 1000; // current timestamp
  const useDataMode = props.data?.length > 1;
  const dataMode = useDataMode ? props.dataMode : "hr";
  console.log('props', props);
  const customData = props.charts[0]?.data || [];
  const data = customData[0];
  console.log("data11111111", data);

  if (data !== [] || data.value?.length !== 0 ) {
    return (
      <Box
        borderRadius="25px"
        padding="10px"
        paddingTop={n ? "30px" : "40px"}
        position="relative"
        height={n ? "370px" : "250px"}
        backgroundColor="#c3c3c3"
      >
        {useDataMode ? (
          <DataSelector
            size={props.size}
            isMobile={props.isMobile}
            setValue={props.setDataMode}
            value={dataMode}
          />
        ) : null}
        <TimeSelector
          size={props.size}
          isMobile={props.isMobile}
          setValue={props.setTimeMode}
          value={props.timeMode}
          dataMode={dataMode}
        />
        <hr style={{ marginTop: "20px" }} />
        <BaseChart
          {...props}
          autoWidth
          height={300}
          options={options}
          from={from}
          to={to}
          fitAll={fitAll}
          colors={colors}
          data={data}
          backgroundTheme={{ customDarkTheme, lightTheme }}
        />
        <BaseLabels labels={["abc", "def"]} />
      </Box>
    );
  } else {
    return (
      <Box
        borderRadius="25px"
        padding={n ? "135px" : "60px"}
        position="relative"
        height={n ? "370px" : "240px"}
      >
        <Box className="Loading-logo">
          <h1>LOADING</h1>
        </Box>
      </Box>
    );
  }
};
export default Chart;
