import Card from "components/Card/Card";
import { memo } from "react";
import CountUp from "react-countup";

const Widget = ({ icon, value, title }) => {
  return (
    <Card extra="bg-white rounded-[22px] px-4 pb-8 md:pb-3 pt-8 shadow-md">
      <div className="flex justify-between">
        <div className="flex flex-col text-primary">
          <span className="text-[28.519px] font-semibold">
            <CountUp duration={3} end={value} />
          </span>
          <span className="text-[#0f0f0fb3] text-[13.509px] font-normal">
            {title}
          </span>
        </div>
        <div className="w-12 h-14 rounded-full border flex justify-center items-center">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default memo(Widget);
