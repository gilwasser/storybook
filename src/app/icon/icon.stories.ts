

import { moduleMetadata } from '@storybook/angular';
import { IconModule } from './icon.module';
import { IconComponent } from './icon.component';
import {withKnobs, select} from '@storybook/addon-knobs';
import { IconName, Colors } from './iconType';
import {Size} from "./size.enum";


export default {
    title: 'Icon',
    declarations: [withKnobs],
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [IconModule]
        }),
    ],
};


export const Icon = () => ({
    component: IconComponent,

    props: {
        icon: select('icon', IconName, IconName.star),
        color: select('color', Colors,Colors.secondary),
      size: select('size',Size, Size.medium)
    }
});
