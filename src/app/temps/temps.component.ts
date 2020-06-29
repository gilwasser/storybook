import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temps',
  templateUrl: './temps.component.html',
  styleUrls: ['./temps.component.scss']
})
export class TempsComponent implements OnInit {

  @Input() temps: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
