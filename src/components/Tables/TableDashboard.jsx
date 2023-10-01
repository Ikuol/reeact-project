import { useTable } from "react-table";

const TableDashboard = ({ columns, data }) => {
  const { getTableProps, rows, getTableBodyProps, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <>
      <div className="max-md:overflow-x-scroll scrollbar-hide w-full">
        <table
          {...getTableProps()}
          className="w-full border-separate mb-3 border-spacing-y-1
        border-spacing-x-0 whitespace-nowrap"
        >
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
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
    </>
  );
};

export default TableDashboard;
