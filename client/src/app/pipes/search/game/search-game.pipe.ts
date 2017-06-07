import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchGame'
})
export class SearchGamePipe implements PipeTransform{

    transform(game, typed: String): any{

        typed = typed.toLowerCase();


        for (let i = 0; i < game.length; i++) {





        }



    }

}
/*
 return game.filter( game =>

 (game.name.toLowerCase().includes(typed)) ||

 (game.category.toLowerCase().includes(typed)) ||

 // (game.platforms.toLowerCase().includes(typed)) ||

 (game.price.toLowerCase().includes(typed)) ||

 (game.quantity.toLowerCase().includes(typed)) ||

 (game.production.toLowerCase().includes(typed)) ||

 (game.description.toLowerCase().includes(typed))

 );

 */