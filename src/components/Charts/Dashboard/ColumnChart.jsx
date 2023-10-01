import Chart from "react-apexcharts";

import { HiDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import ToggleChart from "components/Toggle/ToggleChart";

const ColumnChart = ({ options, series }) => {
  return (
    <div
      className="bg-white rounded-[20px] p-4 w-full
      shadow-md"
    >
      <div
        className="flex max-md:flex-col justify-between
      md:items-center mb-8 gap-y-4"
      >
        <div className="flex flex-col gap-y-2">
          <p className="font-medium text-sm text-main">Statistiques</p>
          <p className="font-normal text-[9px] text-secondary">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="flex items-center max-md:justify-between gap-x-2">
          <button
            className="flex items-center justify-center
            bg-gray400 text-white w-36 h-9 rounded-[100px]
                gap-x-2 active:scale-95 transition-all duration-200"
          >
            <HiDownload className="text-main" />
            <p className="text-main font-medium text-[10.5px]">
              Download report
            </p>
          </button>
          <span className="cursor-pointer">
            <BsThreeDots />
          </span>
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height="300px" />
      <div className="flex justify-between">
        <div className="flex md:gap-x-4 gap-x-8">
          <label className="flex gap-x-2 items-center cursor-pointer">
            <p className="text-main text-xs font-normal">Text</p>
            <ToggleChart />
          </label>
          <label className="flex gap-x-2 items-center cursor-pointer">
            <p className="text-main text-xs font-normal">Analytics</p>
            <ToggleChart />
          </label>
        </div>
        <div className="flex gap-x-4 max-md:hidden">
          <label className="flex gap-x-2 items-center cursor-pointer">
            <span className=" h-[14px] w-[14px] rounded-[11px] bg-main" />
            <p className="text-main text-xs font-normal">Income</p>
          </label>
          <label className="flex gap-x-2 items-center cursor-pointer">
            <span className=" h-[14px] w-[14px] rounded-[11px] bg-expense" />
            <p className="text-main text-xs font-normal">Expense</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
