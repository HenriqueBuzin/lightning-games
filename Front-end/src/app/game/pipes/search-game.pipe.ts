import { Pipe , PipeTransform } from '@angular/core';

import { Game } from '../../_models/game';

@Pipe({
    name: 'searchGame',
    pure: false
})
export class SearchGamePipe implements PipeTransform {

    transform(games: Game[], typed: string): any {

        if(games == null) return "";

        typed = typed.toLowerCase();

        /*
            Falta pesquisar em plataformas
            - Platforms
            Arruma production de uma maneira que o lint não mostre erro.
            - ((game.production ? "sim" : "nao não").includes(typed))
        */

        return games.filter(game =>

            (game.name.toLowerCase().includes(typed)) ||

            (game.category.toLowerCase().includes(typed)) ||

            (game.description.toLowerCase().includes(typed)) ||

            (game.price.toString().toLocaleLowerCase().includes(typed)) ||

            (game.quantity.toString().toLocaleLowerCase().includes(typed)) ||

            ((game.production ? 'sim' : 'nao não').includes(typed))

        );

    }

}