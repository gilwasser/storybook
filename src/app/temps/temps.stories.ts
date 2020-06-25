import {TempsComponent} from './temps.component';
import {moduleMetadata} from '@storybook/angular';
import {TempsModule} from './temps.module';
import { object} from '@storybook/addon-knobs';


export default {
  title: 'Temps',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [TempsModule],
    }),
  ],
};


export const tempsData = [22, 26, 28, 31, 25];

export const Date = () => ({
  component: TempsComponent,
  props: {
    temps: object('temps', (tempsData))
  }
});
