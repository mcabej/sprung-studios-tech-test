export interface BaseProps {            
    name        : string,
    quantity    : number,
    icon        : string,
}

export class BaseItem implements BaseProps {
    private id      : number;
    public  name    : string;
    public  quantity: number;
    public  icon    : string;

    constructor({id, name, quantity, icon}) {
        this.id       = id;
        this.name     = name;
        this.quantity = quantity;
        this.icon     = icon;
    }

    getId() {
        return this.id;
    }

    removeItem() {
        if (this.quantity !== 0) {
            this.quantity -= 1;
        }
    }

    addItem() {
        this.quantity += 1;        
    }

    getItem() {
        return this;
    }
}