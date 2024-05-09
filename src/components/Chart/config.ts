// Configuration Default de la Chart
export const option: EChartsOption = {
  title: {
    text: "les Evolutions Financière",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Stocks"],
  },
  grid: {
    left: "5%",
    right: "5%",
    top: "20%",  
  }, 
  xAxis: {
    type: 'category',
    boundaryGap: false,  
  },
  yAxis: {
    name: 'Valeur',
    type: "value",
  },
  series: [],
};
