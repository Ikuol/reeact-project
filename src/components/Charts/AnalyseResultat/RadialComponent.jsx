import Chart from "react-apexcharts";

const RadialComponent = ({ status, number, options, series }) => {
  return (
    <div className="flex">
      <div className="relative md:-left-1/4 -left-[20%]">
        <span
          className="absolute flex flex-col gap-y-2 bg-grayLight
          text-main rounded-[20px] w-52 md:h-[75px] p-4 justify-center
          md:top-[1.7rem] top-4 md:left-28 left-[7.5rem] shadow-md h-16"
        >
          <p className=" text-base font-medium text-right">{status}</p>
          <p className="font-medium text-xl text-right">{number}</p>
        </span>
        <div className="max-md:hidden">
          <Chart
            options={options}
            series={[series]}
            type="radialBar"
            height={130}
          />
        </div>
        <div className="md:hidden">
          <Chart
            options={options}
            series={[series]}
            type="radialBar"
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default RadialComponent;
