import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currency'
})
export class GamesListingPipe implements PipeTransform {

    transform(value: any, currencySignal: String = "R$ ", DividerOfThousands: String = ".", DecimalDivider: String = ","): any {

        if(value == null) return "";

        let teste;

        value.forEach(function (value) {

            teste = currencySignal + value.replace(DividerOfThousands, DecimalDivider);

        });


        return value;

    }

}