

import { moduleMetadata } from '@storybook/angular';
import {IconModule} from "./icon.module";
import {IconComponent} from "./icon.component";
import {select} from "@storybook/addon-knobs";
import {IconName, IconSize} from "./icon.enum";

export default {
  title: "Icon",
  decorators: [
    moduleMetadata({
      imports: [IconModule]
    })
  ]
}

// default TaskList state
export const Default = () => ({
  component: IconComponent,
  template: `
  <div style="padding: 3rem">
    <app-icon [icon]="icon" [size]="size"></app-icon>
  </div>
`,
  props: {
    icon: select('icon',IconName,IconName.home),
    size: select('size',IconSize,IconSize.medium)
  },
});
