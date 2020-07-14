import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-chart',
  templateUrl: './rating-chart.component.html',
  styleUrls: ['./rating-chart.component.scss']
})
export class RatingChartComponent implements OnInit {
  @Input() rating:number;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if(this.rating >= 90 )
      return 'primary';
    if(this.rating >= 75 )
      return 'accent';
    return 'warn';
  }
}
