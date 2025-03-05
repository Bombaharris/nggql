import { CvDate } from './cv-date';
import { DatePipe } from '@angular/common';
import createSpyObj = jasmine.createSpyObj;

let datePipeSpy: DatePipe;
let pipe: CvDate;

describe('test CvDate pipe', () => {
  beforeEach(() => {
    datePipeSpy = createSpyObj('DatePipe', ['transform']);
    pipe = new CvDate(datePipeSpy);
  });

  it('should return "present" text when date is null', () => {
    expect(pipe.transform(null)).toBe('present');
  });

  it('should call formatDate function with specific arguments', () => {
    pipe.transform('2022-01-01', 'mediumDate', 'UTC', 'en-US');
    expect(datePipeSpy.transform).toHaveBeenCalledWith('2022-01-01', 'mediumDate', 'UTC', 'en-US');
  });
});
