import { useDroppable } from "@dnd-kit/core";
import React, {useState} from "react";
import { IItem, Item } from "./Item";

interface IItemSlotProps {
  key?: string;
  id: number;
  item?: IItem;
}

export const ItemSlot = ({ id, item }: IItemSlotProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  const [hover, setHover] = useState(false);

  return (
    <div
      ref={setNodeRef}
      className={`flex justify-center items-center font-sprung-numeric relative p-5 ${isOver ? "" : "custom-hover-tile"}`}
      onMouseEnter={(e) => {
        e.preventDefault;
        setHover(true);       
      }}
      onMouseLeave={(e) => {
        e.preventDefault;
        setHover(false);
      }}
    >
      {item && <Item {...item} />}
      {(hover && !isOver && item) && (
        <span className={`absolute -bottom-20 -right-[180%] bg-contain bg-tooltip w-[212px] h-[104px] p-8 text-xs z-[999]`}>
          {item?.description}
        </span>
      )} 
    </div>
  );
};
