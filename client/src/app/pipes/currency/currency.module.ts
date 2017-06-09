import { NgModule } from '@angular/core';
import { GamesListingPipe } from './currency.pipe';

@NgModule({
    declarations:   [ GamesListingPipe ],
    exports:        [ GamesListingPipe ]
})

export class CurrencyModule {

    static forRoot() {

        return {

            ngModule: CurrencyModule

        };

    }

}