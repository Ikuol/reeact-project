import { useState } from "react";

import UserInfo from "components/forms/Parametres/UserInfo";
import NewCard from "components/forms/Parametres/NewCard";
import CardRadio from "components/DisplayCard/CardRadio";
import Container from "components/Container/Container";
import Radio from "components/Radio/Radio";
import Card from "components/Card/Card";

import { FcGoogle } from "react-icons/fc";

import avatar from "assets/avatars/men.png";


const Parametres = () => {
  const [cardSelected, setCardSelected] = useState("");

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">
            Paramètres de compte
          </p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>
      <Card extra="w-full p-3 sm:p-10 mt-8 mb-8">
        <div
          className="flex w-full bg-white rounded-[20px] pt-8 md:px-16
          justify-center pb-8 px-4"
        >
          <div className="flex w-full flex-col gap-y-10">
            <div className="flex justify-between">
              <div className="flex gap-x-4 items-center">
                <span className="flex">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </span>
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold text-sm text-main">
                    Nicolas Brissaud
                  </p>
                  <p className="font-normal text-main text-sm">Abonné</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 md:mr-14">
                <p className="text-green text-sm font-semibold">Actif</p>
                <p className="font-normal text-sm text-main">29€ + 15€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-2 md:ml-14">
                <p className="font-semibold text-sm text-main">Mots clés</p>
                <p className="font-normal text-main text-sm">
                  Novaweb, graphiste
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-semibold text-sm text-main">
                  Moteurs/Réseaux
                </p>
                <FcGoogle size={20} />
              </div>
            </div>
          </div>
        </div>

        <Card extra="bg-white py-4 px-5 sm:py-5 sm:px-10 mt-8">
          <h2 className="text-main font-medium text-xl">Informations</h2>
          <div className="flex flex-col gap-y-8">
            <CardRadio
              value="1"
              name="cardradio"
              selected={cardSelected}
              setCardSelected={setCardSelected}
            />
            <CardRadio
              value="2"
              name="cardradio"
              selected={cardSelected}
              setCardSelected={setCardSelected}
            />
            <CardRadio
              value="3"
              name="cardradio"
              selected={cardSelected}
              setCardSelected={setCardSelected}
            />
            <label className="flex gap-x-6 md:px-8 cursor-pointer">
              <Radio
                selected={cardSelected}
                onChange={(e) => setCardSelected(e.target.value)}
                value="4"
                name="cardradio"
              />
              <p className="text-sm text-main font-medium">
                Ajouter une nouvelle carte
              </p>
            </label>
          </div>
          {cardSelected === "4" ? (
            <div className="flex flex-col gap-y-4 mt-6">
              <h2 className="text-main font-semibold text-xl">
                Nouvelle carte
              </h2>
              <NewCard />
            </div>
          ) : (
            <div className="flex justify-center sm:justify-end mt-4">
              <button
                className="bg-main text-white rounded-[48px]
              active:scale-95 transition-all duration-200 h-14 w-64"
              >
                <p className="font-medium text-sm text-center">Valider</p>
              </button>
            </div>
          )}
        </Card>

        <UserInfo />
      </Card>
    </>
  );
};

export default Parametres;
