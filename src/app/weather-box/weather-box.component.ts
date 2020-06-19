import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.css']
})
export class WeatherBoxComponent implements OnInit {
  @Input() city: 'stirng';
  @Input() temps: number[];
  constructor() { }

  ngOnInit(): void {
  }

}
