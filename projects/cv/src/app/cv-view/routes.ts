import { Route } from '@angular/router';
import { CvViewComponent } from './cv-view.component';

export default [{ path: ':id', component: CvViewComponent }] satisfies Route[];
