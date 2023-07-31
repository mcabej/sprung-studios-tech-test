import { useDraggable } from "@dnd-kit/core";
import React from "react";


export interface IItem {
  key?: React.key;
  id: number;
  name?: string;
  quantity?: number;
  icon?: string;
  description?: string;
}

export const Item = ({ id, icon, quantity, name, description }: IItem) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
  } = useDraggable({
    id: id,
    data: {
      id, 
      quantity,
      name,
      description,
      icon
    }    
  });  

  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  return (
    <>
      <span className={"absolute top-2 left-2"}>{quantity}</span>      
      <img
        ref          = {setNodeRef}
        src          = {icon}
        style        = {style}
        className    = {"w-full h-full object-contain drop-shadow-[0_3px_rgba(0,0,0,0.45)] z-99"}        
        {...attributes}
        {...listeners}
      />           
    </>
  );
};
