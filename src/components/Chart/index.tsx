import ReactEcharts from "echarts-for-react"; 
import { option } from "./config";
import { useEffect, useState } from "react";

interface ChartProp {
  stocks: Stocks;
}

// Create the echarts instance
const Chart: React.FC<ChartProp> = ({ stocks }) => {
  const [chartOptions, setChartOptions] = useState(option);

  useEffect(() => {
    initChart();
  }, [stocks]);

  const initChart = () => {
    const stocksValues = stocks.map((el) => parseFloat(el.stocks));
    const dateValues = stocks.map((el) =>
      new Date(el.timestamp).toLocaleDateString()
    );
    console.log(dateValues);
    let serie: EChartSerie = {
      data: stocksValues,
      type: "line",
      name: "Stocks",
    };

    setChartOptions((prev) => ({
      ...prev,
      xAxis: { data: dateValues },
      series: serie,
    }));
  };

  return <ReactEcharts option={chartOptions} />;
};
export default Chart;
