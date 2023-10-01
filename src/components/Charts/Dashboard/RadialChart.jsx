import Chart from "react-apexcharts";

const RadialChart = ({
  bgColor,
  legend,
  series,
  options,
  extra,
  textColor,
}) => {
  return (
    <div
      className={`w-full h-40 rounded-3xl ${bgColor}
      flex flex-col items-center ${extra}`}
    >
      <Chart
        options={options}
        series={[series]}
        type="radialBar"
        height={120}
      />
      <span className="pb-1">
        <p className={`${textColor} font-normal text-[12px]`}>{legend}</p>
      </span>
    </div>
  );
};

export default RadialChart;
