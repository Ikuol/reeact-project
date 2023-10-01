const DisplayInfo = ({ bgColor, price, text }) => {
  return (
    <div className="flex gap-x-3 items-center">
      <div className={`w-[10.5px] h-10 rounded-[10px] ${bgColor}`} />
      <div className="flex flex-col gap-y-2">
        <p className="font-normal md:text-[10.5px]">{text}</p>
        <p className="text-main font-medium md:text-sm">${price}</p>
      </div>
    </div>
  );
};

export default DisplayInfo;
