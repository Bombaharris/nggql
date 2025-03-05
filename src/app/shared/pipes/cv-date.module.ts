import { NgModule } from '@angular/core';
import { CvDate } from './cv-date';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [CvDate],
  providers: [DatePipe],
  exports: [CvDate],
})
export class CvDateModule {}
