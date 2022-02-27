import { Component } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    playerName: string;
    numberOfTries: number;
    showCreateGame = true;
    showGame = false;

    gameId: string;
    availableColors: String[] = [];

    constructor(private gameService: GameService) {}

    ngOnInit(): void{
        
    }

    startGame($event): void{
      console.log($event);
      
      this.gameService.startGame($event.playerName, Number($event.numberOfTries))
          .subscribe(x => 
            {
              console.log(x);
              this.gameId = x.gameId;
              this.availableColors = x.availableColors;
              this.showGame = true;
              this.showCreateGame = false;
              this.playerName = $event.playerName;
              this.numberOfTries = $event.numberOfTries;
              console.log(this.gameId);
            });
    }

    /*
    submitAttempt($event): void{
      console.log("submitAttempt");
      this.gameService.attempt($event)
      .subscribe(x => 
      {
        this.correctColors = x.correctColors;
        console.log(this.correctColors);
      });
      console.log($event);
      console.log(this.correctColors);
    }
    */

}