import {PaginatorComponent} from './paginator.component';
import {moduleMetadata} from '@storybook/angular';
import {PaginatorModule} from './paginator.module';
import {number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Paginator',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [PaginatorModule],
    }),
  ],
};


export const tempsData = [22, 26, 28, 31, 25];

export const Date = () => ({
  component: PaginatorComponent,
  // template: `
  //   <div style="padding:20px; width: 80%;">
  //       <app-paginator [page]="page" [maxPage]="maxPage" (onPageChange)="onPageChange()"></app-paginator>
  //   </div>
  // `,
  props: {
    page: number('page', 5),
    maxPage: number('maxPage', 10),
    onPageChange: action("click")
  }
});
