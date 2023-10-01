const DisplayNumber = ({ text, number }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm text-main font-medium">{text}</p>
      <span className="flex items-center w-52 h-10">
        <p className="text-main text-2xl font-semibold">{number}</p>
      </span>
    </div>
  );
};

export default DisplayNumber;
