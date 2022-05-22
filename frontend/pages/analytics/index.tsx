import { useEffect, useState } from "react";
import CustomCharts from "../../components/Charts/CustomCharts";

const Analytics = () => {
  const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   fetch("")
  //     .then((response) => response.json())
  //     .then((data) => setData([[], ...data]));
  // }, []);

  return (
    <div>
      <h1>Hello From Analytics</h1>
      {/* {data.map((item, index) => (
        <li key={index}>
            item {index}: {`${item.date_time},${item.eth_only},${item.btc_only},${item.invest_50_50},${item.invest_60_40},${item.invest_80_20},${item.invest_day}`}
        </li>
      ))} */}
      <CustomCharts />
    </div>
  );
};

export default Analytics;
