import {AbstractControl} from '@angular/forms';
export class CustomValidator {
  // if the data is valid then the method returns null
  // else for invalid value the method return  JSON object e.g.
  // {even:false} or {odd:true}
  static CheckEven(control: AbstractControl): any {
     // tslint:disable-next-line: radix
     const value = parseInt (control.value);
     if (value % 2 === 0) {
       return null; // valid
     } else {
        return {even : false}; // invalid
     }
  }

  static CheckNegative(control: AbstractControl): any {
      const value = control.value;
      if (value > 0) {
        return null; // valid
      } else {
        return {negative: true}; // invalid
      }
  }

  static CheckBlankspace(control: AbstractControl): any {
    const value = control.value;
    if (!value.trim()) {
      
      return {blankspace: true}; // invalid
    } else {
      return null; // valid
    }
  }
}
