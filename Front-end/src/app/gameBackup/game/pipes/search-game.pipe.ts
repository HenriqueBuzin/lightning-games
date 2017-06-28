// Angular
import { Pipe , PipeTransform } from '@angular/core';

// Model
import { Game } from './../../_models/game';

@Pipe({
    name: 'searchGame',
    pure: false
})
export class SearchGamePipe implements PipeTransform {

    /*
        Este pipe vai ser o pipe que pesquisa na tabela o jogo procurado e o mostra.
        Ele tem as seguintes falhas (não consegue pesquisar):
         Falta pesquisar em plataformas
         - Platforms
         Arrumar production de uma maneira melhor de fazer essa parte.
         - ((game.production ? "sim" : "nao não").includes(typed))
         Arrumar preço, poder pesquisar com R$...
     */

    transform(games: Game[], typed: string): any {

        if(games == null) return '';

        typed = typed.toLowerCase();

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