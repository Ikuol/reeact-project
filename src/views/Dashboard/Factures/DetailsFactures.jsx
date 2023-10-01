import RightButton from "components/Buttons/RightButton";
import Card from "components/Card/Card";
import Container from "components/Container/Container";
import Spacer from "components/Spacer/Spacer";

import { HiDownload } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";

const DetailsFactures = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Détails facture</p>
          <p className="text-secondary hidden md:block text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <RightButton icon={<HiDownload />} text="Télécharger vos Factures" />
      </Container>
      <Card extra="w-full p-3 sm:p-10 mt-8 mb-8 bg-white">
        <div className="text-sm mb-3">ID Facture</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-5 text-sm place-content-between">
          <div className="font-semibold text-2xl mb-8">#000012</div>
          <Spacer />
          <div className="text-sm font-semibold pt-2 mb-9">
            Date: 16/04/2024
          </div>

          <div className="font-semibold text-sm mb-2">Bill from:</div>
          <Spacer />
          <div className="font-semibold text-sm mb-2">Bill to:</div>

          <div className="mb-2">Novaweb studio</div>
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
          Détails de la facture
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
          <div className="text-sm font-semibold">Méthode de paiement</div>
          <div className="text-sm font-normal">Mastercard 3375</div>
        </div>

        <div className="flex bg-grayUpload text-sm text-black p-4 rounded-[12px] mb-3 gap-x-3">
          <div>
            <MdInfoOutline size={30} />
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus unde qui beatae porro exercitationem harum odio
            corporis officiis ipsa nemo, ipsam maxime. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit.
          </div>
        </div>
      </Card>
    </>
  );
};

export default DetailsFactures;
