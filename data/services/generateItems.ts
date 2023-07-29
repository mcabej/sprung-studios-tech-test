import { Sword } from "../models/Equippables/Sword"
import { Food } from "../models/Consumables/Food"

import apple from '../../public/assets/Images/Icons/Apple.png';
import swordIcon from '../../public/assets/Images/Icons/Sword.png';

export function generateItems() {
    const sword = new Sword({icon: swordIcon, id: 0, name: 'excalibur', quantity: 10});
    const apples = new Food({icon: apple, id: 0, name: 'apple', quantity: 10});
        
    return [sword, apples]
}