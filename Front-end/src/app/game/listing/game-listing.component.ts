// Angular
import { MdDialog, MdDialogRef } from '@angular/material';
import {Component, OnInit} from '@angular/core';

// Directive
import { DialogComponent } from '../../_directive/dialog/dialog.component';

// Service
import { FooterService } from '../../_service/footer.service';
import { GameService } from '../../_service/game.service';

// Model
import { Game } from '../../_model/game';

@Component({
    moduleId: module.id,
    selector: 'app-games-listing',
    templateUrl: './game-listing.component.html',
    styleUrls: [ './game-listing.component.css' ]
})
export class GamesListingComponent implements OnInit {
    games: Game[] = [];

    private dialogRef: MdDialogRef<any>;

    constructor(public dialog: MdDialog, private gameService: GameService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.loadTable();

    }

    loadTable() {

        this.gameService.getGames().subscribe(

            (games: Game[]) => {

                this.games = games;

                console.log(games);

        }, (error: any) => console.log(error));

    }

    open(message: string, id: number) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if (result) {

                this.gameService.deleteGame(id).subscribe(

                    (games) => {

                    this.loadTable();

                });

            }

            this.dialogRef = null;

        });

    }

}
