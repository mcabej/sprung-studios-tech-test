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
  const excaliburSword = new Sword({ icon: swordIcon, id: 1, name: "excalibur", quantity: 1 });
  const otherSword = new Sword({ icon: swordIcon, id: 2, name: "excalibur", quantity: 1 });

  // Food
  const apples = new Food({ icon: appleIcon, id: 3, name: "apple", quantity: 10 });
  const herbs = new Food({ icon: herbIcon, id: 4, name: "herbs", quantity: 16 });
  const moreHerbs = new Food({ icon: herbIcon, id: 9, name: "herbs", quantity: 16 });

  // Books
  const greatSlash = new Book({ icon: bookIcon, id: 5, name: "Great Slash", quantity: 1 });
  const piercingArrow = new Book({ icon: bookIcon, id: 6, name: "Great Slash", quantity: 1 });

  // Potions
  const hpPotions = new Potion({ icon: potionIcon, id: 7, name: "hp", quantity: 5 });
  const manaPotions = new Potion({ icon: potionIcon, id: 8, name: "hp", quantity: 7 });
  
  return [manaPotions, excaliburSword, herbs, otherSword, apples, greatSlash, hpPotions, piercingArrow, moreHerbs];
}