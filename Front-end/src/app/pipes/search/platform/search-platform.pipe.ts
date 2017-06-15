import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPlatform'
})
export class SearchPlatformPipe implements PipeTransform {

    transform(platform, typed) {

        typed = typed.toLowerCase();


        return platform.forEach(function (platform) {

            (platform.name.toLowerCase().includes(typed))

        });

    }

}