import { BaseItem, BaseProps } from "../Base/BaseItem";

type PotionOptions = 'hp' | 'mana';

export interface PotionProps extends BaseProps {
    id  : number,
    name: PotionOptions
}

export class Potion extends BaseItem {
    constructor(props: PotionProps) {
        super(props);
    }
}