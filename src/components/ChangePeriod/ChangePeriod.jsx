import React, { memo } from "react";

const ChangePeriod = ({ setMonthly, setWeekly, setToday, active }) => {
  // Ici les fonctions setMonthly setWeekly setToday définissent les
  // actions effectuées lorsqu'on clique sur les span concernés
  return (
    <div
      className="flex rounded-[36.75px]
      items-center bg-gray400 font-semibold
      max-sm:mt-2"
    >
      <span
        onClick={setMonthly}
        className={`md:px-6 px-5 py-3 cursor-pointer
      text-secondary text-[10.5px] rounded-[36.75px]
        ${active === "monthly" ? "bg-primary text-white" : ""}`}
      >
        Monthly
      </span>
      <span
        onClick={setWeekly}
        className={`text-[10.5px] md:px-6 py-3 text-secondary
        rounded-[36.75px] cursor-pointer px-5
        ${active === "weekly" ? "bg-primary text-white" : ""}`}
      >
        Weekly
      </span>
      <span
        onClick={setToday}
        className={`flex text-[10.5px] text-secondary
        rounded-[36.75px] cursor-pointer md:px-6 px-5 py-3
        ${active === "today" ? "bg-primary  text-white" : ""}`}
      >
        Today
      </span>
    </div>
  );
};

export default memo(ChangePeriod);
