import { useState, memo, useMemo, useCallback, useRef } from "react";

import "./Calendar.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Cell = ({
  value,
  noSelect,
  today,
  selectedDay,
  inRange,
  selectedStart,
  selectedEnd,
}) => {
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
      } ${
        selectedEnd
          ? "bg-[#4ecdc4] text-white text-[12px] font-medium rounded-r-full border-y border-white "
          : ""
      } ${
        inRange
          ? "bg-[#4ecdc4] text-white text-[12px] font-medium  border-y border-white"
          : ""
      }`}
      onClick={selectDay}
    >
      {value ?? ""}
    </td>
  );
};

const CalTable = ({ show, chooseDate, firstDate, secondDate }) => {
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
  let date_2 = [-1, -1, -1];
  let borne1;
  let borne2;

  if (firstDate !== "Départ") {
    date_1 = firstDate.split("/");
    date_1 = [Number(date_1[2]), Number(date_1[1]) - 1, Number(date_1[0])];
    borne1 = new Date(Number(date_1[0]), Number(date_1[1]), Number(date_1[2]));
  }

  if (secondDate !== "Fin") {
    date_2 = secondDate.split("/");
    date_2 = [Number(date_2[2]), Number(date_2[1]) - 1, Number(date_2[0])];
    borne2 = new Date(Number(date_2[0]), Number(date_2[1]), Number(date_2[2]));
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
                  let actual = new Date(show.getFullYear(), show.getMonth(), e);

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
                      selectedEnd={
                        show.getFullYear() === date_2[0] &&
                        show.getMonth() === date_2[1] &&
                        Number(e) === date_2[2]
                      }
                      inRange={e && borne1 < actual && borne2 > actual}
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

const Calendar = ({
  isShow,
  close,
  firstDate,
  setFirstDate,
  secondDate,
  setSecondDate,
}) => {
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
  const [comingDate, setComingDate] = useState(new Date(next_date.current));
  const [nowMonth, setNowMonth] = useState(months[today.getMonth()]);
  const [nextMonth, setNextMonth] = useState(
    months[next_date.current.getMonth()]
  );

  //Suivre l'état des dates déjà sélectionné
  const [choosed, setChoosed] = useState(0);

  const chooseDate = (date) => {
    if (choosed === 0) {
      if (secondDate === "Fin") {
        setFirstDate(`${date[0]}/${date[1]}/${date[2]}`);
      } else {
        let date_ = secondDate.split("/");
        let date2 = new Date(
          Number(date_[2]),
          Number(date_[1]) - 1,
          Number(date_[0])
        );
        let date1 = new Date(
          Number(date[2]),
          Number(date[1]) - 1,
          Number(date[0])
        );
        if (date2 < date1) {
          setFirstDate(`${date[0]}/${date[1]}/${date[2]}`);
          setSecondDate(`${date[0]}/${date[1]}/${date[2]}`);
        } else {
          setFirstDate(`${date[0]}/${date[1]}/${date[2]}`);
        }
      }
      setChoosed(1);
    } else if (choosed === 1) {
      let date_ = firstDate.split("/");
      let date1 = new Date(
        Number(date_[2]),
        Number(date_[1]) - 1,
        Number(date_[0])
      );
      let date2 = new Date(
        Number(date[2]),
        Number(date[1]) - 1,
        Number(date[0])
      );
      if (date2 > date1) {
        setSecondDate(`${date[0]}/${date[1]}/${date[2]}`);
      } else {
        setSecondDate(`${date_[0]}/${date_[1]}/${date_[2]}`);
      }
      close();
      setChoosed(0);
    }
  };

  //Clique sur l'icone de flèche vers la gauche
  const prev = useCallback(() => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    setNowMonth(months[currentDate.getMonth()]);

    next_date.current = new Date(currentDate);
    next_date.current.setMonth(next_date.current.getMonth() + 1);

    setComingDate(new Date(next_date.current));
    setNextMonth(months[next_date.current.getMonth()]);
  }, [currentDate, months]);

  //Clique sur l'icone de flèche vers la droite
  const next = useCallback(() => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    setNowMonth(months[currentDate.getMonth()]);

    next_date.current = new Date(currentDate);
    next_date.current.setMonth(next_date.current.getMonth() + 1);

    setComingDate(new Date(next_date.current));
    setNextMonth(months[next_date.current.getMonth()]);
  }, [currentDate, months]);

  return (
    <div className={`shadow-lg bg-white rounded-[22px] p-3 select-none`}>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col">
          <div className="flex items-center">
            <FaAngleLeft className="text-xl cursor-pointer" onClick={prev} />
            <div className="font-bold text-center w-full">
              {nowMonth + " " + currentDate.getFullYear()}
            </div>
          </div>
          <CalTable
            show={currentDate}
            chooseDate={chooseDate}
            firstDate={firstDate}
            secondDate={secondDate}
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <div className="flex items-center">
            <div className="font-bold text-center w-full">
              {nextMonth + " " + comingDate.getFullYear()}
            </div>
            <FaAngleRight className="text-xl cursor-pointer" onClick={next} />
          </div>
          <CalTable
            show={comingDate}
            chooseDate={chooseDate}
            firstDate={firstDate}
            secondDate={secondDate}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Calendar);
