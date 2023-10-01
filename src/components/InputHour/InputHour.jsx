import { useState, useCallback } from "react";

import SelectHour from "./SelectHour";

import { BsCalendarFill } from "react-icons/bs";

const InputHour = ({ extra, selectedHour, setSelectedHour }) => {
  const [showSelectHour, setShowSelectHour] = useState(false);

  const closeSelectHour = useCallback(() => {
    setShowSelectHour(false);
  }, []);

  const toggleSelectHour = useCallback(() => {
    setShowSelectHour((state) => !state);
  }, []);

  const handleHourSelection = (hour) => {
    setSelectedHour(hour);
    closeSelectHour();
  };

  return (
    <>
      <div
        onClick={toggleSelectHour}
        className="rounded-[100px] border border-gray300 w-full
          h-12 pl-6 flex items-center gap-x-6 cursor-pointer"
      >
        <BsCalendarFill size={20} />
        {selectedHour ? (
          <p className="text-main text-sm">{selectedHour}</p>
        ) : (
          <p className="text-main text-sm">Choisir une heure</p>
        )}
      </div>

      {showSelectHour && (
        <SelectHour
          close={closeSelectHour}
          setSelectedHour={handleHourSelection}
          selectedHour={selectedHour}
          extra={extra}
        />
      )}
    </>
  );
};

export default InputHour;
