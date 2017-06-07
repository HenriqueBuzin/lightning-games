import { NgModule } from '@angular/core';
import { SearchPlatformPipe } from './search-platform.pipe';

@NgModule({
    declarations:   [ SearchPlatformPipe ],
    exports:        [ SearchPlatformPipe ]
})

export class SearchPlatformModule {

    static forRoot() {
        return {
            ngModule: SearchPlatformModule
        };
    }

}