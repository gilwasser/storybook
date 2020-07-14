import { moduleMetadata } from '@storybook/angular';
import {ButtonComponent} from "./button.component";
import {ButtonModule} from "./button.module";
import {select, text} from "@storybook/addon-knobs";
import {ButtonColor, ButtonSize} from "./button.enum";


export default {
  title: 'Button',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [],
      imports: [ButtonModule],
    }),
  ],
};

// default TaskList state
export const Default = () => ({
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem">
    <app-button text="text" [size]="size" [color]="color"></app-button>
  </div>
`,
  props: {
    text: text('text','button'),
    color: select('color',ButtonColor, ButtonColor.accent),
    size: select('size',ButtonSize, ButtonSize.medium)
  },
});
