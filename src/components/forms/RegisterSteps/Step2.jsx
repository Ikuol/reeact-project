import { useState } from "react";

import HorizontalInputLayout from "../Parametres/HorizontalInputLayout";
import InputLabel from "components/InputLabel/InputLabel";
import Input from "components/Input/Input";

const Step2 = ({ register }) => {
  const [promo, setPromo] = useState(false);

  //La fonction devant se charger de l'ajout de promotion
  const addCodePromo = () => {
    setPromo(!promo);
  };

  return (
    <div className="flex flex-col gap-y-3 mt-6">
      <h2 className="font-semibold text-xl text-black">Votre abonnement</h2>
      <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide">
        <table className="w-full text-black text-sm">
          <thead>
            <tr>
              <th className="text-start border-b border-linecolor pb-3">
                <span className="font-normal">Désignation</span>
              </th>
              <th className="text-start border-b border-linecolor pb-3 px-1">
                <span className="font-normal">Prix HT</span>
              </th>
              <th className="text-start border-b border-linecolor pb-3 px-1">
                <span className="font-normal">TVA 20%</span>
              </th>
              <th className="text-start border-b border-linecolor pb-3 px-1">
                <span className="font-normal">Total TTC</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">
                <div className="py-3 hidden md:block">
                  Votre abonnement reeact
                </div>
                <div className="py-3 md:hidden">Abonnement</div>
              </td>
              <td className="px-1">25.00 €</td>
              <td className="px-1">4.00 €</td>
              <td className="px-1">29.00 €</td>
            </tr>
            {promo === true && (
              <tr>
                <td colSpan={3} className="border-t border-linecolor">
                  <div className="py-3">Remise code promo "DISCOUNT10"</div>
                </td>
                <td className="px-1 border-t border-linecolor">-3.00 €</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={3}
                className={`font-semibold text-base ${
                  !promo ? " border-t border-linecolor" : ""
                }`}
              >
                <div className="py-3">Total</div>
              </td>
              <td
                className={`font-semibold ${
                  !promo ? "border-t border-linecolor" : ""
                } px-1 pl-2`}
              >
                26.00 €
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-normal text-main text-sm">Code promo</p>
        <div className="flex md:w-3/4 relative">
          <input
            type="text"
            className="w-full h-12 bg-white
            rounded-[100px] pl-6 outline-none
            border-gray300 focus:ring-0
            focus:border-gray-400"
          />
          <button
            onClick={addCodePromo}
            className="bg-main rounded-[100px] h-full md:w-44
            absolute right-0 w-32 active:scale-95 transition-all
            duration-200"
          >
            <p
              className="text-white font-semibold
              md:text-sm text-xs"
            >
              Valider
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <h2 className="font-semibold text-main text-xl">Méthode de paiement</h2>
        <form className="flex flex-col gap-y-6 mt-4">
          <HorizontalInputLayout>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <InputLabel htmlFor="carte">Numéro de carte</InputLabel>
              <Input
                id="carte"
                autoComplete="off"
                placeholder="0000 0000 0000 0000"
                {...register("cardNumber")}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <InputLabel htmlFor="titulaire">Nom du titulaire</InputLabel>
              <Input
                id="titulaire"
                autoComplete="off"
                placeholder="Nom du titulaire"
                {...register("name")}
                className="w-full"
              />
            </div>
          </HorizontalInputLayout>
          <HorizontalInputLayout>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <InputLabel htmlFor="expiration">Date d'expiration</InputLabel>
              <Input
                id="expiration"
                autoComplete="off"
                placeholder="MM/AA"
                {...register("expired_at")}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:w-[45%]">
              <InputLabel htmlFor="cvc">CVC</InputLabel>
              <Input
                id="cvc"
                autoComplete="off"
                placeholder="xxx"
                extra="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                maxLength={3}
                {...register("cvc")}
                className="w-full"
              />
            </div>
          </HorizontalInputLayout>
          <div className="flex flex-col gap-y-4 mt-4">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="condition1"
                className="mr-3 focus:ring-0 text-primary cursor-pointer"
              />
              <label
                htmlFor="condition1"
                className="text-sm font-medium cursor-pointer text-main"
              >
                J'accepte les conditions générales de ventes du logiciel Reeact
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="condition2"
                className="mr-3 focus:ring-0 text-primary cursor-pointer"
              />
              <label
                htmlFor="condition2"
                className="text-sm font-medium cursor-pointer text-main"
              >
                J'accepte les conditions générales d'utilisation du logiciel
                Reeact
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
