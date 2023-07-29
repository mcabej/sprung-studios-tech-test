import React, { useRef, useState } from "react";
import corner from "../public/assets/Images/InventoryMain/IMG_CornerBrace.png";
import inventoryPanel from "../public/assets/Images/InventoryMain/IMG_InventoryPanel.png";
import decorTop from "../public/assets/Images/InventoryMain/IMG_DecorShape_Top.png";
import decorOther from "../public/assets/Images/InventoryMain/IMG_DecorShape_Other.png";
import inventoryIcon from "../public/assets/Images/InventoryMain/IMG_InventoryIcon.png";

const App = () => {
    const invPanelRef                 = useRef(null);
    const [panelSize, setPanelSize]   = useState([]);
    const [invPosSize, setInvPosSize] = useState({});    

    function handlePanelOnLoad() {
        const width  = invPanelRef.current.offsetWidth;
        const height = invPanelRef.current.offsetHeight;

        setPanelSize([
            width, 
            height
        ]);

        const top    = height * 0.2403;
        const left   = width * 0.0789;
        const bottom = height * 0.1255;

        setInvPosSize({
            top   : top,
            left  : left,
            width : width - (left * 2),
            height: height - (bottom + top)
        })
    }    

    return (
        <div className={'flex justify-center w-full h-full'}>
            <div ref={invPanelRef} className={'absolute'}>
                <img 
                    src       = {inventoryPanel}
                    className = {'w-auto h-auto'}                    
                    onLoad    = {handlePanelOnLoad}                
                />
            </div>

            {panelSize.length && (
                <div className={`relative border-2 border-blue-700 flex justify-center`} style={{width: `${panelSize[0]}px`, height: `${panelSize[1]}px`}}>                    
                    <div className={'absolute top-[20px] z-99'}>
                        <img src={decorTop} className={'drop-shadow-[0_10px_rgba(0,0,0,0.55)]'} />
                    </div>
                    <div className={'absolute top-[103px]'}>
                        <img src={inventoryIcon} />
                    </div>

                    <div 
                        className={`absolute border-2 border-red-800 stack-grid-bg`} 
                        style={{
                            top  : `${invPosSize.top}px`,
                            left : `${invPosSize.left}px`,
                            width: `${invPosSize.width}px`,
                            height: `${invPosSize.height}px`
                        }}
                    >
                        {/* tiles */}
                        <div className={'h-full w-full grid grid-rows-5 grid-cols-8 gap-[15px] p-[17px]'}>
                            <div className={'flex justify-center items-center custom-hover-tile'}>01</div>
                            <div className={'flex justify-center items-center custom-hover-tile'}>02</div>
                            <div className={'flex justify-center items-center custom-hover-tile'}>03</div>
                        </div>

                        {/* decorators */}
                        <div className={'absolute -right-[62px]'} style={{ top: '42.6%' }}>
                            <img src={decorOther} />
                        </div>

                        <div className={'absolute -left-[62px]'} style={{ top: '42.6%', transform: 'scaleX(-1)' }}>
                            <img src={decorOther} />
                        </div>

                        {/* corner braces */}
                        <div className={'absolute -bottom-7 -left-6'}>
                            <img src={corner} />
                        </div>
                        <div className={'absolute -top-7 -left-6'}>
                            <img src={corner} className={'rotate-90'} />
                        </div>
                        <div className={'absolute -top-7 -right-6'}>
                            <img src={corner} style={{transform: 'scaleY(-1) rotate(-90deg)'}} />
                        </div>
                        <div className={'absolute -bottom-7 -right-6'}>
                            <img src={corner} style={{transform: 'scaleY(-1) rotate(-180deg)'}} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App;

