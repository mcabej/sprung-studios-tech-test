import React from 'react'
import {generateItems} from '../../../data/services/generateItems'

interface TileProps {
  key?    : React.key;
  name    : string;
  quantity: number;
  icon    : string;
}


const Tile = ({name, quantity, icon}: TileProps) => {
  return (
    <div className={'flex justify-center items-center custom-hover-tile relative'}>
      <div className={'inventory-count'}> 
        <span className={'absolute top-1 left-2'}>{quantity}</span>       
        <img src={icon} className={'h-auto w-[50px] drop-shadow-lg'} />
      </div>
    </div>
  );
}

export const Tiles = () => {
  const tiles = generateItems();

  return (    
    <div className={'h-full w-full grid grid-rows-5 grid-cols-8 gap-[15px] p-[17px]'}>
       {tiles && tiles.map((tile, index) => {
          return (
            <Tile         
              key      = {index}
              name     = {tile.name}
              quantity = {tile.quantity}
              icon     = {tile.icon}
            />
          )
       })}         
    </div>
  )
}
