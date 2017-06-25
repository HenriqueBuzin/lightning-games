// Angular
import { Pipe , PipeTransform } from '@angular/core';

// Model
import { Manufacture } from './../_models/manufacture';

@Pipe({
    name: 'searchManufacture',
    pure: false
})
export class SearchManufacturePipe implements PipeTransform{

    transform(manufactures: Manufacture[], typed: string){

        typed = typed.toLowerCase();

        return manufactures.filter(manufacture =>

            (manufacture.name.toLowerCase().includes(typed))

        );

    }

}