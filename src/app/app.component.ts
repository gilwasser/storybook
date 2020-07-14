import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    {
      title: 'Leg Day',
      tags: ['45 min', '3x5 sets'],
      percent: 75
    },
    {
      title: 'World War 2',
      tags: ['2 hours', '1 chapter'],
      percent: 40
    },
    {
      title: 'Calculus 2',
      tags: ['2 hours', '12 exercises'],
      percent: 22
    }, {
      title: 'Leg Day',
      tags: ['45 min', '3x5 sets'],
      percent: 90
    },
    {
      title: 'World War 2',
      tags: ['2 hours', '1 chapter'],
      percent: 99,
      highlight: true

    },
    {
      title: 'Calculus 2',
      tags: ['2 hours', '12 exercises'],
      percent: 75,
    },{
      title: 'Leg Day',
      tags: ['45 min', '3x5 sets'],
      percent: 90
    },
    {
      title: 'World War 2',
      tags: ['2 hours', '1 chapter'],
      percent: 99,
      highlight: true

    },
    {
      title: 'Calculus 2',
      tags: ['2 hours', '12 exercises'],
      percent: 75,
    }, {
      title: 'Leg Day',
      tags: ['45 min', '3x5 sets'],
      percent: 90
    },
    {
      title: 'World War 2',
      tags: ['2 hours', '1 chapter'],
      percent: 99,
      highlight: true

    },
    {
      title: 'Calculus 2',
      tags: ['2 hours', '12 exercises'],
      percent: 75,
    },
  ];


}

