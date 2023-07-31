import { BaseItem, BaseProps } from "../Base/BaseItem";

type PotionOptions = 'HP Potion' | 'Mana Potion';

export interface PotionProps extends BaseProps {
    id  : number,
    name: PotionOptions,    
}

export class Potion extends BaseItem {
    constructor(props: PotionProps) {
        super(props);        

        if (props.name === 'HP Potion') {
            this.description = 'A herbal concoction produce by the local witch. Restores 10 HP';
        }

        if (props.name === 'Mana Potion') {
            this.description = 'A herbal concoction produce by the local witch. Restores 10 Mana';
        }
        
    }
}