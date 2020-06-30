import {SideMenuComponent} from './side-menu.component';
import {moduleMetadata} from '@storybook/angular';
import {SideMenuModule} from './side-menu.module';
import {action} from '@storybook/addon-actions';
import {IconName} from "../icon/iconType";
import {number, object, select} from "@storybook/addon-knobs";
import {ProfileStatus} from "../profile-pic/profile-size.enum";


export default {
  title: 'SideMenu',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [SideMenuModule],
    }),
  ],
};

export const actionData = action('click')

export const buttonsData = [{
  name: 'course',
  buttons: [
    {text: 'Home', icon: IconName.home},
    {text: 'Classes', icon: IconName.paper},
    {text: 'Home Work', icon: IconName.pen}
  ]
},
  {
    name: 'education',
    buttons: [
      {text: 'Videos', icon: IconName.video},
      {text: 'Games', icon: IconName.games},
      {text: 'Social', icon: IconName.social},
      {text: 'Forum', icon: IconName.forum},
    ]
  }

]

export const userData = {
  name: 'Deadpool',
  url :'https://deadpool.ussl.co.il/wp-content/uploads/2019/01/1_0ubYRV_WNR9iYrzUAVINHw.jpeg'
}
export const SideMenu = () => ({
  component: SideMenuComponent,

  props: {
    onTabChange: action('On Tab Change'),
    user:object('user',userData),
    status: select('status',ProfileStatus ,ProfileStatus.connect),
    activeBox: number('activeBox',0),
    active: number('active', 0),
    buttons: object('buttons', buttonsData),
  }
});
