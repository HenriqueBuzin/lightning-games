import { NgModule } from '@angular/core';
import { SearchManufacturePipe } from './search-manufacture.pipe';

@NgModule({
    declarations:   [ SearchManufacturePipe ],
    exports:        [ SearchManufacturePipe ]
})

export class SearchManufactureModule {

    static forRoot() {

        return {

            ngModule: SearchManufactureModule

        };

    }

}