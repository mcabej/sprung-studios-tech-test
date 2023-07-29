import { BaseItem, BaseProps } from "../Base/BaseItem"

export type FoodOptions = 'apple' | 'herbs'

export interface FoodItemProps extends BaseProps {
    id  : number,
    name: FoodOptions
}

export class Food extends BaseItem {    
    constructor(props: FoodItemProps) {
        super(props);        
    }
}
