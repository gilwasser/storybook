import {Component, Input, OnInit} from '@angular/core';
import {Colors, IconName} from "../icon/iconType";
import {Size} from "../icon/size.enum";
import {ProfileSize, ProfileStatus} from "./profile-size.enum";

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  @Input() imageURL: string = 'https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg'
  @Input() size: ProfileSize = ProfileSize.small;
  @Input() status: ProfileStatus = ProfileStatus.connect;

  constructor() { }

  ngOnInit(): void {
  }

}
