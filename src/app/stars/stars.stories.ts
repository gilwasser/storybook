

import { StarsComponent } from './stars.component';
import { moduleMetadata } from '@storybook/angular';
import { StarsModule } from './stars.module';
import { withKnobs, number } from '@storybook/addon-knobs';



export default {
    title: 'StarsComponent',
    excludeStories: /.*Data$/,
    declerations:[withKnobs],
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
       stars: number('stars',4.75),
       votes: number('votes',209,)
    }
});
