import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  playerName: string = "Player 1";
  numberOfTries: number = 6;
  
  showAlert: boolean = false;

  @Output() startGame = new EventEmitter<{playerName, numberOfTries}>();
  

  constructor() { }

  ngOnInit(): void {
  }

  startGameComponent(playerName: string, numberOfTries: number): void{
    if(Number(this.numberOfTries) <= 12 && Number(this.numberOfTries) >= 6){
      this.showAlert = false;
      this.startGame.emit({playerName: playerName, numberOfTries: numberOfTries});
    }else{
      this.showAlert = true;
    }
  }
}
