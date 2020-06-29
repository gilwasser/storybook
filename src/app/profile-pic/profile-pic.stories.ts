import {ProfilePicComponent} from './profile-pic.component';
import {moduleMetadata} from '@storybook/angular';
import {ProfilePicModule} from './profile-pic.module';
import {select, text} from "@storybook/addon-knobs";
import {ProfileSize, ProfileStatus} from "./profile-size.enum";


export default {
  title: 'ProfilePicComponent',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [ProfilePicModule],
    }),
  ],
};



export const ProfilePic = () => ({
  component: ProfilePicComponent,

  props: {
    size:select('size',ProfileSize,ProfileSize.medium),
    status:select('status',ProfileStatus,ProfileStatus.connect),
    imageURL:text('imageURL','https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg')
  }
});
