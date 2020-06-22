

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {IconModule} from './icon.module';
import { IconComponent } from './icon.component';

export default {
    title: 'Icon',
    excludeStories: /.*Data$/,
    decorators: [
      moduleMetadata({
        // imports both components to allow component composition with storybook
        imports: [IconModule]
      }),
    ],
  };


export const map = () => ({
    component: IconComponent,
    props: {
        iconStr: 'map',
    }
});


export const leftArrow = () => ({
    component: IconComponent,
    props: {
        iconStr: 'leftArrow',
    }
});

export const rightArrow = () => ({
    component: IconComponent,
    props: {
        iconStr: 'rightArrow',
        color: 'pink'
    }
});