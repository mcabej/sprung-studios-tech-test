import React from 'react'

interface Item {
  name    : string,
  quantity: number
}

const Tile = ({name, quantity}: Item): JSX.Element => {
  return (
    <div>
      {name}
      {quantity}
    </div>
  );
}

export const Tiles = (): JSX.Element => {
  return (
    <Tile name={'apple'} quantity={10} />
  )
}
