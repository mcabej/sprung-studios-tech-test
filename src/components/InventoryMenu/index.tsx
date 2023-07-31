import React, { useRef, useState } from "react";
import inventoryPanel from "../../../public/assets/Images/menu_bg.png";

interface InventoryMenuProps {
  children?: React.ReactNode;
}

interface IInvPosSize {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const InventoryMenu = ({ children }: InventoryMenuProps) => {
  const invPanelRef = useRef(null);
  const [panelSize, setPanelSize] = useState<number[]>([]);
  const [invPosSize, setInvPosSize] = useState<IInvPosSize | undefined>(undefined);

  function handlePanelOnLoad() {
    const width = invPanelRef.current.offsetWidth;
    const height = invPanelRef.current.offsetHeight;

    setPanelSize([width, height]);

    const top = height * 0.24;
    const left = width * 0.084;
    const bottom = height * 0.14;

    setInvPosSize({
      top: top,
      left: left,
      width: width - left * 2,
      height: height - (bottom + top),      
    });
  }

  return (
    <div className={"flex justify-center w-full h-full"}>
      <img ref={invPanelRef} src={inventoryPanel} className={"w-auto h-auto object-contain"} onLoad={handlePanelOnLoad} />

      {panelSize.length && (
        <div className={`absolute flex justify-center`} style={{ width: `${panelSize[0]}px`, height: `${panelSize[1]}px` }}>
          <div
            className={`absolute`}
            style={{
              top: `${invPosSize.top}px`,
              left: `${invPosSize.left}px`,
              width: `${invPosSize.width}px`,
              height: `${invPosSize.height}px`,
            }}
          >
            {/* tiles */}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
