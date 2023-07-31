export interface BaseProps {            
    id?     : number,
    name    : string,
    quantity: number,
    icon    : string,
    description?: string
}

export class BaseItem implements BaseProps {
    public id      : number;
    public name    : string;
    public quantity: number;
    public icon    : string;
    public description?: string;

    constructor({id, name, quantity, icon, description}: BaseProps) {
        this.id          = id;
        this.name        = name;
        this.quantity    = quantity;
        this.icon        = icon;
        this.description = description;
    }

    getId() {
        return this.id;
    }
}