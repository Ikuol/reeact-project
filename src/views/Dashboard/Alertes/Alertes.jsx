import { useCallback, useState, useMemo } from "react";

import Container from "components/Container/Container";
import { MdOutlineSettings } from "react-icons/md";
import eebleu from "assets/ee-bleu.png";
import { AlertModal } from "components/Modals/Modals";
import Card from "components/Card/Card";
import TableAlertes from "components/Tables/TableAlertes";
import { dataAlertes } from "constants/alertes";
import { FcGoogle } from "react-icons/fc";
import RightButton from "components/Buttons/RightButton";

const Alertes = () => {
  const [modal, setModal] = useState(false);

  const data = dataAlertes;

  const columns = useMemo(
    () => [
      {
        columnId: 0,
        accessor: "logo",
        Cell: () => (
          <div className="pl-6 pr-1">
            <FcGoogle size={20} />
          </div>
        ),
      },
      {
        columnId: 1,
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
          ></div>
        ),
      },
      {
        columnId: 2,
        accessor: "title",
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-primary text-sm font-medium
          py-6 px-2 2xl:pl-5 max-md:text-xs"
          >
            <span>{value}</span>
          </div>
        ),
      },
      {
        columnId: 3,
        accessor: "date",
        Cell: ({ cell: { value } }) => (
          <div className="flex text-primary text-xs font-normal px-1">
            {value}
          </div>
        ),
      },
      {
        columnId: 4,
        accessor: "site",
        Cell: ({ cell: { value } }) => (
          <div className="flex text-primary text-xs font-normal px-1">
            {value}
          </div>
        ),
      },
    ],
    []
  );

  const toogleModal = useCallback(() => {
    setModal((state) => !state);
  }, []);

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Alertes</p>
          <p className="text-secondary hidden md:block text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <RightButton
          icon={<MdOutlineSettings size="1.3rem" />}
          text="Paramètre des alertes"
          onClick={toogleModal}
        />
      </Container>

      {data.length === 0 ? (
        <div className="flex flex-col">
          <div className="sm:mt-48 mt-24">
            <p
              className="font-semibold sm:text-4xl text-main
          text-center text-xl"
            >
              Vous n’avez pas d'alertes
              <br />
              pour le moment.
            </p>
          </div>
          <div className="absolute bottom-0 left-0">
            <img
              src={eebleu}
              alt="ee-logo"
              className="w-2/3 h-2/3 sm:w-full sm:h-full"
            />
          </div>
        </div>
      ) : (
        <Card
          extra={"w-full pb-6 sm:overflow-x-auto mt-8 mb-4 !bg-transparent"}
        >
          <TableAlertes columns={columns} data={data} />
        </Card>
      )}
      {modal && <AlertModal closeModal={toogleModal} />}
    </>
  );
};

export default Alertes;
