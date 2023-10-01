import { memo, useMemo, useCallback, useRef, useState } from "react";

import "./SingleCalendar.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Cell = ({ value, noSelect, today, selectedDay, selectedStart }) => {
  let selectDay = () => {
    selectedDay(value);
  };
  return (
    <td
      className={`h-8 w-8 ${
        value && !noSelect ? "hover:border cursor-pointer" : "text-gray-300"
      } ${today ? "font-bold" : ""} ${
        selectedStart
          ? "bg-[#4ecdc4] text-white text-[12px] font-medium rounded-l-full border-y border-white"
          : ""
      }`}
      onClick={selectDay}
    >
      {value ?? ""}
    </td>
  );
};

const CalTable = ({ show, chooseDate, selectedDate }) => {
  const today = new Date();
  const toShow = new Date(show.getFullYear(), show.getMonth(), 1);

  //Nombre de jours du mois
  const allDays = new Date(
    show.getFullYear(),
    show.getMonth() + 1,
    0
  ).getDate();

  let actual = 1;

  let cal = [
    Array(7).fill(""),
    Array(7).fill(""),
    Array(7).fill(""),
    Array(7).fill(""),
    Array(7).fill(""),
    Array(7).fill(""),
  ];

  //Date à partir de laquel remplir le tableau
  cal[0][toShow.getDay()] = actual++;
  for (let i = toShow.getDay() + 1; i < 7; i++) {
    cal[0][i] = actual++;
  }
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (actual <= allDays) {
        cal[i][j] = actual++;
      }
    }
  }
  let date_1 = [-1, -1, -1];

  if (selectedDate !== "") {
    date_1 = selectedDate.split("/");
    date_1 = [Number(date_1[2]), Number(date_1[1]) - 1, Number(date_1[0])];
  }

  const selectedDay = (value) => {
    chooseDate([
      (value + "").length === 1 ? "0" + value : value,
      (show.getMonth() + 1 + "").length === 1
        ? "0" + (show.getMonth() + 1 + "")
        : show.getMonth() + 1 + "",
      show.getFullYear() + "",
    ]);
  };

  return (
    <div className={`w-full self-center mt-4 `}>
      <table className="text-xs w-full text-center">
        <thead>
          <tr>
            <th className=" font-bold text-[#8E8C9A] pb-2">Su</th>
            <th className="font-bold  text-[#8E8C9A] pb-2">Mo</th>
            <th className="font-bold  text-[#8E8C9A] pb-2">Tu</th>
            <th className="font-bold  text-[#8E8C9A] pb-2">We</th>
            <th className="font-bold  text-[#8E8C9A] pb-2">Th</th>
            <th className="font-bold  text-[#8E8C9A] pb-2">Fr</th>
            <th className="font-bold  text-[#8E8C9A] pb-2">Sa</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            return (
              <tr key={"tr" + i}>
                {cal[i].map((e, idx) => {
                  return (
                    <Cell
                      today={
                        today.getDate() === e &&
                        today.getMonth() === show.getMonth() &&
                        today.getFullYear() === show.getFullYear()
                      }
                      noSelect={false}
                      value={e}
                      key={show.getMonth() + idx + "-" + e}
                      selectedDay={selectedDay}
                      selectedStart={
                        show.getFullYear() === date_1[0] &&
                        show.getMonth() === date_1[1] &&
                        Number(e) === date_1[2]
                      }
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const SingleCalendar = ({ close, setSelectedDate, selectedDate, extra }) => {
  const months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const today = useMemo(() => new Date(), []);

  //Le mois suivant
  let next_date = useRef(new Date());
  next_date.current.setMonth(next_date.current.getMonth() + 1);

  const [currentDate] = useState(new Date(today));
  const [nowMonth, setNowMonth] = useState(months[today.getMonth()]);

  //Suivre l'état des dates déjà sélectionné
  const [choosed, setChoosed] = useState(0);

  const chooseDate = (date) => {
    if (choosed === 0) {
      setSelectedDate(`${date[0]}/${date[1]}/${date[2]}`);
      close();
      setChoosed(1);
    }
  };

  //Clique sur l'icone de flèche vers la gauche
  const prev = useCallback(() => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    setNowMonth(months[currentDate.getMonth()]);

    next_date.current = new Date(currentDate);
    next_date.current.setMonth(next_date.current.getMonth() + 1);
  }, [currentDate, months]);

  //Clique sur l'icone de flèche vers la droite
  const next = useCallback(() => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    setNowMonth(months[currentDate.getMonth()]);

    next_date.current = new Date(currentDate);
    next_date.current.setMonth(next_date.current.getMonth() + 1);
  }, [currentDate, months]);

  return (
    <div
      className={`shadow-lg bg-white rounded-[22px] md:w-[43%] p-3
        select-none w-full z-10 absolute max-md:-left-1 ${extra}`}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex flex-col">
          <div className="flex items-center">
            <FaAngleLeft className="text-xl cursor-pointer" onClick={prev} />
            <div className="font-bold text-center w-full">
              {nowMonth + " " + currentDate.getFullYear()}
            </div>
            <FaAngleRight className="text-xl cursor-pointer" onClick={next} />
          </div>
          <CalTable
            show={currentDate}
            chooseDate={chooseDate}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SingleCalendar);
