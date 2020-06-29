import { Component, OnInit, Input } from '@angular/core';
import { Theme } from './weather-box';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  Theme = Theme;
  @Input() city: string;
  @Input() date: Date;
  @Input() theme: Theme;
  @Input() temps: number[];
  constructor() {

  }


  ngOnInit(): void {
  }

}
