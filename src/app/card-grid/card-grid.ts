import {Input} from "@angular/core";
import {CardColor} from "../card/card.enum";

export interface Card {
  color?: CardColor,
  category: string,
  title: string,
  text: string,
  tags: string[],
}
