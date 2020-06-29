import {TextIconButton} from "../button/button";
import {ProfileStatus} from "../profile-pic/profile-size.enum";

export interface SideMenuButtons {
  name: string,
  buttons: TextIconButton[]
}

export interface User {
  name: string,
  url: string
}

