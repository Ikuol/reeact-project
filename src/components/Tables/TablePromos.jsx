import { useCallback } from "react";

import { usePagination, useTable } from "react-table";

import Pagination from "components/Pagination/Pagination";

const TablePromos = ({ columns, data }) => {
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

  return (
    <>
      <div className="max-md:overflow-x-scroll scrollbar-hide pt-4 mb-4">
        <table
          {...getTableProps()}
          className="w-full border-separate mb-3 border-spacing-y-1
          border-spacing-x-0 whitespace-nowrap"
        >
          <thead className="h-12">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-white">
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps()}
                      className="text-start text-[13.509px] font-semibold
                      leading-normal first:rounded-l-lg last:rounded-r-lg"
                    >
                      <div className="mx-2 pl-6">{column.render("Header")}</div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="bg-white">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="first:rounded-l-lg last:rounded-r-lg"
                        {...cell.getCellProps()}
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
        onPageChange={onPageChange}
      />
    </>
  );
};

export default TablePromos;
