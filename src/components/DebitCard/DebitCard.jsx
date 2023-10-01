import cardSymbol from "assets/svg/02.svg";

const DebitCard = () => {
  return (
    <div
      className="flex flex-col justify-between bg-main
    rounded-[20px] h-[300px] w-full p-6 px-12"
    >
      <div className="flex flex-col gap-y-2">
        <p className="font-medium text-xs text-white">Main Balance</p>
        <p className="text-white font-semibold text-3xl">$673,412.66</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <span>
          <img src={cardSymbol} alt="card-symbol" className="w-full h-full" />
        </span>
        <p className="font-medium text-[15px] text-white">
          **** **** **** 1234
        </p>
      </div>
      <div className="flex gap-x-6">
        <span className="flex flex-col gap-y-2">
          <p className="font-medium text-xs text-white60">VALID THRU</p>
          <p className="font-medium text-xs text-white">08/21</p>
        </span>
        <span className="flex flex-col gap-y-2">
          <p className="font-medium text-xs text-white60">CARD HOLDER</p>
          <p className="font-medium text-xs text-white">Franklin Jr.</p>
        </span>
      </div>
    </div>
  );
};

export default DebitCard;
