import { CvDateRangePipe } from './cv-date';

let pipe: CvDateRangePipe;

describe('test CvDate pipe', () => {
  beforeEach(() => {
    pipe = new CvDateRangePipe();
  });

  it('should return "present - present" text when date is null', () => {
    expect(pipe.transform([null, null])).toBe('present - present');
  });

  it('should format dates', () => {
    const result = pipe.transform(['2022-01-01', '2024-02-02']);
    expect(result).toEqual('Jan 1, 2022 - Feb 2, 2024');
  });

  it('should allow to customize fallback text', () => {
    const result = pipe.transform(['2022-01-01', null], 'obecnie');
    expect(result).toEqual('Jan 1, 2022 - obecnie');
  });

  it('should allow to customize format date', () => {
    const result = pipe.transform(
      ['2022-01-01', '2024-02-02'],
      'present',
      'shortDate',
    );
    expect(result).toEqual('1/1/22 - 2/2/24');
  });
});
