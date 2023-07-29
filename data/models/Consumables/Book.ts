import { BaseItem, BaseProps } from "../Base/BaseItem";

type BookOptions = 'Great Slash' | 'Piercing Arrow';

export interface BookProps extends BaseProps {
    id  : number;
    name: BookOptions
}

export class Book extends BaseItem {
    constructor(props: BookProps) {
        super(props);
    }
}