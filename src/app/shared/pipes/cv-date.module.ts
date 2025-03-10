import { NgModule } from '@angular/core';
import { CvDateRangePipe } from './cv-date';

@NgModule({
  declarations: [CvDateRangePipe],
  exports: [CvDateRangePipe],
})
export class CvDateModule {}
