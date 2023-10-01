import { useState } from "react";

import { useNavigate } from "react-router-dom";

import StepsButton from "components/Buttons/StepsButton";
import Step1 from "./Step1";
import Step2 from "./Step2";

import { BsCheckCircleFill } from "react-icons/bs";

import stripe from "assets/card/stripe logo.svg";
import cards from "assets/card/all.png";
import { useForm } from "react-hook-form";

const RegisterSteps = () => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const backToPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextToPage = () => {
    setPage(page + 1);
  };

  const { register, watch, getValues } = useForm({
    defaultValues: {
      type: "Société",
    },
  });

  //fonction de soumission puis redirection en cas de succès
  //sur la page de succès
  const handleSubmit = () => {
    const data = getValues();
    console.log(data);

    //Normalement naviguer vers la page de paiement d'abord

    navigate("/register-success");
  };

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <Step1 register={register} watch={watch} />;
      case 1:
        return <Step2 register={register} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col bg-white rounded-[20px] md:px-24
      pt-8 z-10 w-full px-6 mb-16 shadow-lg"
    >
      <h2 className="text-main font-semibold md:text-[32px] text-2xl">
        Votre inscription Reeact
      </h2>
      <div className="flex items-center mt-8 mb-2 gap-x-2">
        <p className="text-main font-medium md:text-xl text-sm">Register</p>
        <div className="flex md:gap-x-2 gap-x-1 items-center">
          <div className="bg-main md:w-[25px] w-3 h-px" />
          <BsCheckCircleFill size={20} />
          <div className="bg-main md:w-[25px] w-3 h-px" />
        </div>
        <p className="text-main font-medium md:text-xl text-sm">Informations</p>
        <div className="flex md:gap-x-2 gap-x-1 items-center">
          <div className="bg-main md:w-[25px] w-3 h-px" />
          <BsCheckCircleFill
            size={20}
            className={`${page === 0 ? "text-gray-400" : ""}`}
          />
          <div className="bg-main md:w-[25px] w-3 h-px" />
        </div>
        <p
          className={`text-main font-medium md:text-xl text-sm ${
            page === 0 ? "text-gray-400" : ""
          }`}
        >
          Paiement
        </p>
      </div>
      {conditionalComponent()}
      <div className="flex justify-end mt-12 mb-6">
        <div className="flex gap-x-3 items-center">
          <StepsButton
            onClick={backToPage}
            extra="bg-gray100"
            textColor="text-main"
          >
            Retour
          </StepsButton>
          <StepsButton
            onClick={() => {
              page === 1 ? handleSubmit() : nextToPage();
            }}
            extra="bg-main"
            textColor="text-white"
          >
            Valider
          </StepsButton>
        </div>
      </div>
      {page === 1 && (
        <div className="flex justify-end gap-x-6 mb-8">
          <img src={stripe} alt="Stripe" />
          <img src={cards} alt="Cartes" className="mr-4" />
        </div>
      )}
    </div>
  );
};

export default RegisterSteps;
