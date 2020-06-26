

import { moduleMetadata } from '@storybook/angular';
import { IconModule } from './icon.module';
import { IconComponent } from './icon.component';
import {withKnobs, select, boolean} from '@storybook/addon-knobs';
import { IconName, Colors } from './iconType';


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

console.log(Object.values(IconName));

export const map = () => ({
    component: IconComponent,
  //   template: `
  //   <div style="padding:4rem 0;display:flex; flex-direction:column; justify-content:center ;flex-wrap:wrap; font-size:3rem">
  //       <div style="font-size:3em; margin-left:auto;margin-right:auto;">
  //           <app-icon [color]="color" [icon]="icon" ></app-icon>
  //       </div>
  //       <div style="padding :10rem 0;display:flex; justify-content:space-evenly">
  //           <app-icon [icon]="'fas-star'" ></app-icon>
  //           <app-icon [icon]="'fas-heart'" ></app-icon>
  //           <app-icon [icon]="'far-map'" ></app-icon>
  //           <app-icon [icon]="'fab-facebook'" ></app-icon>
  //       </div>
  //   </div>
  // `,
    props: {
        icon: select('icon', IconName, IconName.star),
        color: select('color', Colors,Colors.secondary),
    }
});
