import React from "react";
import { InventoryMenu } from "./components/InventoryMenu";
import { ItemSlots } from "./components/Items/ItemSlots";

const App = () => {
  return (
    <InventoryMenu>
      <ItemSlots />
    </InventoryMenu>
  )
};

export default App;
