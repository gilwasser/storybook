

import { StarsComponent } from './stars.component';
import { moduleMetadata } from '@storybook/angular';
import { StarsModule } from './stars.module';



export default {
    title: 'StarsComponent',
    excludeStories: /.*Data$/,
    decorators: [
      moduleMetadata({
        // imports both components to allow component composition with storybook
        imports: [StarsModule],
      }),
    ],
  };


export const stars = () => ({
    component: StarsComponent,
    props: {
       stars: 4.53,
       votes: 209
    }
});
