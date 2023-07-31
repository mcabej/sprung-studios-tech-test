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

  const [hover, setHover]           = useState<Boolean>(false);
  const [hoverDelay, setHoverDelay] = useState<Number>(null);

  const handleShowTooltip = (e) => {
    const delay = setTimeout(() => {
      e.preventDefault();
      setHover(true);
    }, 800);

    setHoverDelay(delay);
  }

  const handleHideTooltip = (e) => {
    e.preventDefault();
    clearTimeout(hoverDelay);
    
    setHover(false);
  }

  return (
    <div
      ref          = {setNodeRef}
      className    = {`flex justify-center items-center font-sprung-numeric relative p-5 ${isOver ? "" : "custom-hover-tile"}`}
      onMouseEnter = {handleShowTooltip}
      onMouseLeave = {handleHideTooltip}
    >
      {/* Item */}
      {item && <Item {...item} />}

      {/* Tooltip */}
      {(hover && !isOver && item) && (
        <span className={`absolute -bottom-20 -right-[180%] bg-contain bg-tooltip w-[212px] h-[104px] pl-7 pt-6 pr-1 text-xs z-[99]`}>
          <span className={'mb-1 flex'}>
            {item.name}
          </span>                    
          <span>
            {item?.description}
          </span>          
        </span>
      )} 
    </div>
  );
};
