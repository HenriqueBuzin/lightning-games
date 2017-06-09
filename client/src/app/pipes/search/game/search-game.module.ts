import { NgModule } from '@angular/core';
import { SearchGamePipe } from './search-game.pipe';

@NgModule({
    declarations:   [ SearchGamePipe ],
    exports:        [ SearchGamePipe ]
})

export class SearchGameModule {

    static forRoot() {

        return {

            ngModule: SearchGameModule

        };

    }

}