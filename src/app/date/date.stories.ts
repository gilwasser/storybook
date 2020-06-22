

import { DateComponent } from './date.component';
import { moduleMetadata } from '@storybook/angular';
import { DateModule } from './date.module';


export default {
    title: 'DateComponent',
    excludeStories: /.*Data$/,
    decorators: [
      moduleMetadata({
        imports: [DateModule],
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
