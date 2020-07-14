

import { moduleMetadata } from '@storybook/angular';
import {MovieCardComponent} from "./movie-card.component";
import {MovieCardModule} from "./movie-card.module";
import {number, text} from "@storybook/addon-knobs";

export default {
  title: "Movie Card",
  decorators: [
    moduleMetadata({
      imports: [MovieCardModule]
    })
  ]
}

// default TaskList state
export const Default = () => ({
  component: MovieCardComponent,
  template: `
  <div style="padding: 3rem;">
   <app-movie-card [url]="url" [rating]="rating" [name]="name"></app-movie-card>

  </div>
`,
  props: {
    name:text('name','Dark season 3'),
    rating:number('rating',95),
    url:text('url','https://resizing.flixster.com/ISA3kQt7901XdpyelEEzJTND7s8=/1500x2222/v1.dDsyNjY4Mjk7ajsxODQ5ODsxMjAwOzE1MDA7MjIyMg')
  },
});
