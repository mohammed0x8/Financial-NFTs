import React, { useState, useEffect } from "react";
import CustomCharts from "./CustomCharts";

export default function Charts() {
  const [chartData, setChartData] = useState([]);

  async function loadData() {
    const mockData = await fetchFromAPI();
    setChartData(mockData);
  }

  useEffect(() => {
    loadData();
  }, []);

  return <CustomCharts />;
}

Charts.defaultProps = {
  title: "Charts",
};

async function fetchFromAPI() {
  return [];
}
