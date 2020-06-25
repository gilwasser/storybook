// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';

import { WeatherBoxComponent } from './weather-box.component';

import { cityData } from '../date/date.stories';
import {tempsData} from '../temps/temps.stories';
import { WeatherBoxModule } from './weather-box.module';
import { Theme } from './weather-box';
import { select, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Wheater-box',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [WeatherBoxModule],
    }),withKnobs
  ],
};

// default TaskList state
export const day = () => ({
  component: WeatherBoxComponent,
  template: `
  <div style="width:50%; margin: 1rem;">
    <app-weather-box [date]="date" [theme]="theme" [city]="city" [temps]="temps "></app-weather-box>
  </div>
`,
  props: {
    theme:select('theme',Object.values(Theme),Theme.day),
    ...cityData,
    date: new Date(),
    temps: tempsData,
  },
});
