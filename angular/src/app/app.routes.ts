import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { OtherInputsComponent } from './other-inputs/other-inputs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'input-group', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'input-group', component: InputGroupComponent, data: { text: 'Input group' } },
  { path: 'other-inputs', component: OtherInputsComponent, data: { text: 'Other Inputs' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
