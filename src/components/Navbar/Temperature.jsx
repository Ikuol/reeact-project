import { memo } from "react";
import { WiCloudy } from "react-icons/wi";

const Temperature = ({ temperature, localisation }) => {
  return (
    <div className="hidden rounded-[36.75px] xl:flex mr-8 items-center bg-gray200 font-semibold ">
      <div className="rounded-[36.75px] bg-primary px-6 py-2 mr-3 text-white flex items-center text-[16.5px]">
        <WiCloudy size={25} />
        <span className="ml-2 relative">
          <span className="absolute -top-4 -right-[6px] text-xl">.</span>
          {temperature}
        </span>
      </div>
      <span className="text-sm text-primary pr-3 text-[10.5px]">
        {localisation}
      </span>
    </div>
  );
};

export default memo(Temperature);
