// Angular
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } => {

        // messy but you get the idea
        const isWhitespace = (control.value || '').trim().length === 0;

        const isValid = !isWhitespace;

        return isValid ? null : { 'whitespace': 'value is only whitespace' };

    };
}
