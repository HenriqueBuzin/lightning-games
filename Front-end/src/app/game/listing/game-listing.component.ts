import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DialogComponent } from '../../_directives/dialog/dialog.component';
import { GameService } from '../../_services/game.service';
import { Game } from '../../_models/game';

@Component({
    moduleId: module.id,
    selector: 'app-games-listing',
    templateUrl: './game-listing.component.html',
    styleUrls: [ './game-listing.component.css' ]
})
export class GamesListingComponent{

    games: Game[] = [];

    constructor(public dialog: MdDialog, private gameService: GameService){ this.loadTable(); }

    loadTable(){

        this.gameService.getGames().subscribe(
            (games: Game[]) => {
                this.games = games;
        }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message: string, id: number) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.gameService.deleteGame(id).subscribe(games => {

                    console.log(games);

                    this.loadTable();

                });


            }

            this.dialogRef = null;

        });

    }

}