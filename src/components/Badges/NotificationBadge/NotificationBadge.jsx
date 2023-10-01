import { memo } from "react";

const NotificationBadge = ({ icon, value }) => {
  return (
    <div className="mr-6 sm:mr-10 text-primary cursor-pointer ">
      <div className="relative active:scale-95 transition-all duration-200">
        <span className="absolute -top-4 shadow-sm shadow-primary -right-2 h-4 w-4  bg-primary text-white rounded-full flex justify-center items-center">
          <span className="text-[8px] pt-[2px]">{value}</span>
        </span>
        {icon}
      </div>
    </div>
  );
};

export default memo(NotificationBadge);
