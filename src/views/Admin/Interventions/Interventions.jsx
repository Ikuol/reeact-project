import { useState, useCallback, useMemo } from "react";

import BackTableInterventions from "components/Tables/BackTableInterventions";
import ChangePeriod from "components/ChangePeriod/ChangePeriod";
import {
  InterventionsDevis,
  InfoComplementaire,
} from "components/Modals/Modals";
import Container from "components/Container/Container";
import Widget from "components/Widget/Widget";
import Card from "components/Card/Card";
import MenuDropdown, {
  MenuDropdownButton,
} from "components/Dropdowns/MenuDropdown";

import { backInterventions } from "constants/interventions";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { LiaCheckCircle } from "react-icons/lia";

const BackInterventions = () => {
  const [active, setActive] = useState("today");

  const setMonthly = useCallback(() => {
    setActive("monthly");
    console.log("monthly");
  }, []);

  const setWeekly = useCallback(() => {
    setActive("weekly");
    console.log("weekly");
  }, []);

  const setToday = useCallback(() => {
    setActive("today");
    console.log("today");
  }, []);

  const columns = useMemo(
    () => [
      {
        accessor: "name",
        columnId: 0,
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-primary text-sm font-medium py-6 px-2
          max-md:text-xs"
          >
            <span>{value}</span>
          </div>
        ),
      },
      {
        Cell: () => (
          <div className="flex justify-center md:pl-6 pl-2 md:pr-1 pr-4">
            <FcGoogle size={20} />
          </div>
        ),
        columnId: 1,
        accessor: "logo",
      },
      {
        accessor: "title",
        columnId: 2,
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-primary text-sm font-semibold py-6 px-2
          max-md:text-xs justify-center"
          >
            <span>{value}</span>
          </div>
        ),
      },
      {
        accessor: "date",
        columnId: 3,
        Cell: ({ cell: { value } }) => (
          <div className="flex text-primary text-[12px] font-normal px-1">
            {value}
          </div>
        ),
      },
      {
        accessor: "site",
        columnId: 4,
        Cell: ({ cell: { value } }) => (
          <div className="flex text-primary text-[12px] font-normal px-1">
            {value}
          </div>
        ),
      },
      {
        accessor: "statut",
        columnId: 5,
        Cell: ({ cell: { value } }) => {
          return value === "PENDING" ? (
            <div className="flex text-[12.008px] font-medium leading-none text-primary px-1">
              En attente d'examen
            </div>
          ) : value === "REJECTED" ? (
            <div className="flex text-danger text-[12.008px] font-medium leading-none px-1">
              Demande rejetée
            </div>
          ) : (
            <div className="flex text-success text-[12.008px] font-medium leading-none px-1">
              Demande approuvée
            </div>
          );
        },
      },
      {
        id: "bouton",
        Cell: () => (
          <div className="">
            <button
              className="flex justify-center items-center
              text-white font-medium bg-primary rounded-[100px]
              px-3 py-2 w-[127px] text-[12px] active:scale-95
              transition-all duration-150 m-auto"
            >
              Voir le site
            </button>
          </div>
        ),
      },
      {
        id: "dots",
        Cell: ({ row }) => {
          const [open, setOpen] = useState("closed");

          const closeModal = () => {
            setOpen("closed");
          };

          const showModal = useCallback((term) => {
            setOpen(term);
          }, []);

          return (
            <>
              <MenuDropdown
                reverseColor={false}
                trigger={
                  <button
                    className="active:scale-95 transition-all hover:bg-gray200
                  p-1 rounded-full"
                  >
                    <BsThreeDotsVertical size={18} className="cursor-pointer" />
                  </button>
                }
                menu={[
                  <MenuDropdownButton
                    key={0}
                    text="Envoyer un devis"
                    onClick={() => showModal("devis")}
                  />,
                  <MenuDropdownButton
                    key={1}
                    text="Demande d'informations"
                    onClick={() => showModal("info")}
                  />,
                  <MenuDropdownButton
                    key={2}
                    text="Refuser la demande"
                    // Ici mettre la fonction correspondante
                    // pour refuser la demande
                    onClick={() => {}}
                  />,
                ]}
              />
              {/* utiliser data pour passer des données au modal */}
              <InterventionsDevis
                data={row.original}
                open={open}
                closeModal={closeModal}
              />
              <InfoComplementaire
                data={row.original}
                open={open}
                closeModal={closeModal}
              />
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">
            Demande d'interventions
          </p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="flex">
          <ChangePeriod
            setMonthly={setMonthly}
            setWeekly={setWeekly}
            setToday={setToday}
            active={active}
          />
        </div>
      </Container>
      <Card extra={"w-full pb-6 mt-8 !bg-transparent rounded-none"}>
        <BackTableInterventions
          columns={columns}
          data={backInterventions}
          size={7}
        />
      </Card>
      <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Widget
          title="Total Factures"
          value={582}
          icon={<FaFileInvoiceDollar className="text-[#858585]" size={20} />}
        />
        <Widget
          title="Factures Payées"
          value={346}
          icon={<LiaCheckCircle className="text-success" size={22} />}
        />
        <Widget
          title="Total Factures Envoyées"
          value={582}
          icon={<FaFileInvoiceDollar className="text-success" size={20} />}
        />
      </div>
    </>
  );
};

export default BackInterventions;
