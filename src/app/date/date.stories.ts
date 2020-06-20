

import { DateComponent } from './date.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';


export default {
    title: 'DateComponent',
    excludeStories: /.*Data$/,
    decorators: [
      moduleMetadata({
        // imports both components to allow component composition with storybook
        declarations: [DateComponent],
        imports: [CommonModule],
      }),
    ],
  };


export const cityData = {city:'San Fransisco',
    date: new Date()};

export const date = () => ({
    component: DateComponent,
    props: {
       ...cityData,
    }
});
