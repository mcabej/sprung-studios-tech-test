import { DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import React, { useState } from "react";
import { generateItems } from "../../../data/services/generateItems";
import { ItemSlot } from "./ItemSlot";

export const ItemSlots = () => {  
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor, {
     // Press delay of 250ms, with tolerance of 5px of movement
     activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  }))
  const items = generateItems();  
  const [itemSlots, setItemSlots] = useState(create8x5ItemSlots);

  function create8x5ItemSlots() {
    const itemSlots = [];

    let count = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 5; y++) {
        if (count < items.length) {
          itemSlots.push(items[count]);
        } else {
          itemSlots.push(null);
        }

        count++;
      }
    }

    return itemSlots;
  }

  function handleDragEnd(event) {    
    const { active, over } = event;
    const { id } = over ?? {};

    if (over === null) return;    

    setItemSlots((prev) => {
      const newItemSlots = prev;
      const idxOfOldSlot = newItemSlots.findIndex((item) => item?.id === active.id);

      if (idxOfOldSlot === id) {
        return prev;
      }

      // check if new slot has an item already
      if (newItemSlots[id] !== null) {
        if (active.data.current.name === newItemSlots[id].name && active.data.current.isStackable) {
          // stack items
          newItemSlots[id].quantity += active.data.current.quantity;
          // remove item from old slot
          newItemSlots[idxOfOldSlot] = null;
        } else {
          // swap places if not of the same type
          newItemSlots[idxOfOldSlot] = newItemSlots[id];
          newItemSlots[id] = active.data.current;
        }
      } else {
        // remove item from old slot
        newItemSlots[idxOfOldSlot] = null;
        // add item
        newItemSlots[id] = active.data.current;
      }     

      return [...newItemSlots];
    });
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className={"h-full w-full grid grid-rows-5 grid-cols-8 gap-3 px-4 pt-[1.1rem] pb-2"}>
        {itemSlots.map((item, index) => {
          return <ItemSlot key={index} id={index} item={item} />;
        })}        
      </div>
    </DndContext>
  );
};
