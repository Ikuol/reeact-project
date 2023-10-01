import RightButton from "components/Buttons/RightButton";
import Card from "components/Card/Card";
import CheckBox from "components/CheckBox/CheckBox";
import Container from "components/Container/Container";
import MenuDropdown, {
  MenuDropdownButton,
} from "components/Dropdowns/MenuDropdown";
import TableHistoriques from "components/Tables/TableHistoriques";
import Widget from "components/Widget/Widget";
import { dataHistoriques } from "constants/historiques";
import { useCallback, useMemo, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { LiaCheckCircle } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";

const BackFactures = () => {
  const [data, setData] = useState(dataHistoriques);

  const removeCheckedElement = useCallback(
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
        id: "checkbox",
        Cell: ({
          selected,
          addToSelected,
          removeFromSelected,
          row: {
            original: { id },
          },
        }) => {
          const handleOnChange = useCallback(() => {
            //Supprimer du tableau si c'était coché
            if (selected.includes(id)) {
              removeFromSelected(id);
            } else {
              addToSelected(id);
            }
          }, [addToSelected, removeFromSelected, id, selected]);

          return (
            <CheckBox
              onChange={handleOnChange}
              checked={selected.includes(id)}
              extra="border-2 border-[#BEBEBE]"
            />
          );
        },
        columnId: 0,
      },
      {
        Header: "ID Invoice",
        accessor: "id",
        Cell: ({ cell: { value } }) => {
          return (
            <Link to={`/admin/factures/${value}`}>
              <div className="py-4 font-semibold text-[12.008px] mx-2 ">
                #{value}
              </div>
            </Link>
          );
        },
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => {
          return (
            <Link to={`/admin/factures/${id}`}>
              <div className="py-4 text-[12.008px] font-normal mx-2">
                {value}
              </div>
            </Link>
          );
        },
      },
      {
        Header: "Montant",
        accessor: "montant",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => (
          <Link to={`/admin/factures/${id}`}>
            <div className="py-4 text-[12.008px] font-normal mx-2">
              {value} €
            </div>
          </Link>
        ),
      },
      {
        Header: "Statut",
        accessor: "statut",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => {
          let rejectedOrCompleted =
            value === "REJECTED" ? (
              <div className="py-4 flex text-primary text-[12.008px] font-medium leading-none mx-2">
                Annulé
              </div>
            ) : (
              <div className="py-4 flex text-success text-[12.008px] font-medium leading-none mx-2">
                Complété
              </div>
            );

          return (
            <Link to={`/factures/${id}`}>
              {value === "PENDING" ? (
                <div className="py-4 flex text-[12.008px] font-medium leading-none text-warning mx-2">
                  En attente
                </div>
              ) : (
                rejectedOrCompleted
              )}
            </Link>
          );
        },
      },
      {
        Header: "Détails des services",
        accessor: "details",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => {
          return (
            <Link to={`/admin/factures/${id}`}>
              <div className="py-4 text-[12.008px] font-normal mx-2">
                {value}
              </div>
            </Link>
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
          const navigate = useNavigate();
          const removeElement = useCallback(() => {
            removeCheckedElement([id]);
          }, [id]);

          const seeFacture = useCallback(() => {
            navigate(`/admin/factures/${id}`);
          }, [id, navigate]);

          return (
            <MenuDropdown
              trigger={
                <button className="active:scale-95 transition-all hover:bg-gray200 p-1 rounded-full">
                  <BsThreeDotsVertical size={18} className="cursor-pointer" />
                </button>
              }
              menu={[
                <MenuDropdownButton
                  key={0}
                  text="Voir la facture"
                  onClick={seeFacture}
                />,
                <MenuDropdownButton
                  key={1}
                  text="Supprimer la facture"
                  onClick={removeElement}
                />,
              ]}
            />
          );
        },
      },
    ],
    [removeCheckedElement]
  );

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Factures</p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>

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

      <Container extra="mt-8 sm:mt-10">
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Historiques</p>
          <p className="text-secondary hidden md:block text-sm font-normal ">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <RightButton icon={<HiDownload />} text="Télécharger vos factures" />
      </Container>

      <Card
        extra={
          "w-full pb-6 sm:overflow-x-auto mt-8 !bg-transparent rounded-none"
        }
      >
        <TableHistoriques
          columns={columns}
          data={data}
          removeCheckedElement={removeCheckedElement}
        />
      </Card>
    </>
  );
};

export default BackFactures;
