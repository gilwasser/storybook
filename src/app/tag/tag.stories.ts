

import { TagComponent } from './tag.component';
import { moduleMetadata } from '@storybook/angular';

import { TagModule } from './tag.module';
import { select, text } from '@storybook/addon-knobs';
import { IconName } from '../icon/iconType';


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
    template: `
    <div style="padding:5rem;display:flex; justify-content:space-evenly ;flex-wrap:wrap">
        <app-tag [icon]="icon" [text]="text"></app-tag>
        <app-tag [text]="text"></app-tag>
    </div>
  `,
    props: {
        text: text('text','text'),
        icon: select('icon',IconName,IconName.star)
    }
});

