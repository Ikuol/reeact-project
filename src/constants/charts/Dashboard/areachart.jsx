export const areachart = {
  options: {
    chart: {
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 29,
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
      colors: ["rgba(39, 79, 96, 0.55)"],
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
  series: [
    {
      name: "Clicks",
      data: [400, 48, 540, 210, 600, 56, 526, 56, 256, 200],
    },
  ],
};
