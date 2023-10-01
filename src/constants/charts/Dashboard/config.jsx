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
};

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
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 4,
      },
    },
  },
};

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

export const linechart2 = {
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

export const radialbar = {
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "rgba(255, 255, 255, 0.22)",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "12px",
            fontWeight: "bold",
            color: "#FFFFFF",
            offsetY: 5,
          },
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
      },
    },
    colors: ["#FFFFFF"],
    stroke: {
      lineCap: "round",
    },
  },
};

export const fourthRadialBar = {
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#EAEAEA",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "12px",
            fontWeight: "bold",
            color: "#284F60",
            offsetY: 5,
          },
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
      },
    },
    colors: ["#284F60"],
    stroke: {
      lineCap: "round",
    },
  },
};

export const donutchart = {
  options: {
    colors: ["#889EA8", "#284F60", "#D2D2D2"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        donut: {
          size: "45%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  },
};
