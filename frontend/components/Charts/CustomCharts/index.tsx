import React, { useState, useEffect, useRef } from "react";
import useIsMounted from "../../../utils/hooks/isMounted";
import Charts from "../Charts";

export default function CustomCharts() {
  const isMounted = useIsMounted();

  const [chartData, setChartData] = useState<any>({
    btc_only: [[],[]],
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
      type: 'line',
    },
    {
      title: "ETH ONLY",
      description: "Lorem IPSUM",
      data: chartData.eth_only,
      props: {
        unit: "$",
      },
      type: 'line',
    },
    {
      title: "50/50",
      description: "Lorem IPSUM",
      data: chartData.invest_50_50,
      props: {
        unit: "$",
      },
      type: 'line',
    },
    {
      title: "60/40",
      description: "Lorem IPSUM",
      data: chartData.invest_60_40,
      props: {
        unit: "$",
      },
      type: 'line',
    },
    {
      title: "80/20",
      description: "Lorem IPSUM",
      data: chartData.invest_80_20,
      props: {
        unit: "$",
      },
      type: 'line',
    },
    {
      title: "Day",
      description: "Lorem IPSUM",
      data: chartData.invest_day,
      props: {
        unit: "$",
      },
      type: 'line',
    },
  ];

  // const [data, setData ] = React.useState<any>([]);
  // // useEffect(() => {
  // //   fetch("https://f-nfts.herokuapp.com/weighted_portfolio")
  // //     .then((response) => response.json())
  // //     .then((data) => setData([[], ...data]));
  // // }, []);
  async function loadDataCharts() {
    // TODO -> data shenaningans
    
    const MockData = [
      {
        btc_only: 171205.72,
        date_time: "2021-11-14",
        eth_only: 331093.38,
        invest_50_50: 251149.55,
        invest_60_40: 267138.32,
        invest_80_20: 299115.85,
        invest_day: 1049.0,
      },
      {
        btc_only: 171205.72,
        date_time: "2021-11-15",
        eth_only: 331093.38,
        invest_50_50: 251149.55,
        invest_60_40: 267138.32,
        invest_80_20: 299115.85,
        invest_day: 1049.0,
      },
      {
        btc_only: 171205.72,
        date_time: "2021-11-16",
        eth_only: 331093.38,
        invest_50_50: 251149.55,
        invest_60_40: 267138.32,
        invest_80_20: 299115.85,
        invest_day: 1049.0,
      },
    ];

    const getTimestamp = (date_time: String): Number => {
      var dateParts = date_time.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+)/) || "";
      const date = new Date(
        parseInt(dateParts[2]),
        parseInt(dateParts[1], 10) - 1,
        parseInt(dateParts[0])
      );
      return date.getTime() / 1000
    }

      const btc_only = [
        MockData.map((d) => {
          return { time: (getTimestamp(d.date_time)), value: d.btc_only }}),
        ];
      const eth_only = [
        MockData.map((d) => {
          return { time: (getTimestamp(d.date_time)), value: d.eth_only }}),
      ];
      const invest_50_50 = [
        MockData.map((d) => {
          return { time: (getTimestamp(d.date_time)), value: d.invest_50_50 }}),
      ];
      const invest_60_40 = [
        MockData.map((d) => {
          return { time: (getTimestamp(d.date_time)), value: d.invest_60_40 }}),
      ];
      const invest_80_20 = [
        MockData.map((d) => {
          return { time: (getTimestamp(d.date_time)), value: d.invest_80_20 }}),
      ];
      const invest_day = [
        MockData.map((d) => {
          return { time: (getTimestamp(d.date_time)), value: d.invest_day }}),
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
    };
  }

  useEffect(() => {
    loadDataCharts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Charts charts={charts} />;
}