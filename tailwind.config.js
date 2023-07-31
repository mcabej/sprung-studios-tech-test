/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,ts,jsx,tsx}", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {    
    extend: {
      backgroundImage: {
        'game'                 : "url('/public/assets/Images/Background/UI_Background.png')",
        'inventory-panel'      : "url('/public/assets/Images/InventoryMain/IMG_InventoryPanel.png')",
        'inventory-grid-bg'    : "url('/public/assets/Images/InventoryMain/IMG_GridBackground.png')",
        'inventory-grid-border': "url('/public/assets/Images/InventoryMain/IMG_GridBorder.png')",
        'inventory-decor-top'  : "url('/public/assets/Images/InventoryMain/IMG_DecorShape_Top.png')",
        'inventory-decor-other': "url('/public/assets/Images/InventoryMain/IMG_DecorShape_Other.png')",
        'inventory-corner'     : "url('/public/assets/Images/InventoryMain/IMG_CornerBrace.png')",
        'hightlight'           : "url('/public/assets/Images/InventoryMain/IMG_SlotHighlight.png')",
        'tooltip'              : "url('/public/assets/Images/Tooltip/IMG_TooltipPanel.png')"
      },
      fontFamily: {
        'sprung-numeric': ['Sprung Numeric'],
        'sprung-tooltip': ['Sprung ToolTip']
      },
    }    
  },
  plugins: [],
}

