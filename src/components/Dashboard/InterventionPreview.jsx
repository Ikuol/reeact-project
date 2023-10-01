import ChangePeriod from "components/ChangePeriod/ChangePeriod";
import TableDashboard from "components/Tables/TableDashboard";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const InterventionPreview = ({ data }) => {
  const [active, setActive] = useState("today");

  const setMonthly = () => {
    setActive("monthly");
    console.log("monthly");
  };

  const setWeekly = () => {
    setActive("weekly");
    console.log("weekly");
  };

  const setToday = () => {
    setActive("today");
    console.log("today");
  };

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        columnId: 0,
        accessor: "title",
        Cell: ({ row }) => (
          <div className="flex flex-col gap-y-2 pr-1">
            <p
              className="font-medium text-sm text-main 2xl:text-xs
            md:whitespace-pre-wrap max-md:truncate max-md:w-20"
            >
              {row.original.title}
            </p>
            <p className="font-normal text-[10.5px] text-main">
              {row.original.site}
            </p>
          </div>
        ),
      },
      {
        columnId: 1,
        accessor: "date",
        Cell: ({ row }) => (
          <div className="flex flex-col gap-y-2 pr-1">
            <p
              className="font-medium text-xs text-main
            md:whitespace-pre-wrap max-md:truncate max-md:w-12"
            >
              {row.original.date}
            </p>
            <p className="font-normal text-[10.5px] text-main">
              {row.original.heure}
            </p>
          </div>
        ),
      },
      {
        columnId: 2,
        accessor: "price",
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-primary text-xs
          font-semibold py-6 px-2 2xl:pl-5 justify-center"
          >
            <p>{value}</p>
          </div>
        ),
      },
      {
        columnId: 3,
        accessor: "statut",

        Cell: ({ cell: { value } }) => {
          return value === "PENDING" ? (
            <div
              className="flex text-[12.008px] font-medium
            leading-none text-danger justify-center"
            >
              En attente
            </div>
          ) : value === "REJECTED" ? (
            <div
              className="flex text-gray-500 text-[12.008px]
            font-medium leading-none mx-2 justify-center"
            >
              Annulé
            </div>
          ) : (
            <div
              className="flex text-success text-[12.008px]
            font-medium leading-none mx-2 justify-center"
            >
              Accepté
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div
      className="bg-white rounded-[20px] p-8
            w-full md:min-w-[505px] flex flex-col
            shadow-md"
    >
      <div
        className="flex justify-between md:items-center
              w-full md:mb-8 max-md:flex-col max-md:gap-y-2
              mb-4"
      >
        <div className="flex flex-col gap-y-2">
          <p className="font-medium text-sm text-main">
            Demande d'intervention
          </p>
          <p className="font-normal text-[11px] text-secondary">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <ChangePeriod
            setMonthly={setMonthly}
            setWeekly={setWeekly}
            setToday={setToday}
            active={active}
          />
        </div>
      </div>
      <div>
        <TableDashboard columns={columns} data={data} />
      </div>
      <div className="flex justify-end">
        <span
          onClick={() => navigate("/demande-dinterventions")}
          className="text-main text-sm font-medium max-md:text-white
                cursor-pointer md:hover:bg-main md:hover:text-white
                p-2 rounded-md max-md:bg-main"
        >
          Voir plus
        </span>
      </div>
    </div>
  );
};

export default InterventionPreview;
