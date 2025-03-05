import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'cvDate',
})
export class CvDate implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(
    value: Date | string | number | null,
    format?: string,
    timezone?: string,
    locale?: string,
  ) {
    if (!value) {
      return 'present';
    }

    return this.datePipe.transform(
      value,
      format ?? 'mediumDate',
      timezone,
      locale ?? 'en-US',
    );
  }
}
