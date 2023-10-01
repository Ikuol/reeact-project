import { useState, useMemo, useCallback } from "react";

import { useNavigate } from "react-router-dom";

import TableInterventions from "components/Tables/TableInterventions";
import ChangePeriod from "components/ChangePeriod/ChangePeriod";
import ColumnChart from "components/Charts/Admin/ColumnChart";
import DonutChart from "components/Charts/Admin/DonutChart";
import Container from "components/Container/Container";
import MenuDropdown, {
  MenuDropdownButton,
} from "components/Dropdowns/MenuDropdown";
import Widget from "components/Widget/Widget";
import Card from "components/Card/Card";

import { BsThreeDotsVertical, BsPerson } from "react-icons/bs";
import { LiaCheckCircle } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";

import { columnchart, donutchart } from "constants/charts/Dashboard/config";
import { statInterventions } from "constants/interventions";

const Statistiques = () => {
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
        id: "dots",
        Cell: () => {
          const navigate = useNavigate();

          const seeIntervention = useCallback(() => {
            navigate(`/admin/demande-dinterventions`);
          }, [navigate]);

          return (
            <MenuDropdown
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
                  text="Voir la demande"
                  onClick={seeIntervention}
                />,
              ]}
            />
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
          <p className="font-semibold text-2xl text-main">Statistiques</p>
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
      <div
        className="my-6 grid grid-cols-1 max-md:gap-y-5 md:grid-cols-2 lg:grid-cols-3
        gap-x-8"
      >
        <Widget
          title="Nombre de compte actifs"
          value={582}
          icon={<BsPerson className="text-[#858585]" size={22} />}
        />
        <Widget
          title="Janvier"
          value={346}
          icon={<LiaCheckCircle className="text-success" size={22} />}
        />
        <Widget
          title="Février"
          value={582}
          icon={<LiaCheckCircle className="text-success" size={22} />}
        />
      </div>

      <Container extra="mt-8 sm:mt-10">
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">
            Statistiques inscriptions
          </p>
          <p className="text-secondary hidden md:block text-sm font-normal ">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>

      <Card extra={"w-full pb-6 sm:overflow-x-auto mt-8 mb-4 !bg-transparent"}>
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-x-8 gap-y-8">
          {/* Diagramme en baton  */}
          <ColumnChart
            options={columnchart.options}
            series={[
              {
                name: "Inscription",
                color: "#284F60",
                data: [
                  { x: "Mon", y: 231 },
                  { x: "Tue", y: 122 },
                  { x: "Wed", y: 63 },
                  { x: "Thu", y: 421 },
                  { x: "Fri", y: 122 },
                  { x: "Sat", y: 323 },
                  { x: "Sun", y: 111 },
                ],
              },
              {
                name: "Désabonnement",
                color: "rgba(39, 79, 96, 0.55)",
                data: [
                  { x: "Mon", y: 232 },
                  { x: "Tue", y: 113 },
                  { x: "Wed", y: 341 },
                  { x: "Thu", y: 224 },
                  { x: "Fri", y: 522 },
                  { x: "Sat", y: 411 },
                  { x: "Sun", y: 243 },
                ],
              },
            ]}
            firstText="Moteur"
            secondText="Réseaux sociaux"
          />

          {/* Ici le poucentage 23, représente le pourcentage non occupé, donc
          prévoir un pourcentage pour le vide, qui sera la soustration des
          pourcentages peu Inscription et Désabonnemnt par exemple */}
          <DonutChart options={donutchart.options} series={[54, 23.5, 23]} />
        </div>
        <Container extra="mt-8 sm:mt-10">
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-2xl text-main">
              Statistiques chiffre d'affaire
            </p>
            <p className="text-secondary hidden md:block text-sm font-normal ">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </Container>
        <div className="flex w-full mt-8">
          <ColumnChart
            options={columnchart.options}
            series={[
              {
                name: "Année en cours",
                color: "#284F60",
                data: [
                  { x: "Mon", y: 231 },
                  { x: "Tue", y: 122 },
                  { x: "Wed", y: 63 },
                  { x: "Thu", y: 421 },
                  { x: "Fri", y: 122 },
                  { x: "Sat", y: 323 },
                  { x: "Sun", y: 111 },
                ],
              },
              {
                name: "Année précédente",
                color: "rgba(39, 79, 96, 0.55)",
                data: [
                  { x: "Mon", y: 232 },
                  { x: "Tue", y: 113 },
                  { x: "Wed", y: 341 },
                  { x: "Thu", y: 224 },
                  { x: "Fri", y: 522 },
                  { x: "Sat", y: 411 },
                  { x: "Sun", y: 243 },
                ],
              },
            ]}
            firstText="Afficher année en cours"
            secondText="Afficher année précédente"
          />
        </div>
        <Container extra="mt-8 sm:mt-10">
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-2xl text-main">
              Dernières demandes d'interventions
            </p>
            <p className="text-secondary hidden md:block text-sm font-normal ">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </Container>
        <div className="flex flex-col w-full mt-8">

        {/* Ici size le nombre de lignes du tableau à afficher */}
          <TableInterventions
            columns={columns}
            data={statInterventions}
            size={4}
          />
        </div>
      </Card>
    </>
  );
};

export default Statistiques;
