import { useState, useMemo, useEffect, useCallback } from "react";

import AreaComponent from "components/Charts/AnalyseResultat/AreaComponent";
import DisplayParams from "components/DisplaySearchParams/DisplayParams";
import DisplayNumber from "components/DisplayResultNumber/DisplayNumber";
import RadialComponent from "components/Charts/AnalyseResultat/RadialComponent";
import DisplayStat from "components/DisplayStat/DisplayStat";
import TableAnalyses from "components/Tables/TableAnalyses";
import Container from "components/Container/Container";
import { AnalyseModal } from "components/Modals/Modals";
import Card from "components/Card/Card";
import {
  radialchart1,
  radialchart2,
  radialchart3,
} from "constants/charts/AnalyseResultat/RadialComponent";

import google from "assets/svg/google.svg";
import plus from "assets/svg/Plus.svg";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

import { areachart } from "constants/charts/AnalyseResultat/AreaComponent";
import { dataAnalyses } from "constants/analyses";

const AnalyseResultats = () => {
  const [open, setOpen] = useState(false);

  const toogleModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  // Les colonnes du tableau
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
            className="flex text-sm
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
  const [loadedCount, setLoadedCount] = useState(5);
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
          <p className="font-semibold text-2xl text-main">Résultat d'analyse</p>
          <span>
            <img src={google} alt="google" className="w-[96px] h-8" />
          </span>
        </div>
        <div className="flex relative w-full max-w-xl">
          <input
            type="text"
            className="w-full h-12 bg-white
            rounded-[100px] pl-6 outline-none
            border-none focus:ring-0 max-md:text-sm"
            placeholder="Exemple : http://www.monsiteweb.com"
          />
          <button
            className={`flex items-center justify-center
          bg-main text-white w-52 h-full rounded-[100px]
            md:gap-x-2 active:scale-95 transition-all duration-200
            absolute right-0 max-md:w-24`}
          >
            <FaCirclePlus size={20} className="" />
            <span className="font-medium text-xs max-md:hidden">
              Ajouter mot clé/URL
            </span>
          </button>
        </div>
      </Container>
      <Card
        extra={
          "w-full sm:overflow-x-auto mt-8 mb-4 h-auto pb-6 !bg-transparent"
        }
      >
        <div
          className="flex max-md:flex-col justify-between
          md:mb-24 mb-8"
        >
          <DisplayStat extra="bg-white text-main shadow-xl">
            <div
              className="flex max-md:hidden justify-between
              items-center"
            >
              <span
                className="bg-main text-white rounded-full
               w-14 h-14 flex items-center justify-center
               cursor-pointer"
              >
                <IoSearchSharp size={35} />
              </span>
              <DisplayNumber text="Nombre de résultat" number="7425" />
              <DisplayParams
                text="Mot clé/url"
                params="http://monsiteweb.com"
              />
              <span className="mt-12">
                <img src={plus} alt="plus" sizes={20} />
              </span>
              <DisplayParams text="Affiner ma recherche" params="Graphiste" />
              <span className="cursor-pointer">
                <BsThreeDotsVertical size={20} />
              </span>
            </div>
            <div className="justify-between items-center max-md:flex hidden">
              <span
                className="bg-main text-white rounded-full
               md:w-14 md:h-14 flex items-center justify-center
               cursor-pointer w-10 h-10"
              >
                <IoSearchSharp size={25} />
              </span>
              <span className="cursor-pointer">
                <BsThreeDotsVertical size={20} />
              </span>
            </div>
            <div className="max-md:flex hidden flex-col gap-y-3 mt-6">
              <DisplayNumber text="Nombre de résultat" number="7425" />
              <div className="flex flex-col">
                <DisplayParams
                  text="Mot clé/url"
                  params="http://monsiteweb.com"
                />
                <span className="md:mt-12 flex justify-center mt-3">
                  <img src={plus} alt="plus" sizes={20} />
                </span>
                <DisplayParams text="Affiner ma recherche" params="Graphiste" />
              </div>
            </div>

            {/* Ici les séries représentent juste le pourcentage */}
            <div
              className="flex max-md:flex-col w-full justify-between
            max-md:mt-4"
            >
              <RadialComponent
                status="Positif"
                number="2480"
                options={radialchart1.options}
                series={24}
              />
              <RadialComponent
                status="Neutre"
                number="2480"
                options={radialchart2.options}
                series={63}
              />
              <RadialComponent
                status="Négatif"
                number="2480"
                options={radialchart3.options}
                series={43}
              />
            </div>
          </DisplayStat>

          {/* Les données passées à ce graphe, doivent être sous le même format que series */}
          <div
            className="flex max-md:mt-16 md:w-[15%]
            items-center justify-center"
          >
            <AreaComponent
              options={areachart.options}
              series={[
                {
                  name: "Clicks",
                  data: [25, 20, 50, 40, 56],
                },
              ]}
              currentPrice="4000"
              total="10000"
            />
          </div>
        </div>
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

export default AnalyseResultats;
