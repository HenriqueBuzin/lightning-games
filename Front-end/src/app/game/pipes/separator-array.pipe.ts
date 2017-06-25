// Angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'separatorArray',
    pure: false
})
export class SeparatorArrayPipe implements PipeTransform {

    /*
        Este pipe vai pegar o array que é automaticamente separado assim:
        value1,value2...
        e transformar em:
        value1, value2...
    */

    transform(value: string, separator: string = ', '): string {

        if(value == null) return '';

        let text: string = '';

        for (let i = 0; i < value.length; i++) {

            text += value[i] + separator;

        }

        text = text.substring(0, (text.length - separator.length));

        return text;

    }

}