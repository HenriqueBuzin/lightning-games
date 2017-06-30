// Angular
import { Pipe , PipeTransform } from '@angular/core';

// Model
import { User } from '../_model/user';

@Pipe({
    name: 'searchUser',
    pure: false
})

export class SearchUserPipe implements PipeTransform {

    transform(users: User[], typed: string) {

        typed = typed.toLowerCase();

        return users.filter(user =>

            (user.name.toLowerCase().includes(typed)) ||

            (user.email.toLowerCase().includes(typed)) ||

            (user.registrationDateBr.includes(typed))

        );

    }

}
