import React from "react";

const ToggleChart = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="w-10 h-4 bg-togglecolor peer-focus:outline-none
      rounded-full peer peer-checked:after:translate-x-full
      after:content-[''] after:absolute after:-top-[2px]
      after:left-[px] after:bg-white after:border-gray-300
      after:border after:rounded-full after:h-5 after:w-5
      after:transition-all peer-checked:bg-main"
      ></div>
    </label>
  );
};

export default ToggleChart;
