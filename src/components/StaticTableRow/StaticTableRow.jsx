import React from "react";
import { DragHandle } from "components/DragHandle/DragHandle";

export const StaticTableRow = ({ row }) => {
  return (
    <tr {...row.getRowProps()} className="bg-gray400">
      {row.cells.map((cell, i) => {
        let color;
        if (cell.column.columnId === 0) {
          color =
            cell.row.original.type === "SUCCESS"
              ? "border-l-success"
              : cell.row.original.type === "DANGER"
              ? "border-l-danger"
              : "border-l-primary";
        }
        return (
          <td
            {...cell.getCellProps()}
            className={`first:rounded-l-[12px] last:rounded-r-[12px] ${
              cell.column.columnId === 0 ? "border-l-8 " + color : ""
            }`}
          >
            {i === 0 && (
              <div className="flex items-center ml-6">
                <DragHandle isDragging />
                {cell.render("Cell")}
              </div>
            )}
            {i !== 0 && cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};
