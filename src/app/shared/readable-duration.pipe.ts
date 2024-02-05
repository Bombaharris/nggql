import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableDuration',
  standalone: true
})
export class ReadableDurationPipe implements PipeTransform {

  transform(value: string): string {
    const pattern = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    const matches = pattern.exec(value);

    if (!matches) {
      return 'Invalid duration';
    }

    const parts = [
      { unit: 'year', value: matches[1] },
      { unit: 'month', value: matches[2] },
      { unit: 'day', value: matches[3] },
      { unit: 'hour', value: matches[4] },
      { unit: 'minute', value: matches[5] },
      { unit: 'second', value: matches[6] }
    ];
    const allZeroes = parts.every(part => !part.value || part.value === '0');
    if (allZeroes) {
      return 'Invalid duration';
    }

    const readableParts = parts
      .filter(part => part.value) 
      .map(part => {
        const v = Number(part.value); 
        return `${v} ${part.unit}${v > 1 ? 's' : ''}`;
      });

    return readableParts.join(', ').replace(/, ([^,]*)$/, ' and $1'); 
  }

}
