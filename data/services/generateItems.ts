import { Sword } from "../models/Equippables/Sword";
import { Food } from "../models/Consumables/Food";
import { Book } from "../models/Consumables/Book";
import { Potion } from "../models/Consumables/Potion";

import appleIcon from "../../public/assets/Images/Icons/Apple.png";
import herbIcon from "../../public/assets/Images/Icons/Herbs.png";
import bookIcon from "../../public/assets/Images/Icons/Book.png";
import potionIcon from "../../public/assets/Images/Icons/Flask.png";
import swordIcon from "../../public/assets/Images/Icons/Sword.png";

export function generateItems() {
  // Swords
  const excaliburSword = new Sword({ icon: swordIcon, id: 1, name: "Excalibur", quantity: 1 });
  const otherExcalibur = new Sword({ icon: swordIcon, id: 11, name: "Excalibur", quantity: 1 });
  const otherKatana = new Sword({ icon: swordIcon, id: 12, name: "Katana", quantity: 1 });
  const katana = new Sword({ icon: swordIcon, id: 13, name: "Katana", quantity: 1 });

  // Food
  const apples = new Food({ icon: appleIcon, id: 3, name: "Apple", quantity: 10 });
  const moreApples = new Food({ icon: appleIcon, id: 10, name: "Apple", quantity: 12 });
  const herbs = new Food({ icon: herbIcon, id: 4, name: "Herbs", quantity: 16 });
  const moreHerbs = new Food({ icon: herbIcon, id: 9, name: "Herbs", quantity: 16 });

  // Books
  const greatSlash = new Book({ icon: bookIcon, id: 5, name: "Great Slash", quantity: 1 });
  const anotherGreatSlash = new Book({ icon: bookIcon, id: 6, name: "Great Slash", quantity: 1 });

  // Potions
  const hpPotions = new Potion({ icon: potionIcon, id: 7, name: "HP Potion", quantity: 5 });
  const manaPotions = new Potion({ icon: potionIcon, id: 8, name: "Mana Potion", quantity: 7 });
  
  return [manaPotions, excaliburSword, herbs, otherExcalibur, apples, greatSlash, hpPotions, katana, anotherGreatSlash, moreHerbs, moreApples, otherKatana];
}