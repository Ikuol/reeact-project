import Chart from "react-apexcharts";
import { memo } from "react";

const AreaComponent = ({ options, series, currentPrice, total }) => {
  return (
    <div className="flex flex-col h-full justify-between max-md:w-full">
      <div
        className="rounded-[22px] h-60 bg-area
        relative mb-6 md:w-32 overflow-hidden"
      >
        <Chart options={options} series={series} type="area" height={200} />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-main text-center text-xs font-normal">Limit</p>
        <p className="text-main text-sm text-center">
          <span className="font-semibold">${currentPrice}</span> / ${total}
        </p>
      </div>
    </div>
  );
};

export default memo(AreaComponent);
