import Pagination from "components/Pagination/Pagination";
import { useCallback, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { usePagination, useTable } from "react-table";

const TableHistoriques = ({ columns, data, removeCheckedElement }) => {
  const [selected, setSelected] = useState([]);

  const handleRemoveClick = useCallback(() => {
    removeCheckedElement(selected);
    setSelected([]);
  }, [selected, removeCheckedElement]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    gotoPage,
    state,
    prepareRow,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const onPageChange = useCallback(
    (idx) => {
      gotoPage(idx - 1);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    [gotoPage]
  );

  const addToSelected = useCallback(
    (id) => {
      setSelected([...selected, id]);
    },
    [selected]
  );

  const removeFromSelected = useCallback(
    (id) => {
      setSelected(selected.filter((v) => v !== id));
    },
    [selected]
  );
  return (
    <>
      <div className="max-md:overflow-x-scroll scrollbar-hide bg-white pt-4 mb-4 px-5">
        <div className="">
          {selected.length > 0 && (
            <button
              className="transition-all active:scale-95 my-1 flex items-center text-danger"
              onClick={handleRemoveClick}
            >
              <RiDeleteBin6Line size={20} className="cursor-pointer" />
              <span className="text-xs ml-1 ">
                Supprimer {selected.length} ligne(s)
              </span>
            </button>
          )}
        </div>
        <table
          {...getTableProps()}
          className="w-full border-separate mb-3 border-spacing-y-1
          border-spacing-x-0 whitespace-nowrap"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => {
                  return (
                    <th
                      {...column.getHeaderProps()}
                      className="text-start text-[13.509px] font-semibold
                      leading-normal"
                    >
                      <div className=" mx-2">{column.render("Header")}</div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray200/40">
                  {row.cells.map((cell) => {
                    if (cell.column.columnId === 0) {
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.render("Cell", {
                            addToSelected: addToSelected,
                            removeFromSelected: removeFromSelected,
                            selected: selected,
                          })}
                        </td>
                      );
                    }
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={pageIndex + 1}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default TableHistoriques;
