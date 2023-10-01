import React from "react";
import { MdDragIndicator } from "react-icons/md";

export const DragHandle = ({ isDragging, ...props }) => {
  const cursorClass = isDragging ? "cursor-grabbing" : "cursor-grab";

  return (
    <>
      <MdDragIndicator
        size={20}
        className={`h-4 inline-block mr-2 ${cursorClass}`}
        {...props}
      />
    </>
  );
};
