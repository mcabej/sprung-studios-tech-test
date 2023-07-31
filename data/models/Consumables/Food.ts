import { BaseItem, BaseProps } from "../Base/BaseItem"

export type FoodOptions = 'apple' | 'herbs'

export interface FoodItemProps extends BaseProps {
    id?  : number,
    name: FoodOptions
}

export class Food extends BaseItem {    
    description: string;    

    constructor(props: FoodItemProps) {
        super(props);                
        
        if (props.name === 'apple') {
            this.description = 'Apple fruit give you 10 stamina when consumed'
        }

        if (props.name === 'herbs') {
            this.description = 'Herbs gathered by the locals, rejuvenates mana by 10 when consumed'
        }

    }
}
