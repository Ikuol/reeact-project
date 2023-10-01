const DisplayParams = ({ text, params }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm text-main font-medium">{text}</p>
      <span
        className="flex items-center pl-3 w-full
      bg-gray200 rounded-[100px] md:w-52 h-10"
      >
        <p className="text-main text-sm font-semibold">{params}</p>
      </span>
    </div>
  );
};

export default DisplayParams;
