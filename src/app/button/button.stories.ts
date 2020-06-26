import {moduleMetadata} from '@storybook/angular';

import {ButtonModule} from './button.module';
import {ButtonComponent} from './button.component';
import {IconName} from '../icon/iconType';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";


export default {
  title: 'ButtonComponnet',
  excludeStories: /.*Data$/,
  declarations: [withKnobs],
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [ButtonModule],
    }),
  ],
};


export const withIcon = () => ({
  component: ButtonComponent,
  props: {
    icon: select('icon', IconName, IconName.heart),
    text: text('text', 'Button'),
    onClick: action('click'),
    active: boolean('active',false)

  }
});
