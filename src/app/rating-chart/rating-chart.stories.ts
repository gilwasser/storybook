

import { moduleMetadata } from '@storybook/angular';

import {number} from "@storybook/addon-knobs";
import {RatingChartModule} from "./rating-chart.module";
import {RatingChartComponent} from "./rating-chart.component";

export default {
  title: "Rating Chart",
  decorators: [
    moduleMetadata({
      imports: [RatingChartModule]
    })
  ]
}

// default TaskList state
export const Default = () => ({
  component: RatingChartComponent,
  template: `
  <div style="padding: 3rem;">
   <app-rating-chart [rating]="rating"></app-rating-chart>

  </div>
`,
  props: {
    rating: number('rating',74)
  },
});
