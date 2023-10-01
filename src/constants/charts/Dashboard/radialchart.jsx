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
