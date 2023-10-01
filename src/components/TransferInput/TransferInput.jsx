const TransferInput = () => {
  return (
    <div className="flex w-full relative">
      <input
        type="text"
        className="w-full h-12 bg-gray500
        rounded-[100px] pl-6 outline-none focus:border
        border-gray500 focus:ring-0 focus:border-gray-300"
      />
      <button
        className="bg-main rounded-[100px] h-full md:w-44
      absolute right-0 w-32 active:scale-95 transition-all
      duration-200"
      >
        <p
          className="uppercase text-white font-semibold
          md:text-sm text-xs"
        >
          transfer now
        </p>
      </button>
    </div>
  );
};

export default TransferInput;
