import { BaseItem, BaseProps } from "../Base/BaseItem";

type SwordOptions = 'excalibur' | 'excaliburV2.12'

export interface SwordProps extends BaseProps {
    id  : number,
    name: SwordOptions
}

export class Sword extends BaseItem {
    constructor(props: SwordProps) {
        super(props);
    }
}