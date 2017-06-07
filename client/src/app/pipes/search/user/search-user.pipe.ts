import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform{

    transform(user, typed){

        typed = typed.toLowerCase();

        return user.filter( user =>

            (user.name.toLowerCase.includes(typed)) ||

            (user.email.toLowerCase().includes(typed)) ||

            (user.password.toLowerCase().includes(typed)) ||

            (user.registrationDate.toLowerCase().includes(typed))

        );

    }

}