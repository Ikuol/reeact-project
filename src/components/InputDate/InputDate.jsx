import { useState, useCallback } from "react";

import SingleCalendar from "components/InputDate/SingleCalendar";

import { BsCalendarFill } from "react-icons/bs";

const InputDate = ({ extra, setSelectedDate, selectedDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const closeCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((state) => !state);
  }, []);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    closeCalendar();
  };

  return (
    <>
      <div
        onClick={toggleCalendar}
        className="rounded-[100px] border border-gray300 w-full
          h-12 pl-6 flex items-center gap-x-6 cursor-pointer"
      >
        <BsCalendarFill size={20} className="text-main" />
        {selectedDate ? (
          <p className="text-main text-sm">{selectedDate}</p>
        ) : (
          <p className="text-main text-sm">Choisir une date</p>
        )}
      </div>

      {showCalendar && (
        <SingleCalendar
          close={closeCalendar}
          setSelectedDate={handleDateSelection}
          selectedDate={selectedDate}
          extra={extra}
        />
      )}
    </>
  );
};

export default InputDate;
