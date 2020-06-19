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
export const Default = () => ({
  component: WeatherBoxComponent,
  template: `
  <div style="padding: 3rem; ">
    <app-weather-box [city]="city" [temps]="temps "></app-weather-box>
  </div>
`,
  props: {
    city: cityData,
    temps: tempsData
  },
});