import React from "react";
import InventoryMenu from "./components/InventoryMenu";
import { Tiles } from "./components/Tiles";

const App = () => {
    return (
        <InventoryMenu children={ <Tiles />  } />
    )
}

export default App;

