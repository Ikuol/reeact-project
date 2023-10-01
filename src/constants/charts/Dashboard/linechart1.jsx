export const linechart1 = {
  options: {
    chart: {
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    zoom: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 5,
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
    },

    dataLabels: {
      enabled: false,
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
};
