import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

type InputDateType = Date | string | number | null;

@Pipe({
  name: 'cvDateRange',
})
export class CvDateRangePipe implements PipeTransform {
  transform(
    [from, to]: [InputDateType, InputDateType],
    fallback = 'present',
    format = 'mediumDate',
  ) {
    return `${this.transformDatePart(
      from,
      fallback,
      format,
    )} - ${this.transformDatePart(to, fallback, format)}`;
  }

  private transformDatePart(
    date: InputDateType,
    fallback: string,
    format = 'mediumDate',
  ) {
    return date ? formatDate(date, format, 'en-US') : fallback;
  }
}
