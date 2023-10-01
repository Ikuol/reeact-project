import { useNavigate } from "react-router-dom";

import Container from "components/Container/Container";
import Card from "components/Card/Card";
import TableMessages from "components/Tables/TableMessages";
import { messages } from "constants/messages";
import { useState, useMemo, useCallback } from "react";
import eebleu from "assets/ee-bleu.png";
import RightButton from "components/Buttons/RightButton";
import MenuDropdown, {
  MenuDropdownButton,
} from "components/Dropdowns/MenuDropdown";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import CheckBox from "components/CheckBox/CheckBox";

const Messagerie = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(messages);

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
              extra="border-2"
            />
          );
        },
        columnId: 0,
      },
      {
        columnId: 1,
        accessor: "star",
        Cell: () => {
          const [starred, setStarred] = useState(false);

          return (
            <div className="max-md:pl-6 pr-1">
              {starred ? (
                <AiFillStar
                  size={20}
                  onClick={() => setStarred(false)}
                  className="text-main cursor-pointer"
                />
              ) : (
                <AiOutlineStar
                  size={20}
                  onClick={() => setStarred(true)}
                  className="text-main cursor-pointer"
                />
              )}
            </div>
          );
        },
      },
      {
        Cell: () => (
          <div className="max-md:pl-6 pr-1">
            <FcGoogle size={20} className="" />
          </div>
        ),
        columnId: 2,
        accessor: "logo",
      },
      {
        accessor: "title",
        columnId: 3,
        Cell: ({ cell: { value }, row: { index } }) => (
          <div
            className="flex text-primary text-sm hover:underline
            font-medium py-6 px-2 2xl:pl-5 cursor-pointer
            justify-center max-md:text-xs"
            onClick={() => navigate(`/messagerie/${index + 1}`)}
          >
            <span>{value}</span>
          </div>
        ),
      },
      {
        accessor: "site",
        columnId: 4,
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-primary text-xs
          font-normal px-1"
          >
            {value}
          </div>
        ),
      },

      {
        accessor: "date",
        columnId: 5,
        Cell: ({ cell: { value } }) => (
          <div
            className="flex text-primary text-xs
          font-normal px-1"
          >
            {value}
          </div>
        ),
      },
      {
        accessor: "dots",
        columnId: 6,
        Cell: ({
          row: {
            original: { id },
          },
        }) => {
          const removeElement = useCallback(() => {
            removeCheckedElement([id]);
          }, [id]);
          const seeMessage = useCallback(() => {
            navigate(`/messagerie/${id}`);
          }, [id]);
          return (
            <MenuDropdown
              trigger={
                <button className="active:scale-95 transition-all">
                  <BsThreeDotsVertical size={18} />
                </button>
              }
              menu={[
                <MenuDropdownButton text="Voir" onClick={seeMessage} />,
                <MenuDropdownButton text="Supprimer" onClick={removeElement} />,
              ]}
            />
          );
        },
      },
    ],
    [navigate, removeCheckedElement]
  );

  return (
    <>
      <Container>
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl text-main">Messagerie</p>
          <p className="text-secondary hidden md:block text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <RightButton
          text="Nouveau message"
          onClick={() => navigate("/messagerie/nouveau")}
        />
      </Container>

      <Card extra={"w-full pb-6 mt-8 mb-4 !bg-transparent"}>
        {data.length > 0 ? (
          <TableMessages
            data={data}
            columns={columns}
            removeCheckedElement={removeCheckedElement}
          />
        ) : (
          <div className="flex flex-col">
            <div className="sm:mt-48 mt-24">
              <p
                className="font-semibold sm:text-4xl text-main
                text-center text-xl"
              >
                Vous n’avez pas de message
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
        )}
      </Card>
    </>
  );
};

export default Messagerie;
