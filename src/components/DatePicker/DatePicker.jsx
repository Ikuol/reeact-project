import { useCallback, useState } from "react";
import Calendar from "./Calendar";

import { BsCalendarFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { DatePickerModal } from "components/Modals/Modals";

const DatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [firstDate, setFirstDate] = useState("Départ");
  const [secondDate, setSecondDate] = useState("Fin");

  const closeCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((state) => !state);
  }, []);

  return (
    <>
      <div
        onClick={toggleCalendar}
        className="bg-white rounded-[20px] flex items-center
        h-16 w-80 justify-between px-4 cursor-pointer shadow-md
        max-md:mt-2"
      >
        <BsCalendarFill size={20} className="text-main" />
        <div className="flex flex-col justify-between">
          <p className="font-semibold text-main text-base">Choisir periode</p>
          <p className="text-inactive text-sm font-medium">
            {firstDate} - {secondDate}
          </p>
        </div>
        <AiFillCaretDown size={20} className="text-main" />
      </div>

      {showCalendar && (
        <DatePickerModal closeModal={closeCalendar}>
          <Calendar
            isShow={showCalendar}
            close={closeCalendar}
            firstDate={firstDate}
            secondDate={secondDate}
            setFirstDate={setFirstDate}
            setSecondDate={setSecondDate}
          />
        </DatePickerModal>
      )}
    </>
  );
};

export default DatePicker;
