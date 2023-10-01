import { BsFillCaretDownFill } from "react-icons/bs";

const ReputationScore = ({ children, extra }) => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div
        className={`w-auto h-[298px] px-12
        rounded-[20px] flex flex-col p-6 z-20
        justify-between ${extra ?? ""}`}
      >
        {children}
      </div>
      <div
        className="w-full md:max-w-[620px] h-[215px] z-10
      rounded-[19px] bg-white absolute md:top-[30%] shadow-lg
       max-w-[320px] top-[35%]"
      />
      <div
        className="w-full md:max-w-[420px] h-[215px] max-w-[290px]
      rounded-[19px] bg-white absolute md:top-[38%] shadow-lg
      top-[40%]"
      />
      <span
        className="flex md:w-20 md:h-20 rounded-full bg-white
        md:top-[80%] z-20 absolute shadow-lg justify-center
        items-center cursor-pointer top-full w-14 h-14"
      >
        <BsFillCaretDownFill size="2rem" />
      </span>
    </div>
  );
};

export default ReputationScore;
