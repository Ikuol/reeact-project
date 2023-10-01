export const columnchart = {
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
    xaxis: {
      show: true,
      position: "top",
      labels: {
        show: true,
        offsetY: 3,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 4,
      },
    },
  },
};
