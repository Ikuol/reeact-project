import { memo } from "react";

const RightButton = ({ onClick = () => {}, text, icon = null, className }) => {
  return (
    <button
      className={`flex items-center justify-center
  bg-main text-white w-52 h-11 rounded-[100px]
    gap-x-2 active:scale-95 transition-all duration-200 ${className ?? ""}`}
      onClick={onClick}
    >
      {icon}
      <span className="font-medium text-xs">{text}</span>
    </button>
  );
};

export default memo(RightButton);
