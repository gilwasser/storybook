import {object, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata} from "@storybook/angular";
import {CardGridComponent} from "./card-grid.component";
import {CardGridModule} from "./card-grid.module";
import {Input} from "@angular/core";
import {CardColor} from "../card/card.enum";


export default {
  title: 'CardGrid',
  declarations: [withKnobs],
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [CardGridModule]
    }),
  ],
};

export const cardData = [
  {
    color: CardColor.important,
    category: 'Exercise',
    title: 'Leg Day',
    text: 'Focus on Squats do PR',
    tags: ['45 min', '3x5 sets']
  },
  {
    color: CardColor.urgent,
    category: 'History',
    title: 'World War 2',
    text: 'Germany invasion to Russia',
    tags: ['2 hours', '1 chapter']
  },
  {
    color: CardColor.secondary,
    category: 'Math',
    title: 'Calculus 2',
    text: 'do the exercises ',
    tags: ['2 hours', '12 exercises']
  },{
    color: CardColor.secondary,
    category: 'Exercise',
    title: 'Leg Day',
    text: 'Focus on Squats do PR Focus on Squats do PR Focus on Squats do PR Focus on Squats do PR Focus on Squats do PR Focus on Squats do PR Focus on Squats do PR Focus on Squats do PR Focus on Squats do PRFocus on Squats do PR Focus on Squats do PR Focus on Squats do PRFocus on Squats do PRFocus on Squats do PR',
    tags: ['45 min', '3x5 sets']
  },
  {
    color: CardColor.negative,
    category: 'History',
    title: 'World War 2',
    text: 'Germany invasion to Russia',
    tags: ['2 hours', '1 chapter']
  },
  {
    category: 'Math',
    title: 'Calculus 2',
    text: 'do the exercises ',
    tags: ['2 hours', '12 exercises']
  },
];


export const Card = () => ({
  component: CardGridComponent,
  template: `
  <div style="padding: 3em; background-color: #f7f7ff;
">
     <app-card-grid [data]="data"></app-card-grid>
  </div>
  `,
  props: {
    data: object('data', cardData)
  }
});
