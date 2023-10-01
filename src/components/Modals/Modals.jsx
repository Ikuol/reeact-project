import { useCallback, useState } from "react";

import BaseModal from "./BaseModal";
import Toggle from "components/Toggle/Toggle";
import Radio from "components/Radio/Radio";
import InputLabel from "components/InputLabel/InputLabel";
import Input from "components/Input/Input";
import CheckBox from "components/CheckBox/CheckBox";
import CardRadio from "components/DisplayCard/CardRadio";
import MessageIntervention from "components/MessageIntervention/MessageIntervention";

// Modal du datepicker
export const DatePickerModal = ({ closeModal, children }) => {
  return (
    <BaseModal closeModal={closeModal} purpose="Changer la période">
      <div className="w-full flex justify-center">{children}</div>
    </BaseModal>
  );
};

// Modal de la page d'alertes
export const AlertModal = ({ closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const onOptionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <BaseModal closeModal={closeModal} purpose="Paramètres d'alertes">
      <div className="w-full justify-between m-auto ">
        <div className="flex max-md:flex-col max-md:gap-y-2 justify-between">
          <div className="flex flex-col sm:gap-y-4 gap-y-2 sm:w-80">
            <p className="text-main font-semibold">Types de mentions</p>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">Positives</p>
              <Toggle />
            </label>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">Neutres</p>
              <Toggle />
            </label>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">Négative</p>
              <Toggle />
            </label>
          </div>
          <div className="flex flex-col sm:gap-y-4 gap-y-2 sm:w-80">
            <p className="text-main font-semibold">Source de la mention</p>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">
                Moteur de recherche
              </p>
              <Toggle />
            </label>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">Blog</p>
              <Toggle />
            </label>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">Réseau sociaux</p>
              <Toggle />
            </label>
          </div>
        </div>
        <div className="w-full mt-4 mb-4 h-px bg-linecolor" />
        <div className="flex max-md:flex-col max-md:gap-y-2 justify-between">
          <div className="flex flex-col sm:gap-y-4 gap-y-2 sm:w-80">
            <p className="text-main font-semibold">Préférences de contact</p>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">Email</p>
              <Toggle />
            </label>
            <label className="flex justify-between cursor-pointer">
              <p className="text-main text-sm font-normal">SMS</p>
              <Toggle />
            </label>
          </div>
          <div className="flex flex-col sm:gap-y-4 gap-y-2 sm:w-80">
            <p className="text-main font-semibold">Fréquences de contact</p>
            <label className="flex gap-x-3 cursor-pointer">
              <Radio
                value="Mensuel"
                checked={selectedValue === "Mensuel"}
                onChange={onOptionChange}
              />
              <p className="text-main text-sm font-normal">Mensuel</p>
            </label>
            <label className="flex gap-x-3 cursor-pointer">
              <Radio
                value="Hebdomadaire"
                checked={selectedValue === "Hebdomadaire"}
                onChange={onOptionChange}
              />
              <p className="text-main text-sm font-normal">Hebdomadaire</p>
            </label>
            <label className="flex gap-x-3 cursor-pointer">
              <Radio
                value="Journalier"
                checked={selectedValue === "Journalier"}
                onChange={onOptionChange}
              />
              <p className="text-main text-sm font-normal">Journalier</p>
            </label>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

// Lodal de la page d'intervention
export const InterventionsModal = ({ open, closeModal, data }) => {
  return open ? (
    <BaseModal closeModal={closeModal} purpose="Demande d'informations">
      <div
        className="flex flex-col whitespace-normal text-[14px] font-medium
      leading-6 gap-y-3 sm:gap-y-8 self-center w-full"
      >
        <div>{data.question}</div>
        <form>
          <div className="flex flex-col gap-y-2">
            <InputLabel value="Réponse" />
            <textarea
              rows={5}
              className="block p-2.5 w-full text-sm rounded-[20px] text-main
              border border-gray-300 focus:ring-0 focus:border-gray-400
              placeholder:text-gray-500 placeholder:text-[14px] placeholder:font-medium"
              placeholder="Entrer votre réponse..."
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-primary text-white rounded-[100px] px-10
            py-2 text-[12px]"
            >
              Envoyer la réponse
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  ) : null;
};

//Modal pour changer sa carte sur la page de devis d'interventions
export const DevisModal = ({ open, closeModal }) => {
  const [cardSelected, setCardSelected] = useState("");

  const onSelectionChange = useCallback(
    (value) => {
      setCardSelected(value);
      closeModal();
    },
    [closeModal]
  );

  return open ? (
    <BaseModal closeModal={closeModal} purpose="Méthode de paiement">
      <div
        className="flex flex-col whitespace-normal text-sm font-medium
      leading-6 gap-y-3 sm:gap-y-8 self-center w-full"
      >
        <div className="flex flex-col gap-y-4">
          <CardRadio
            value="1"
            name="cardradio"
            selected={cardSelected}
            setCardSelected={onSelectionChange}
          />
          <CardRadio
            value="2"
            name="cardradio"
            selected={cardSelected}
            setCardSelected={onSelectionChange}
          />
          <CardRadio
            value="3"
            name="cardradio"
            selected={cardSelected}
            setCardSelected={onSelectionChange}
          />
        </div>
      </div>
    </BaseModal>
  ) : null;
};

//Modal pour la page d'analyse et résultat d'analyse
export const AnalyseModal = ({ closeModal, data, open }) => {
  return open ? (
    <BaseModal closeModal={closeModal} purpose="Confirmation">
      <div
        className="flex flex-col whitespace-normal text-[14px]
      font-medium leading-6 gap-y-3 sm:gap-y-8 self-center w-full"
      >
        <div className="bg-grayUpload text-main rounded-xl p-6">
          <p className="font-normal text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-y-2">
            <InputLabel value="Informations supplémentaires (optionnel)" />
            <textarea
              rows={3}
              className="block p-2.5 w-full text-sm rounded-[20px] text-main
              border border-gray-300 focus:ring-0 focus:border-gray-400
              placeholder:text-gray-500 placeholder:text-[14px] placeholder:font-medium"
              placeholder="Entrer votre réponse"
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-6">
            <div className="flex gap-x-3 items-center">
              <CheckBox />
              <p className="font-medium md:text-sm text-xs text-main">
                Je certifie ne pas etre en procedure contre ce site
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <CheckBox />
              <p className="font-medium md:text-sm text-xs text-main">
                Je reconnais que la demande d’intervention necessite un devis{" "}
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <CheckBox />
              <p className="font-medium md:text-sm text-xs text-main">
                J’accepte les conditions générales et je demande un devis pour
                la demande d’intervention
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-primary text-white rounded-[100px]
            px-10 py-2 text-[12px]"
            >
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  ) : null;
};

//Devis demande d'intervention, partie admin
export const InterventionsDevis = ({ open, closeModal, data }) => {
  return open === "devis" ? (
    <BaseModal closeModal={closeModal} purpose="Devis demande d'intervention">
      <div
        className="flex flex-col whitespace-normal text-[14px] font-medium
      leading-6 gap-y-3 sm:gap-y-8 self-center w-full"
      >
        <div className="bg-grayUpload text-main rounded-xl text-sm p-6">
          {data.intervention}
        </div>
        <form>
          <div className="flex flex-col gap-y-2">
            <InputLabel>Proposer un devis d'un montant de</InputLabel>
            <Input
              className="block p-2.5 w-full text-sm rounded-[20px] text-main
              border border-gray-300 focus:ring-0 focus:border-gray-400
              placeholder:text-gray-500 placeholder:text-[14px] placeholder:font-medium h-12"
              placeholder="Entrer votre prix"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-primary text-white rounded-[100px] px-10
            py-2 text-xs w-48 h-10"
            >
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  ) : null;
};

//Demande d'informations complémentaires
export const InfoComplementaire = ({ open, closeModal, data }) => {
  return open === "info" ? (
    <BaseModal
      closeModal={closeModal}
      purpose="Demande d'informations complémentaires"
    >
      <div
        className="flex flex-col whitespace-normal text-[14px] font-medium
      leading-6 gap-y-3 sm:gap-y-8 self-center w-full"
      >
        <div
          className="bg-grayUpload text-main rounded-xl text-sm p-6
        flex flex-col gap-y-4"
        >
          <MessageIntervention
            origin="Question admin"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, "
          />
          <MessageIntervention
            origin="Réponse client"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, "
          />
        </div>
        <form>
          <div className="flex flex-col gap-y-2">
            <InputLabel>Informations supplémentaires</InputLabel>
            <textarea
              rows={5}
              className="block p-2.5 w-full text-sm rounded-[20px] text-main
              border border-gray-300 focus:ring-0 focus:border-gray-400
              placeholder:text-gray-500 placeholder:text-[14px] placeholder:font-medium"
              placeholder="Entrer votre réponse"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-primary text-white rounded-[100px] px-10
            py-2 text-xs w-48 h-10"
            >
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  ) : null;
};
