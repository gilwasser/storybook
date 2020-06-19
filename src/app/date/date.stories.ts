

import { DateComponent } from './date.component';

export default {
    title: 'DateComponent',
    component: DateComponent,
    excludeStories: /.*Data$/,
};

export const cityData = 'San Fransisco';

export const Date = () => ({
    component: DateComponent,
    props: {
        city: cityData
    }
});
