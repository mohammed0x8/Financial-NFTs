import React, { useState, useEffect, useRef } from "react";
import Charts from "../Charts";

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export default function CustomCharts() {
  const isMounted = useIsMounted();

  const [chartData, setChartData] = useState({
    btc_only: [[], []],
    eth_only: [[], []],
    invest_50_50: [[], []],
    invest_60_40: [[], []],
    invest_80_20: [[], []],
    invest_day: [[], []],
  });

  const charts = [
    {
      title: "BTC ONlY",
      description: "Lorem IPSUM",
      data: chartData.btc_only,
      props: {
        unit: "$",
      },
    },
  ];

  async function loadDataCharts() {
    // TODO -> data shenaningans
    // const data = [
    //   {
    //     btc_only: 171205.72,
    //     date_time: "2021-11-14",
    //     eth_only: 331093.38,
    //     invest_50_50: 251149.55,
    //     invest_60_40: 267138.32,
    //     invest_80_20: 299115.85,
    //     invest_day: 1049.0,
    //   },
    // ];

    // const btc_only = [[...data.date_time], [...data.btc_only]];
    // const eth_only = [[...data.date_time], [...data.eth_only]];
    // const invest_50_50 = [[...data.date_time], [...data.invest_50_50]];
    // const invest_60_40 = [[...data.date_time], [...data.invest_60_40]];
    // const invest_80_20 = [[...data.date_time], [...data.invest_80_20]];
    // const invest_day = [[...data.date_time], [...data.invest_day]];

    // if (isMounted.current) {
    //   setChartData({
    //     btc_only: btc_only,
    //     eth_only: eth_only,
    //     invest_50_50: invest_50_50,
    //     invest_60_40: invest_60_40,
    //     invest_80_20: invest_80_20,
    //     invest_day: invest_day,
    //   });
    // }
  }

  useEffect(() => {
    loadDataCharts();
  }, []);

  return <Charts charts={charts} />;
}
