import React, { useState, useMemo } from "react";

import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { DraggableTableRow } from "components/DraggableTableRow/DraggableTableRow";
import { StaticTableRow } from "components/StaticTableRow/StaticTableRow";

import { useTable } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "components/Loader/Loader";

const TableAnalyses = ({
  columns,
  data,
  update,
  setData,
  hasMore,
  toogleModal,
}) => {
  const [activeId, setActiveId] = useState();
  const items = useMemo(() => data?.map(({ id }) => id), [data]);

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((data) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const selectedRow = useMemo(() => {
    if (!activeId) {
      return null;
    }
    const row = rows.find(({ original }) => original.id === activeId);
    prepareRow(row);
    return row;
  }, [activeId, rows, prepareRow]);

  return (
    <>
      <div className="max-md:overflow-x-scroll scrollbar-hide">
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={update}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={
              <p className="text-center font-black text-main">
                Vous avez tout vu !!!
              </p>
            }
          >
            <table
              {...getTableProps()}
              className="w-full border-separate mb-3 border-spacing-y-[2.5px]
              border-spacing-x-0 whitespace-nowrap"
            >
              <tbody {...getTableBodyProps()}>
                <SortableContext
                  items={items}
                  strategy={verticalListSortingStrategy}
                >
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <DraggableTableRow
                        key={row.original.id}
                        row={row}
                        toogleModal={toogleModal}
                      />
                    );
                  })}
                </SortableContext>
              </tbody>
            </table>
          </InfiniteScroll>
          <DragOverlay>
            {activeId && (
              <table style={{ width: "100%" }}>
                <tbody>
                  <StaticTableRow row={selectedRow} />
                </tbody>
              </table>
            )}
          </DragOverlay>
        </DndContext>
      </div>
    </>
  );
};

export default TableAnalyses;
