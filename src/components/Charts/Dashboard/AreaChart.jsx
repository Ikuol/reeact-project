import Chart from "react-apexcharts";
import { AiFillCaretUp } from "react-icons/ai";

const AreaChart = ({ title, amount, options, series, imgUrl }) => {
  return (
    <div
      className="flex flex-col w-full bg-white h-full max-h-[190px]
      rounded-[20px] overflow-hidden shadow-md"
    >
      <span className="flex pt-4 px-5">
        <p className="text-gray-600 font-normal text-xs">{title}</p>
      </span>
      <div className="flex justify-between items-center pt-2 px-5">
        <div className="flex gap-x-3 items-center">
          <AiFillCaretUp size={20} className="text-green" />
          <p className="font-bold text-lg text-main">{amount}</p>
          <p className="text-xs font-light text-gray-500">Than last week</p>
        </div>
        <span className="flex gap-x-2">
          <img src={imgUrl} alt="graph" className=" w-full h-full" />
          <p className="font-normal text-xs text-secondary">4% (30 days)</p>
        </span>
      </div>
      <Chart
        options={options}
        series={series}
        type="area"
        height="100px"
        width="100%"
      />
    </div>
  );
};

export default AreaChart;
