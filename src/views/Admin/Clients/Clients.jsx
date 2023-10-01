import RightButton from "components/Buttons/RightButton";
import Card from "components/Card/Card";
import CheckBox from "components/CheckBox/CheckBox";
import Container from "components/Container/Container";
import MenuDropdown, {
  MenuDropdownButton,
} from "components/Dropdowns/MenuDropdown";
import TableUsers from "components/Tables/TableUsers";
import Widget from "components/Widget/Widget";
import { dataUsers } from "constants/users";
import { useCallback, useMemo, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { LiaCheckCircle, LiaTimesCircle } from "react-icons/lia";
import { MdPersonOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(dataUsers);

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
        Header: "Nom",
        accessor: "name",
        Cell: ({ cell: { value } }) => {
          return (
            <Link to={`/admin/comptes-clients/${value}`}>
              <div className="py-4 font-semibold text-[12.008px] mx-2 ">
                {value}
              </div>
            </Link>
          );
        },
      },
      {
        Header: "Raison social",
        accessor: "raisonSocial",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => {
          return (
            <Link to={`/admin/comptes-clients/${id}`}>
              <div className="py-4 text-[12.008px] font-normal mx-2">
                {value}
              </div>
            </Link>
          );
        },
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => (
          <Link to={`/admin/comptes-clients/${id}`}>
            <div className="py-4 text-[12.008px] font-normal mx-2">{value}</div>
          </Link>
        ),
      },
      {
        Header: "Ville",
        accessor: "ville",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => {
          return (
            <Link to={`/admin/comptes-clients/${id}`}>
              <div className="py-4 text-[12.008px] font-normal mx-2">
                {value}
              </div>
            </Link>
          );
        },
      },
      {
        Header: "Abonnement",
        accessor: "abonnement",
        Cell: ({
          cell: { value },
          row: {
            original: { id },
          },
        }) => {
          return (
            <Link to={`/admin/comptes-clients/${id}`}>
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

          const seeClient = useCallback(() => {
            navigate(`/admin/comptes-clients/${id}`);
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
                  text="Voir le client"
                  onClick={seeClient}
                />,
              ]}
            />
          );
        },
      },
    ],
    []
  );

  const gotoAddUser = () => {
    navigate("/admin/comptes-clients/new");
  };

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Comptes clients</p>
          <p className="text-secondary hidden md:block text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </Container>

      <div className="my-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Widget
          title="Nombre de comptes"
          value={582}
          icon={<MdPersonOutline className="text-[#858585]" size={20} />}
        />
        <Widget
          title="Nombre de comptes actifs"
          value={346}
          icon={<LiaCheckCircle className="text-success" size={22} />}
        />
        <Widget
          title="Demandes d'interventions"
          value={236}
          icon={<LiaTimesCircle className="text-danger" size={22} />}
        />
        <Widget
          title="Total Factures Envoyées"
          value={126}
          icon={<FaFileInvoiceDollar className="text-success" size={20} />}
        />
      </div>

      <Container extra="mt-8 sm:mt-10">
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Utilisateurs</p>
          <p className="text-secondary hidden md:block text-sm font-normal ">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <RightButton text="Ajouter un compte" onClick={gotoAddUser} />
      </Container>

      <Card
        extra={
          "w-full pb-6 sm:overflow-x-auto mt-8 !bg-transparent rounded-none"
        }
      >
        <TableUsers
          columns={columns}
          data={data}
          removeCheckedElement={removeCheckedElement}
        />
      </Card>
    </>
  );
};

export default Clients;
