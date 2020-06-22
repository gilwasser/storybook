

import { moduleMetadata } from '@storybook/angular';


import { action } from '@storybook/addon-actions';
import { ButtonModule } from './button.module';
import { ButtonComponent } from './button.component';


export default {
    title: 'ButtonComponnet',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            declarations: [],   
            imports: [ButtonModule],
        }),
    ],
};


export const withIcon = () => ({
    component: ButtonComponent,
    props: {
        onClick:action('click'),
        icon: 'map',
        text: 'Show map'
    }
});

export const withNoIcon = () => ({
    component: ButtonComponent,
    props: {
        onClick:action('click'),
        text: 'Show map'
    }
});

export const iconOnly = () => ({
    component: ButtonComponent,
    props: {
        onClick:action('click'),
        icon: 'map',
    }
});

export const numberOnly = () => ({
    component: ButtonComponent,
    props: {
        onClick:action('click'),
        text: '1',
    }
});