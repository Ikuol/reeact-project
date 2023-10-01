import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragHandle } from "components/DragHandle/DragHandle";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const DraggableTableRow = ({ row, toogleModal }) => {
  const [down, setDown] = useState(false);

  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef,
    isDragging,
  } = useSortable({
    id: row.original.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  };

  return (
    <>
      <tr
        ref={setNodeRef}
        onClick={() => setDown(!down)}
        style={style}
        {...row.getRowProps()}
        className={` cursor-pointer ${
          down ? "bg-main text-white" : "bg-gray400"
        }`}
      >
        {isDragging ? (
          <td colSpan={row.cells.length} className="bg-blue-200">
            &nbsp;
          </td>
        ) : (
          row.cells.map((cell, i) => {
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
                    <DragHandle {...attributes} {...listeners} />
                    {cell.render("Cell")}
                  </div>
                )}
                {i !== 0 && i <= 3 && cell.render("Cell")}
              </td>
            );
          })
        )}
        <td>
          <div className="pl-6 pr-1">
            {down ? (
              <AiFillCaretUp
                onClick={() => setDown(false)}
                size={20}
                className="cursor-pointer"
              />
            ) : (
              <AiFillCaretDown
                onClick={() => setDown(true)}
                size={20}
                className="cursor-pointer"
              />
            )}
          </div>
        </td>
      </tr>
      <tr
        role="row"
        className={`bg-white transition-all duration-300 origin-top ${
          down ? "h-[120px]" : " h-0"
        }`}
      >
        <td className={`transition-all pl-6 ${down ? "" : "hidden"}`}>
          <p
            className="text-main text-xs font-normal
            text-center"
          >
            {row.original.extrait}
          </p>
        </td>
        <td
          className={`transition-all max-w-lg whitespace-pre-wrap pl-6 ${
            down ? "" : "hidden"
          }`}
        >
          <p className="text-main text-xs font-normal">{row.original.text}</p>
        </td>
        <td className={`transition-all ${down ? "" : "hidden"}`}>
          <button
            className="flex justify-center items-center
              text-white font-medium bg-primary rounded-[100px]
              px-3 py-2 w-[127px] text-[12px] active:scale-95
              transition-all duration-150 m-auto"
          >
            Voir le site
          </button>
        </td>
        <td className={`transition-all ${down ? "" : "hidden"}`} colSpan={3}>
          {/* Lorsque le type est DANGER, c'est à dire quand la couleur de la
          barre sur la ligne est rouge, on affiche ce bouton, dans le cas
          contraire on ne l'affiche pas */}
          <button
            onClick={toogleModal}
            className={`flex justify-center items-center
              text-white font-medium bg-red rounded-[100px]
              px-3 py-2 w-[186px] text-[12px] active:scale-95
              transition-all duration-150 m-auto ${
                row.original.type === "DANGER" ? "" : "hidden"
              }`}
          >
            Demande d'intervention
          </button>
        </td>
      </tr>
    </>
  );
};
