import { BsFillCaretDownFill } from "react-icons/bs";

const DisplayStat = ({ children, extra }) => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div
        className={`w-full md:h-[298px] md:px-12
        rounded-[20px] flex flex-col p-6 z-20
        justify-between px-8 ${extra ?? ""}`}
      >
        {children}
      </div>
      <div
        className="w-full md:max-w-[78rem] h-[215px] z-10
      rounded-[19px] bg-white absolute md:top-[34%] shadow-xl
       max-w-[320px] top-[71%]"
      />
      <div
        className="w-full md:max-w-[73rem] h-[215px] max-w-[290px]
      rounded-[19px] bg-white absolute md:top-[40%] shadow-md
      top-[73%]"
      />
      <span
        className="flex md:w-20 md:h-20 rounded-full bg-white
        md:top-[90%] z-20 absolute shadow-md justify-center
        items-center cursor-pointer top-[97%] w-16 h-16"
      >
        <BsFillCaretDownFill size="2rem" />
      </span>
    </div>
  );
};

export default DisplayStat;
