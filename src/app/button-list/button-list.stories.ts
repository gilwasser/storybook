

import { moduleMetadata } from '@storybook/angular';

import { ButtonListModule } from './button-list.module';
import { ButtonListComponent } from './button-list.component';
import { withKnobs, object, } from '@storybook/addon-knobs';
import { IconName } from '../icon/iconType';
import { action } from '@storybook/addon-actions';


export default {
    title: 'ButtonListComponnet',
    excludeStories: /.*Data$/,
    declarations: [withKnobs],
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [ButtonListModule],
        }),
    ],
};

export const bottonsData = [
    {text:"Cancellation"},
    {text:'Type of Place'},
    {text:'Facebook', icon: IconName.facebook},
    {text: 'Circle of Life'},
    {text:'Heart', icon: IconName.heart},

]


export const ButtonList = () => ({
    component: ButtonListComponent,
    template: `
        <div style="padding: 3em;width: 80%; margin:auto">
            <app-button-list (clicked)="clicked($event)" [buttons]="buttons"></app-button-list>
        </div>
  `,
    props: {
        clicked: action('click'),
        buttons: object('buttons', bottonsData)
    }
});
