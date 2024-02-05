import { FormControl } from "@angular/forms";
import { dateTimePeriodValidator } from "./datetime-period-validator.directive";


describe('dateTimePeriodValidator', () => {
    it('should accept valid duration strings', () => {
        const validator = dateTimePeriodValidator();
        expect(validator(new FormControl('P3Y6M4DT12H30M5S'))).toBeNull();
        expect(validator(new FormControl('PT12H'))).toBeNull();
        expect(validator(new FormControl('P10D'))).toBeNull();
      });
    
      it('should reject invalid duration strings', () => {
        const validator = dateTimePeriodValidator();
        expect(validator(new FormControl('3Y6M4DT12H30M5S'))).toEqual({ incorrect: true });
        expect(validator(new FormControl('P-5D'))).toEqual({ incorrect: true });
        expect(validator(new FormControl('PT12H30M5X'))).toEqual({ incorrect: true });
      });
    
      it('should handle empty or undefined inputs gracefully', () => {
        const validator = dateTimePeriodValidator();
        expect(validator(new FormControl(''))).toEqual({ incorrect: true });
        expect(validator(new FormControl(null))).toBeNull();
        expect(validator(new FormControl(undefined))).toBeNull();
      });
});
