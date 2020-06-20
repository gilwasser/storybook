// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './weather-box.component';
import { DateComponent } from '../date/date.component';
import { TempsComponent } from '../temps/temps.component';


import { cityData } from '../date/date.stories';
import {tempsData} from '../temps/temps.stories';

export default {
  title: 'Wheater-box',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [WeatherBoxComponent, DateComponent, TempsComponent],
      imports: [CommonModule],
    }),
  ],
};


// default TaskList state
export const day = () => ({
  component: WeatherBoxComponent,
  template: `
  <div style="width:50%; margin: 1rem; width:fit-contet; font-size:12px">
    <app-weather-box [date]="date" [theme]="theme" [city]="city" [temps]="temps "></app-weather-box>
  </div>
`,
  props: {
    ...cityData,
    date: new Date(),
    temps: tempsData,
    theme: "day"
  },
});

export const night = () => ({
  component: WeatherBoxComponent,
  template: `
  <div style="width:50%; margin: 1rem; width:fit-contet; font-size:12px">
    <app-weather-box [theme]="theme" [date]="date" [city]="city" [temps]="temps "></app-weather-box>
  </div>
`,
  props: {
    ...cityData,
    temps: tempsData,
    theme: "night"
  },
});