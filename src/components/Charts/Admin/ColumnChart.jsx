import Chart from "react-apexcharts";

import ToggleChart from "components/Toggle/ToggleChart";

//TODO: use the tooglebutton to change the color of the charts
const ColumnChart = ({ options, series, firstText, secondText }) => {
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
          <p className="font-semibold text-xl text-main">Titre</p>
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height="300px" />
      <div className="flex justify-between">
        <div className="flex md:gap-x-4 gap-x-8">
          <label className="flex gap-x-2 items-center cursor-pointer">
            <p className="text-main text-xs font-normal">{firstText}</p>
            <ToggleChart />
          </label>
          <label className="flex gap-x-2 items-center cursor-pointer">
            <p className="text-main text-xs font-normal">{secondText}</p>
            <ToggleChart />
          </label>
        </div>
        <div className="flex gap-x-4 max-md:hidden">
          <label className="flex gap-x-2 items-center cursor-pointer">
            <span className=" h-[14px] w-[14px] rounded-[11px] bg-main" />
            <p className="text-main text-xs font-normal">Inscription</p>
          </label>
          <label className="flex gap-x-2 items-center cursor-pointer">
            <span className=" h-[14px] w-[14px] rounded-[11px] bg-expense" />
            <p className="text-main text-xs font-normal">Désabonnement</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
