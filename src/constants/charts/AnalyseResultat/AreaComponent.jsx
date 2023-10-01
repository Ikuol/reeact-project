export const areachart = {
  options: {
    chart: {
      type: "area",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 53,
    },
    zoom: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
      curve: "smooth",
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      min: 0,
    },

    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      colors: ["#284F60"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },

    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
  },
  colors: ["#C92D17"],
};
