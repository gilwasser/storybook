import {object, select, text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata} from "@storybook/angular";
import {CardModule} from "./card.module";
import {CardComponent} from "./card.component";
import {CardColor} from "./card.enum";


export default {
  title: 'Card',
  declarations: [withKnobs],
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [CardModule]
    }),
  ],
};


export const Card = () => ({
  component: CardComponent,
  template: `
  <div style="height: 500px;width: 30%; min-width: 150px; padding: 3em">
    <app-card [category]="category" [color]="color" [title]="title" [text]="text" [tags]="tags"></app-card>
  </div>
  `,
  props: {
    color: select('color', CardColor, CardColor.secondary),
    category: text('category', 'Exercise'),
    title: text('title', 'Leg Day'),
    text: text('text', 'You should focus on ramping up your squat squats'),
    tags: object('tags', ['10 min', '3 exercises'])
  }
});
