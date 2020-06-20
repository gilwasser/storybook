

import { TempsComponent } from './temps.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';


export default {
    title: 'Temps',
    excludeStories: /.*Data$/,
    decorators: [
      moduleMetadata({
        // imports both components to allow component composition with storybook
        declarations: [TempsComponent],
        imports: [CommonModule],
      }),
    ],
  };

export const tempsData = [22, 26, 28 , 31, 25];

export const Date = () => ({
    component: TempsComponent,
    props: {
        temps: tempsData,
    }
});
