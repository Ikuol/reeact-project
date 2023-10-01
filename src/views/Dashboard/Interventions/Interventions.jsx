import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import TableInterventions from "components/Tables/TableInterventions";
import ChangePeriod from "components/ChangePeriod/ChangePeriod";
import { InterventionsModal } from "components/Modals/Modals";
import Container from "components/Container/Container";
import Card from "components/Card/Card";

import { dataInterventions } from "constants/interventions";

import { FcGoogle } from "react-icons/fc";
import { MdWarning } from "react-icons/md";

const Interventions = () => {
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
        Cell: () => (
          <div className="md:pl-6 pl-2 md:pr-1 pr-4">
            <FcGoogle size={20} />
          </div>
        ),
        columnId: 0,
        accessor: "logo",
      },
      {
        columnId: 1,
        accessor: "barre",
        Cell: () => (
          <div
            className="bg-danger w-[29px] h-[9px] rounded-[100px]
          mx-auto px-1"
          />
        ),
      },
      {
        accessor: "title",
        columnId: 2,
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
        accessor: "bouton",
        columnId: 6,
        Cell: ({ row }) => {
          const navigate = useNavigate();
          const [open, setOpen] = useState(false);

          const closeModal = () => {
            setOpen(false);
          };

          return (
            <div className="flex justify-center px-1">
              {row.original.statut === "PENDING" ? (
                <button
                  className="flex justify-center items-center text-white font-medium
                  bg-warning rounded-[100px] px-3 py-2 w-[186px] text-[12px]
                  active:scale-95 transition-all duration-150"
                  onClick={() => setOpen(true)}
                >
                  <MdWarning className="mr-[1px]" size={13} /> Demande
                  d'information
                </button>
              ) : row.original.statut === "REJECTED" ? null : (
                <button
                  className="flex justify-center items-center text-white font-medium
                  bg-primary rounded-[100px] px-3 py-2 w-[186px] text-[12px]
                  active:scale-95 transition-all duration-150"
                  onClick={() => {
                    navigate(
                      `/demande-dinterventions/${row.original.id}/devis`
                    );
                  }}
                >
                  Voir le devis
                </button>
              )}
              <InterventionsModal
                data={row.original}
                open={open}
                closeModal={closeModal}
              />
            </div>
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
      <Card extra={"w-full pb-6 sm:overflow-x-auto mt-8 mb-4 !bg-transparent"}>
        <TableInterventions
          columns={columns}
          data={dataInterventions}
          size={10}
        />
      </Card>
    </>
  );
};

export default Interventions;
