import { BsThreeDotsVertical } from "react-icons/bs";

import card from "assets/svg/card.svg";
import visa from "assets/svg/visalogo.svg";
import { memo } from "react";

const CardRadio = ({ value, name, selected, setCardSelected }) => {
  const onOptionChange = (e) => {
    setCardSelected(e.target.value);
  };

  return (
    <label
      className={`flex justify-between w-full hover:bg-grayUpload
      cursor-pointer rounded-[20px] items-center md:px-8 pt-3 pb-3 ${
        selected === value ? "bg-grayUpload" : "bg-white"
      } max-md:gap-x-4 px-2`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onOptionChange}
        className="w-4 h-4 bg-gray-100
        focus:bg-gray-500 focus:ring-0
        cursor-pointer text-gray-600 outline-none
        focus:border-gray-700 border"
      />
      <span>
        <img src={card} alt="card" className="w-full h-full" />
      </span>
      <span>
        <img src={visa} alt="card" className="w-full h-full" />
      </span>
      <p className="text-main max-md:truncate font-medium md:text-sm text-xs">
        **** **** **** 1234
      </p>
      <p className="text-main max-md:truncate font-medium md:text-sm text-xs">Gui Martin</p>
      <BsThreeDotsVertical size={20} />
    </label>
  );
};

export default memo(CardRadio);
