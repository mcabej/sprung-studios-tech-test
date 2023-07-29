import React from 'react'
import { generateItems } from '../../../data/services/generateItems'
import { Tile } from './Tile';

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
