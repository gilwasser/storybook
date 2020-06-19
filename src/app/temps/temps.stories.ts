

import { TempsComponent } from './temps.component';

export default {
    title: 'Temps',
    component: TempsComponent,
    excludeStories: /.*Data$/,
};

export const tempsData = [22, 26, 28 , 31, 25];

export const Date = () => ({
    component: TempsComponent,
    props: {
        temps: tempsData,
    }
});
