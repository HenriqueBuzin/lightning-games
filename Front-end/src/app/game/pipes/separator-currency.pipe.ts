import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'separatorCurrency',
    pure: false
})
export class SeparatorCurrencyPipe implements PipeTransform {

    /*
        Este pipe vai pegar a moeda no valor:
        R$50,00
        e transformar em:
        R$ 50,00
     */

    transform(value: string): string {

        if(value == null) return '';

        let text: string = ' ';

        let coin: string =  value.substring(0, 2)

        let price: string = value.substring(2, (value.length));

        text = coin + text + price;

        return text;

    }

}