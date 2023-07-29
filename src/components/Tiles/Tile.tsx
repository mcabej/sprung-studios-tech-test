import React from "react";

export interface TileProps {
  key?: React.key;
  name: string;
  quantity: number;
  icon: string;
}

export const Tile = ({ name, quantity, icon }: TileProps) => {
  return (
    <div className={"flex justify-center items-center custom-hover-tile relative"}>
      <div className={"inventory-count flex justify-center"}>
        <span className={"absolute top-1 left-2"}>
            {quantity}
        </span>
        <div className={"h-[60px] w-[60px]"}>
            <img src={icon} className={"w-full h-full object-scale-down drop-shadow-[0_5px_rgba(0,0,0,0.45)]"} />
        </div>
      </div>
    </div>
  );
};
