

import { TagComponent } from './tag.component';
import { moduleMetadata } from '@storybook/angular';

import { TagModule } from './tag.module';


export default {
    title: 'TagComponent',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [TagModule],
        }),
    ],
};


export const withIcon = () => ({
    component: TagComponent,
    props: {
        text: 'with icon',
        icon: 'diamond'
    }
});


export const withoutIcon = () => ({
    component: TagComponent,
    props: {
        text: 'witout icon',
    }
});
