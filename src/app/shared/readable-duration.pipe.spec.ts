import { ReadableDurationPipe } from './readable-duration.pipe';

describe('ReadableDurationPipe', () => {
  let pipe: ReadableDurationPipe;

  beforeEach(() => {
    pipe = new ReadableDurationPipe();
  });

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms P2Y4M6DT1H2M3S to "2 years, 4 months, 6 days, 1 hour, 2 minutes and 3 seconds"', () => {
    const result = pipe.transform('P2Y4M6DT1H2M3S');
    expect(result).toBe('2 years, 4 months, 6 days, 1 hour, 2 minutes and 3 seconds');
  });

  it('transforms P1Y1M1DT1H1M1S to "1 year, 1 month, 1 day, 1 hour, 1 minute and 1 second"', () => {
    const result = pipe.transform('P1Y1M1DT1H1M1S');
    expect(result).toBe('1 year, 1 month, 1 day, 1 hour, 1 minute and 1 second');
  });

  it('handles single unit durations (e.g., P1Y)', () => {
    expect(pipe.transform('P1Y')).toBe('1 year');
    expect(pipe.transform('P2M')).toBe('2 months');
    expect(pipe.transform('P3D')).toBe('3 days');
    expect(pipe.transform('PT4H')).toBe('4 hours');
    expect(pipe.transform('PT5M')).toBe('5 minutes');
    expect(pipe.transform('PT6S')).toBe('6 seconds');
  });

  it('returns "Invalid duration" for invalid input', () => {
    expect(pipe.transform('Invalid')).toBe('Invalid duration');
    expect(pipe.transform('P-1Y')).toBe('Invalid duration');
    expect(pipe.transform('')).toBe('Invalid duration');
    expect(pipe.transform('P1S2M')).toBe('Invalid duration'); // Invalid format
  });

  it('correctly formats durations omitting certain parts', () => {
    expect(pipe.transform('P2Y4M')).toBe('2 years and 4 months');
    expect(pipe.transform('PT1H2M')).toBe('1 hour and 2 minutes');
    expect(pipe.transform('P3DT4H')).toBe('3 days and 4 hours');
  });

  it('handles durations with zeroes correctly', () => {
    expect(pipe.transform('P0Y0M0DT0H0M0S')).toBe('Invalid duration'); // Assuming all zeroes is invalid
    expect(pipe.transform('P0Y')).toBe('Invalid duration'); // Assuming single zero is invalid
  });

});