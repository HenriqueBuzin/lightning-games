import { NgModule } from '@angular/core';
import { SeparatorPipe } from './separator.pipe';

@NgModule({
    declarations:   [ SeparatorPipe ],
    exports:        [ SeparatorPipe ]
})

export class SeparatorModule{

    static forRoot() {

        return {

            ngModule: SeparatorModule

        };

    }

}