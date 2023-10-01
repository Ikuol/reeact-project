import { useState, useMemo, useEffect, useCallback } from "react";

import Container from "components/Container/Container";
import ChangePeriod from "components/ChangePeriod/ChangePeriod";
import Card from "components/Card/Card";
import TableAnalyses from "components/Tables/TableAnalyses";
import { AnalyseModal } from "components/Modals/Modals";

import { dataAnalyses } from "constants/analyses";

const Analyse = () => {
  const [active, setActive] = useState("today");
  const [open, setOpen] = useState(false);

  const toogleModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

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

  const columns = useMemo(
    () => [
      {
        columnId: 0,
        accessor: "barre",
        Cell: ({ row: { original } }) => (
          <div
            className={`${
              original.type === "SUCCESS"
                ? "bg-success"
                : original.type === "DANGER"
                ? "bg-danger"
                : "bg-primary"
            } w-[29px] h-[9px] rounded-[100px] px-1 mx-auto`}
          />
        ),
      },
      {
        columnId: 1,
        accessor: "title",
        Cell: ({ cell: { value } }) => (
          <div
            className="flex md:text-sm text-xs
          font-medium py-6 px-2 2xl:pl-5"
          >
            <span>{value}</span>
          </div>
        ),
      },
      {
        columnId: 2,
        accessor: "date",
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-xs
            font-normal px-1"
          >
            {value}
          </div>
        ),
      },
      {
        columnId: 3,
        accessor: "site",
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-xs
            font-normal px-1"
          >
            {value}
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => dataAnalyses, []);
  const [items, setItems] = useState([]);
  const [loadedCount, setLoadedCount] = useState(10);
  const itemsPerPage = 2;
  const hasMoreData = loadedCount < data.length;

  useEffect(() => {
    setItems(data.slice(0, loadedCount));
  }, [data, loadedCount]);

  // la fonction qui ajoute deux éléments de plus à chaque au tableau
  const fetchMoreData = () => {
    setTimeout(() => {
      const nextItems = data.slice(0, loadedCount + itemsPerPage);
      setItems(nextItems);
      setLoadedCount(loadedCount + itemsPerPage);
    }, 1500);
  };

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Analyse</p>
          <p className="text-secondary hidden md:block text-sm font-normal">
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
        <TableAnalyses
          columns={columns}
          data={items}
          setData={setItems}
          update={fetchMoreData}
          hasMore={hasMoreData}
          toogleModal={toogleModal}
        />
      </Card>
      <AnalyseModal closeModal={toogleModal} open={open} data="" />
    </>
  );
};

export default Analyse;
