export interface BaseProps {            
    id?     : number,
    name    : string,
    quantity: number,
    icon    : string,
    description?: string,
    isStackable?: boolean
}

export class BaseItem implements BaseProps {
    public id          : number;
    public name        : string;
    public quantity    : number;
    public icon        : string;
    public description?: string;
    public isStackable?: boolean = true;

    constructor({id, name, quantity, icon, description, isStackable}: BaseProps) {
        this.id          = id;
        this.name        = name;
        this.quantity    = quantity;
        this.icon        = icon;
        this.description = description;
        this.isStackable = isStackable;
    }

    getId() {
        return this.id;
    }
}