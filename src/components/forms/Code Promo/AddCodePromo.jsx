import { useState, memo } from "react";

import { useForm } from "react-hook-form";

import InputLabel from "components/InputLabel/InputLabel";
import TypePromo from "components/TypePromo/TypePromo";
import InputDate from "components/InputDate/InputDate";
import InputHour from "components/InputHour/InputHour";
import CheckBox from "components/CheckBox/CheckBox";
import Input from "components/Input/Input";

const AddCodePromo = () => {
  const [startedDate, setStartedDate] = useState("");
  const [startedHour, setStartedHour] = useState("");

  const [finishedDate, setFinishedDate] = useState("");
  const [finishedHour, setFinishedHour] = useState("");

  const { register, handleSubmit } = useForm({
    defaultValues: {
      codepromo: "",
      valeurpromo: "",
      datedepart: startedDate,
      heuredepart: startedHour,
      datefin: "",
      heurefin: "",
    },
  });

  const [endDate, setEndDate] = useState(false);

  const [active, setActive] = useState("fixe");

  const setPercent = () => {
    setActive("pourcentage");
    console.log("pourcentage");
  };

  const setFix = () => {
    setActive("fixe");
    console.log("fixe");
  };

  const showEndDate = () => {
    setEndDate(!endDate);
  };

  //fonction de soumission du formulaire
  const onSubmit = (data) => {
    console.log(
      data.codepromo,
      data.valeurpromo,
      startedDate,
      startedHour,
      finishedDate,
      finishedHour
    );
  };

  return (
    <div
      className="w-full flex flex-col rounded-[20px] h-auto
      md:px-20 px-4 pt-12 pb-12 bg-white gap-y-6 relative"
    >
      <h2 className="text-main font-semibold md:text-2xl text-xl">
        Nouveau code promo
      </h2>
      <form
        className="flex flex-col gap-y-6"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-3">
          <InputLabel htmlFor="code-promo" className="text-sm">
            Code Promo
          </InputLabel>
          <Input
            type="text"
            id="code-promo"
            autoComplete="off"
            placeholder="Nom du code"
            className="md:w-[48%] w-full h-12"
            {...register("codepromo")}
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <InputLabel htmlFor="valeur" className="text-sm">
            Valeur
          </InputLabel>
          <div
            className="flex max-md:flex-col w-full gap-x-12
          justify-between gap-y-4"
          >
            {/* composant pour sélectionner le type de montant:
            poucentage ou fixe */}
            <TypePromo
              active={active}
              setFix={setFix}
              setPercent={setPercent}
            />
            <Input
              type="text"
              id="valeur"
              autoComplete="off"
              placeholder={active === "fixe" ? "0.00€" : "0.00%"}
              className="w-full h-12"
              {...register("valeurpromo")}
            />
          </div>
        </div>
        <div
          className="flex max-md:flex-col w-full gap-x-12
          gap-y-4 justify-between"
        >
          <div className="flex flex-col gap-y-3 w-full">
            <InputLabel htmlFor="date-depart" className="text-sm">
              Date de départ
            </InputLabel>

            {/* Composant pour sélectionner la date */}
            <InputDate
              extra="md:top-12 top-28"
              selectedDate={startedDate}
              setSelectedDate={setStartedDate}
            />
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <InputLabel htmlFor="heure-depart" className="text-sm">
              Heure de départ
            </InputLabel>

            {/* Composant pour sélectionner l'heure */}
            <InputHour
              extra="md:top-6 top-36"
              selectedHour={startedHour}
              setSelectedHour={setStartedHour}
            />
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <CheckBox onChange={showEndDate} />
          <p className="text-sm font-normal text-main">Fixer une date de fin</p>
        </div>
        {endDate === true && (
          <div
            className="flex max-md:flex-col w-full gap-x-12
            gap-y-4 justify-between"
          >
            <div className="flex flex-col gap-y-3 w-full">
              <InputLabel htmlFor="date-fin" className="text-sm">
                Date de fin
              </InputLabel>
              <InputDate
                extra="md:top-48 top-[38%]"
                selectedDate={finishedDate}
                setSelectedDate={setFinishedDate}
              />
            </div>
            <div className="flex flex-col gap-y-3 w-full">
              <InputLabel htmlFor="heure-fin" className="text-sm">
                Heure de fin
              </InputLabel>
              <InputHour
                extra="md:top-40 top-[42%]"
                selectedHour={finishedHour}
                setSelectedHour={setFinishedHour}
              />
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="bg-main text-white rounded-[48px] mt-4
              active:scale-95 transition-all duration-200 h-14 w-64"
          >
            <p className="font-medium text-sm text-center">Valider</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(AddCodePromo);
