import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './input-group/input-group';
import './other-inputs/other-inputs';

export const routes: Route[] = [
  { path: '', component: 'app-input-group', name: 'Input group' },
  { path: 'input-group', component: 'app-input-group', name: 'Input group' },
  { path: 'other-inputs', component: 'app-other-inputs', name: 'Other Inputs' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
