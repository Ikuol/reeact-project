import { useMemo, useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

import RightButton from "components/Buttons/RightButton";
import TablePromos from "components/Tables/TablePromos";
import Container from "components/Container/Container";

import MenuDropdown, {
  MenuDropdownButton,
} from "components/Dropdowns/MenuDropdown";

import { dataPromos } from "constants/codepromos";

import { BsThreeDotsVertical } from "react-icons/bs";

import eebleu from "assets/ee-bleu.png";
import Card from "components/Card/Card";

const Promos = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(dataPromos);

  const removeCodePromo = useCallback(
    (elements) => {
      setData(
        data.filter((d) => {
          return !elements.includes(d.id);
        })
      );
    },
    [data]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Titre",
        accessor: "titre",
        Cell: ({ cell: { value } }) => {
          return (
            <div className="py-4 font-semibold text-xs mx-2 pl-6">{value}</div>
          );
        },
      },
      {
        Header: "Début",
        accessor: "debut",
        Cell: ({ cell: { value } }) => {
          return (
            <div className="py-4 pl-6 text-xs font-normal mx-2">{value}</div>
          );
        },
      },
      {
        Header: "Fin",
        accessor: "fin",
        Cell: ({ cell: { value } }) => (
          <div className="py-4 pl-6 text-xs font-normal mx-2">{value}</div>
        ),
      },
      {
        Header: "Méthode",
        accessor: "methode",
        Cell: ({ cell: { value } }) => {
          return (
            <div className="py-4 pl-6 text-xs font-normal mx-2">{value}</div>
          );
        },
      },
      {
        Header: "Montant",
        accessor: "montant",
        Cell: ({ cell: { value } }) => {
          return (
            <div className="py-4 pl-6 text-xs font-normal mx-2">{value}</div>
          );
        },
      },
      {
        Header: "Statut",
        accessor: "statut",
        Cell: ({ cell: { value } }) => {
          let finishedOrActive =
            value === "FINISHED" ? (
              <div
                className="py-4 flex text-gray-400 text-xs
                font-semibold leading-none mx-2 pl-6"
              >
                Expiré
              </div>
            ) : (
              <div
                className="py-4 flex text-success text-xs
                font-semibold pl-6 leading-none mx-2"
              >
                En cours
              </div>
            );
          return (
            <div className="py-4 text-xs font-normal mx-2">
              {finishedOrActive}
            </div>
          );
        },
      },
      {
        id: "dots",
        Cell: ({
          row: {
            original: { id },
          },
        }) => {
          const removeElement = useCallback(() => {
            removeCodePromo([id]);
          }, [id]);

          return (
            <MenuDropdown
              trigger={
                <button className="active:scale-95 transition-all hover:bg-gray200 p-1 rounded-full">
                  <BsThreeDotsVertical size={18} className="cursor-pointer" />
                </button>
              }
              menu={[
                <MenuDropdownButton
                  key={1}
                  text="Supprimer le code"
                  onClick={removeElement}
                />,
              ]}
            />
          );
        },
      },
    ],
    [removeCodePromo]
  );

  const gotoAddPromo = () => {
    navigate("/admin/codes-promos/new");
  };

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Codes Promos</p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <RightButton text="Créer un code promo" onClick={gotoAddPromo} />
      </Container>
      {data.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className="sm:mt-48 mt-24 mb-8">
            <p
              className="font-semibold sm:text-4xl text-main
          text-center text-xl"
            >
              Vous n’avez pas de codes
              <br />
              promo pour le moment.
            </p>
          </div>
          <RightButton
            text="Créer un code promo"
            onClick={() => navigate("/codes-promos/nouveau")}
          />
          <div className="absolute bottom-0 left-0">
            <img
              src={eebleu}
              alt="ee-logo"
              className="w-2/3 h-2/3 sm:w-full sm:h-full"
            />
          </div>
        </div>
      ) : (
        <Card extra="w-full pb-6 sm:overflow-x-auto mt-8 mb-4 !bg-transparent">
          <TablePromos columns={columns} data={data} />
        </Card>
      )}
    </>
  );
};

export default Promos;
