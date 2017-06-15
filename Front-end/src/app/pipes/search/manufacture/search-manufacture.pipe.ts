import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchManufacture'
})
export class SearchManufacturePipe implements PipeTransform{

    transform(manufacture, typed){

        typed = typed.toLowerCase();

        return manufacture.filter( game =>

            (manufacture.name.toLowerCase.includes(typed))

        );

    }

}