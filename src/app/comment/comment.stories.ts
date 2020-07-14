

import { moduleMetadata } from '@storybook/angular';
import {CommonModule} from "@angular/common";
import {CommentComponent} from "./comment.component";
import {text} from "@storybook/addon-knobs";
import {CommentModule} from "./comment.module";


export default {
  title: "Comment",
  decorators: [
    moduleMetadata({
      imports: [CommentModule]
    })
  ]
}

// default TaskList state
export const Default = () => ({
  component: CommentComponent,
  template: `
  <div style="padding: 3rem;">
   <app-comment [name]="name" [comment]="comment"></app-comment>
  </div>
`,
  props: {
    name:text('name','Gil Wasser'),
    comment:text('comment','Amazzzzzzing show !!!!')
  },
});
