import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'separator',
    pure: false
})
export class SeparatorPipe implements PipeTransform {

    transform(value: String, separator: String = ", "): String {

        if(value == null) return "";

        let text: String = "";

        for (let i = 0; i < value.length; i++) {

            text += value[i] + separator;

        }

        text = text.substring(0, (text.length - separator.length));

        return text;

    }

}