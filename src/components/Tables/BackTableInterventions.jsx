import Pagination from "components/Pagination/Pagination";
import { usePagination, useTable } from "react-table";

const BackTableInterventions = ({ columns, data, size }) => {
  const {
    getTableProps,
    getTableBodyProps,
    page,
    gotoPage,
    state,
    prepareRow,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: size } },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      <div className="max-md:overflow-x-scroll scrollbar-hide">
        <table
          {...getTableProps()}
          className="w-full border-separate mb-3 border-spacing-y-1 border-spacing-x-0 whitespace-nowrap"
        >
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="bg-gray400">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`first:rounded-l-[12px] last:rounded-r-[12px] ${
                          cell.column.columnId === 0 ||
                          cell.column.columnId === 1 ||
                          cell.column.columnId === 5
                            ? "w-[50px]"
                            : ""
                        }`}
                      >
                        {cell.render("Cell")}
                      </td>
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
        onPageChange={(idx) => {
          gotoPage(idx - 1);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </>
  );
};

export default BackTableInterventions;
