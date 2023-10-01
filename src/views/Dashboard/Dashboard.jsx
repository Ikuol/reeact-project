import InterventionPreview from "components/Dashboard/InterventionPreview";
import ReputationScore from "components/ReputationScore/ReputationScore";
import TransferInput from "components/TransferInput/TransferInput";
import ColumnChart from "components/Charts/Dashboard/ColumnChart";
import RadialChart from "components/Charts/Dashboard/RadialChart";
import DisplayInfo from "components/DisplayChartInfo/DisplayInfo";
import LineChart from "components/Charts/Dashboard/LineChart";
import AreaChart from "components/Charts/Dashboard/AreaChart";
import ProgressBar from "components/ProgressBar/ProgressBar";
import DatePicker from "components/DatePicker/DatePicker";
import Container from "components/Container/Container";
import DebitCard from "components/DebitCard/DebitCard";
import Card from "components/Card/Card";

import { dataInterventions } from "constants/interventions";
import { infos } from "constants/radialChartInfo";
import {
  areachart,
  columnchart,
  fourthRadialBar,
  linechart1,
  linechart2,
  radialbar,
} from "constants/charts/Dashboard/config";

import { BsThreeDots } from "react-icons/bs";

import graph from "assets/svg/graph.svg";
import graph2 from "assets/svg/graph2.svg";
import graph1 from "assets/svg/graph1.svg";

const Dashboard = () => {
  //Effectuer les requêtes pour récupérer les données des graphes et ls
  //remplacer par les valeurs statiques des series, en respectant le même format

  const interventions = dataInterventions.slice(0, 5);

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Bonjour Franklin</p>
          <p className="text-secondary hidden text-sm md:block font-normal">
            Ravie de vous revoir !
          </p>
        </div>
        <div className="flex">
          <DatePicker />
        </div>
      </Container>

      {/* Les graphes */}
      <Card extra={"w-full pb-6 mt-8 !bg-transparent rounded-none "}>
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-x-8 gap-y-8">
          <ReputationScore extra="bg-main text-white">
            <p className="text-white font-semibold text-base">
              Score de réputation
            </p>
            <div className="flex w-full justify-between">
              <p className="text-white font-medium text-[32px]">97/100</p>
              <span className="flex items-center gap-x-3">
                <span>
                  <img src={graph1} alt="graph-1" className="w-full h-full" />
                </span>
                <p className="font-normal text-white text-base">4%</p>
              </span>
            </div>

            {/* Percentage représente le score */}
            <ProgressBar percentage={65} />
            <p className="font-medium md:text-lg text-sm text-white60">
              Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem
              ipsum doler sit amet
            </p>
            <div className="flex justify-end">
              <span className="cursor-pointer font-medium hover:underline">
                Voir plus
              </span>
            </div>
          </ReputationScore>

          <div className="flex flex-col gap-y-4 max-xl:mt-12">
            <div
              className="grid grid-cols-2 max-md:grid-cols-1
              max-md:gap-y-4 gap-x-4 justify-between"
            >
              <LineChart
                title="Title"
                amount="65,123"
                imgUrl={graph}
                options={linechart1.options}
                type="line"
                series={[
                  {
                    name: "Clicks",
                    data: [500, 418, 600, 456, 526, 356, 456],
                    color: "#284F60",
                  },
                ]}
              />
              <LineChart
                title="Title"
                amount="65,123"
                imgUrl={graph2}
                options={linechart2.options}
                series={[
                  {
                    name: "Clicks",
                    data: [400, 48, 540, 210, 600, 56, 526, 56, 256, 200],
                    color: "#284F60",
                  },
                ]}
              />
            </div>

            <AreaChart
              title="Weekly Wallet Usage"
              amount="43%"
              imgUrl={graph}
              options={areachart.options}
              series={[
                {
                  name: "Clicks",
                  data: [400, 48, 540, 210, 600, 56, 526, 56, 256, 200],
                },
              ]}
            />
          </div>

          {/* Diagramme en baton  */}
          <ColumnChart
            options={columnchart.options}
            series={[
              {
                name: "Income",
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
                name: "Expense",
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
          />

          {/* Diagrammes circulaire  */}
          <div
            className="bg-white rounded-[20px] p-4
            w-full flex md:items-center shadow-md
            max-md:flex-col gap-y-6 justify-center"
          >
            <div
              className="flex flex-col md:gap-y-12
              gap-y-6 md:w-1/4 md:items-center
              max-md:px-8"
            >
              <span>
                <p
                  className="text-main text-lg
                font-medium md:mr-8"
                >
                  Title
                </p>
              </span>
              <div className="flex flex-col gap-y-8">
                {infos.map((info) => (
                  <DisplayInfo
                    key={info.id}
                    bgColor={info.bgColor}
                    price={info.amount}
                    text={info.text}
                  />
                ))}
              </div>
            </div>

            {/* Ici les séries représentent juste le pourcentage */}
            <div
              className="grid md:grid-cols-2
              grid-cols-1 gap-y-6 gap-x-6"
            >
              <RadialChart
                options={radialbar.options}
                series={30}
                bgColor="bg-[#40D4A8]"
                textColor="text-white"
                legend="Installment"
              />
              <RadialChart
                options={radialbar.options}
                series={76}
                bgColor="bg-main"
                textColor="text-white"
                legend="Investment"
              />
              <RadialChart
                options={radialbar.options}
                series={86}
                bgColor="bg-[#DB5461]"
                textColor="text-white"
                legend="Property"
              />
              <RadialChart
                options={fourthRadialBar.options}
                series={5}
                bgColor="bg-white"
                extra="border border-[#1EB6E7]"
                textColor="text-main"
                legend="Restaurant"
              />
            </div>
          </div>

          <InterventionPreview data={interventions} />

          {/* Carte de crédit  */}
          <div
            className="bg-white rounded-[20px] p-8
            w-full flex flex-col md:justify-between
            shadow-md gap-y-4"
          >
            <div
              className="flex justify-between items-center
              w-full"
            >
              <div className="flex flex-col gap-y-2">
                <p className="font-medium text-sm text-main">
                  Votre carte de crédit active
                </p>
                <p className="font-normal text-[11px] text-secondary">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <BsThreeDots />
              </div>
            </div>
            <div>
              <DebitCard />
            </div>
            <div>
              <TransferInput />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
