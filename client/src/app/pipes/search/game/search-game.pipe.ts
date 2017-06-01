import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchGame'
})
export class SearchGamePipe implements PipeTransform{

    transform(game, typed: String){

        typed = typed.toLowerCase();

        return game.filter( game =>

            (game.name.toLowerCase().includes(typed)) ||

            (game.category.toLowerCase().includes(typed)) ||

            (game.platforms[1].toLowerCase().includes(typed)) ||

            (game.price.toLowerCase().includes(typed)) ||

            (game.quantity.toLowerCase().includes(typed)) ||

            (game.production.toLowerCase().includes(typed)) ||

            (game.description.toLowerCase().includes(typed))

        );

    }

}