import Chart from "react-apexcharts";

const DonutChart = ({ options, series }) => {
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
      <Chart options={options} series={series} type="donut" height="300px" />
      <div className="flex justify-center mt-4">
        <div className="flex gap-x-4">
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

export default DonutChart;
