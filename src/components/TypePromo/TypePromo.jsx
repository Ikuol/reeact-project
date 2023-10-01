import React from "react";

const TypePromo = ({ setPercent, setFix, active }) => {
  return (
    <div className="flex rounded-[22.5px] w-full bg-gray400 items-center">
      <span
        onClick={setPercent}
        className={`md:px-6 px-5 py-3 cursor-pointer w-full flex
        text-secondary text-[13px] rounded-[22.5px] h-12 items-center
        ${active === "pourcentage" ? "bg-primary text-white" : ""}
        justify-center`}
      >
        Pourcentage
      </span>
      <span
        onClick={setFix}
        className={`md:px-6 px-5 py-3 cursor-pointer w-full flex
        text-secondary text-[13px] rounded-[22.5px] h-12 items-center
        ${active === "fixe" ? "bg-primary text-white" : ""}
        justify-center`}
      >
        Montant fixe
      </span>
    </div>
  );
};

export default TypePromo;
