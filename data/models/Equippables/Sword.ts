import { BaseItem, BaseProps } from "../Base/BaseItem";

type SwordOptions = 'Excalibur' | 'Katana'

export interface SwordProps extends BaseProps {
    id  : number,
    name: SwordOptions,    
}

export class Sword extends BaseItem {
    constructor(props: SwordProps) {
        super(props);  

        this.isStackable = false;
        
        if (props.name === 'Excalibur') {
            this.description = 'Forged for the future king. Deals 20 damage, requires 20 strength';
        }
        
        if (props.name === 'Katana') {
            this.description = 'Can cut through most things. Deals 40 damage, requires 70 dexterity';
        }
    }
}