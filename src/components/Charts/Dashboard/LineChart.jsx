import Chart from "react-apexcharts";

const LineChart = ({ title, amount, options, series, imgUrl }) => {
  return (
    <div
      className="flex flex-col justify-between h-full max-h-[190px]
    bg-white rounded-[20px] px-0 py-3 w-full shadow-md overflow-hidden"
    >
      <span className="flex pt-4 px-5">
        <p className="text-gray-600 font-normal text-xs">{title}</p>
      </span>
      <div className="flex justify-between items-center pt-2 px-5">
        <p className="font-bold text-lg text-main">{amount}</p>
        <span className="flex gap-x-2">
          <img src={imgUrl} alt="graph" className=" w-full h-full" />
          <p className="font-normal text-xs text-secondary">4% (30 days)</p>
        </span>
      </div>
      <Chart options={options} series={series} type="line" height="100px" />
    </div>
  );
};

export default LineChart;
