import { NgModule } from '@angular/core';
import { SearchUserPipe } from './search-user.pipe';

@NgModule({
    declarations:   [ SearchUserPipe ],
    exports:        [ SearchUserPipe ]
})

export class SearchUserModule {

    static forRoot() {

        return {

            ngModule: SearchUserModule

        };

    }

}