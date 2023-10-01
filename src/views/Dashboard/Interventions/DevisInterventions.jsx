import RightButton from "components/Buttons/RightButton";
import Card from "components/Card/Card";
import Container from "components/Container/Container";
import Spacer from "components/Spacer/Spacer";
import { HiDownload } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import stripe from "assets/card/stripe logo.svg";
import cards from "assets/card/all.png";
import card from "assets/card/card.svg";
import visa from "assets/card/visa_logo.svg";
import { DevisModal } from "components/Modals/Modals";
import { useCallback, useState } from "react";

const DevisInterventions = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const paiement = useCallback(() => {
    return navigate("/confirmation", { replace: true });
  }, [navigate]);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">
            Votre devis d'interventions
          </p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <RightButton icon={<HiDownload />} text="Télécharger votre devis" />
      </Container>
      <Card extra="w-full p-3 sm:p-10 mt-8 mb-8">
        <div className="text-sm mb-3">ID Devis</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-5 text-sm place-content-between">
          <div className="font-semibold text-2xl mb-8">#000012</div>
          <Spacer />
          <div className="text-sm font-semibold pt-2 mb-9">
            Date: 16/04/2024
          </div>

          <div className="font-semibold text-sm mb-2">Bill from:</div>
          <Spacer />
          <div className="font-semibold text-sm mb-2">Bill to:</div>

          <div className="mb-2">Martin Menier</div>
          <Spacer />
          <div className="mb-2">Reeact</div>

          <div className="mb-2">11 avenue de la bastille 69500</div>
          <Spacer />
          <div className="mb-2">11 avenue de la bastille 69500</div>

          <div className="mb-2">+ 33 6 63 64 34 54</div>
          <Spacer />
          <div className="mb-2">+ 33 6 63 64 34 54</div>
        </div>
        <div className="text-black text-[20px] font-semibold mt-8 mb-4">
          Détails du devis
        </div>
        <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide">
          <table className="w-full text-black text-sm">
            <thead>
              <tr>
                <th className="text-start border-b border-linecolor pb-3">
                  <span className="font-normal">Détail de la facture</span>
                </th>
                <th className="text-start border-b border-linecolor pb-3 px-1">
                  <span className="font-normal">Prix</span>
                </th>
                <th className="text-start border-b border-linecolor pb-3 px-1">
                  <span className="font-normal">Qté</span>
                </th>
                <th className="text-start border-b border-linecolor pb-3 px-1">
                  <span className="font-normal">Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="py-3">Lorem Ipsum</div>
                </td>
                <td className="px-1">3000 €</td>
                <td className="px-1">2</td>
                <td className="px-1">6000 €</td>
              </tr>
              <tr>
                <td>
                  <div className="py-3">Lorem Ipsum</div>
                </td>
                <td className="px-1">3000 €</td>
                <td className="px-1">2</td>
                <td className="px-1">6000 €</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={3}
                  className="font-semibold text-base border-t border-linecolor"
                >
                  <div className="py-3">Total</div>
                </td>
                <td className="border-t border-linecolor px-1">12.000 €</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="my-8">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name=""
                id="certification"
                className="mr-3 focus:ring-0 text-primary cursor-pointer"
              />
              <label
                htmlFor="certification"
                className="text-sm font-medium cursor-pointer"
              >
                Je certifie ne pas être en procédure contre ce site
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name=""
                id="reconnaissance"
                className="mr-3 focus:ring-0 text-primary cursor-pointer"
              />
              <label
                htmlFor="reconnaissance"
                className="text-sm font-medium cursor-pointer"
              >
                Je reconnais demander une intervention des services reeact
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name=""
                id="conditions"
                className="mr-3 focus:ring-0 text-primary cursor-pointer"
              />
              <label
                htmlFor="conditions"
                className="text-sm font-medium cursor-pointer"
              >
                J'accepte les conditions générales
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-black">
              Méthode de paiement
            </h3>
            <div className="flex-col items-center flex sm:flex-row my-3 pl-3 text-sm font-medium gap-y-3">
              <div className="mr-4 flex">
                <img className="mr-4" src={card} alt="Card" />
                <img src={visa} alt="Visa" />
              </div>
              <div className="flex">
                <span className="mr-4 sm:mr-6">**** **** **** 1234</span>
                <div>Gui Martin</div>
              </div>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-end gap-y-2 gap-x-2 text-xs font-medium">
              <button
                className="text-primary bg-gray100 rounded-[100px] px-3 py-2 w-48 active:scale-[.98] transition-all border border-[#DEE0E4]"
                onClick={openModal}
              >
                Changer ma carte
              </button>
              <button
                className="text-white bg-primary rounded-[100px] px-3 py-2 w-48 active:scale-[.98] transition-all"
                onClick={paiement}
              >
                Payer par carte bancaire
              </button>
            </div>
            <div className="flex justify-end mt-2 gap-x-3">
              <img src={stripe} alt="Stripe" />
              <img src={cards} alt="Cartes" className="mr-4" />
            </div>
          </div>
        </div>

        <div className="flex bg-grayUpload text-sm text-black p-4 rounded-[12px] mb-3 gap-x-3">
          <div>
            <MdInfoOutline size={30} />
          </div>
          <div>
            <h2 className="mb-2">Extrait des conditions générales de ventes</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus unde qui beatae porro exercitationem harum odio
            corporis officiis ipsa nemo, ipsam maxime. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit.
          </div>
        </div>
        <DevisModal open={open} closeModal={closeModal} />
      </Card>
    </>
  );
};

export default DevisInterventions;
