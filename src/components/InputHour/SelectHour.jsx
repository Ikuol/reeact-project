import { Fragment } from "react";

const Bloc = ({ heure, minute, chooseHours, selected }) => {
  return (
    <div
      className={`border rounded-[22px] px-8 py-2 mb-1 cursor-pointer hover:border-green hover:text-green ${
        selected ? "border-green text-green " : ""
      }`}
      onClick={() => chooseHours(`${heure}:${minute}`)}
    >{`${heure} : ${minute}`}</div>
  );
};

const SelectHour = ({ close, selectedHour, setSelectedHour, extra }) => {
  let heures = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

  const chooseHours = (hours) => {
    setSelectedHour(hours);
    close();
  };

  return (
    <div
      className={`absolute z-10 md:w-[43%] h-[314px] bg-white
        rounded-[22px] p-3 shadow-lg w-full max-md:-left-1 ${extra}`}
    >
      <div className="w-full flex flex-col">
        <span className="font-bold text-center mb-2">Heure de départ</span>
        <div className="flex flex-col items-center overflow-y-scroll h-[250px]">
          {heures.map((value) => (
            <Fragment key={value}>
              <Bloc
                heure={value}
                minute={"00"}
                chooseHours={chooseHours}
                selected={selectedHour === `${value}:00`}
              />
              <Bloc
                heure={value}
                minute={"30"}
                chooseHours={chooseHours}
                selected={selectedHour === `${value}:30`}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectHour;
