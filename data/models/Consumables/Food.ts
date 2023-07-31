import { BaseItem, BaseProps } from "../Base/BaseItem"

export type FoodOptions = 'Apple' | 'Herbs'

export interface FoodItemProps extends BaseProps {
    id?  : number,
    name: FoodOptions
}

export class Food extends BaseItem {    
    description: string;    

    constructor(props: FoodItemProps) {
        super(props);                
        
        if (props.name === 'Apple') {
            this.description = 'Apple fruit give you 10 stamina when consumed'
        }

        if (props.name === 'Herbs') {
            this.description = 'Rejuvenates mana by 10 when consumed'
        }

    }
}
