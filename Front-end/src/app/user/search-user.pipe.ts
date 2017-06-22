import { Pipe , PipeTransform } from '@angular/core';

import { User } from '../../../../_models/user';

@Pipe({
    name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform{

    transform(users: User[], typed: string){

        typed = typed.toLowerCase();

        /*
            Pesquisar por data de registro
            - (user.registrationDate.toString().includes(typed))

         */

        return users.filter(user =>

            (user.name.toLowerCase().includes(typed)) ||

            (user.email.toLowerCase().includes(typed))

        );

    }

}