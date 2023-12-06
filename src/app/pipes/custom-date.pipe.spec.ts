import { CustomDatePipe } from './custom-date.pipe';

describe('CustomDatePipe', () => {
  let pipe: CustomDatePipe;

  beforeEach(() => {
    pipe = new CustomDatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format a date string to DD.MM.YYYY format', () => {
    const inputDate = '2023-12-05T12:34:56Z'; // Input date string
    const expectedOutput = '05.12.2023'; // Expected output in DD.MM.YYYY format

    const result = pipe.transform(inputDate);

    expect(result).toBe(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    // Test with invalid input
    const invalidInput = 'invalid-date-string';
    const result = pipe.transform(invalidInput);

    expect(result).toBe('');
  });
});
