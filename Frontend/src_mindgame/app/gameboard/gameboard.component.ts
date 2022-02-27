import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attempt } from '../attempt';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  @Input() gameId: string;
  @Input() playerName: string;
  @Input() numberOfTries: number;
  @Input() availableColors: String[];
  //@Output() submitAttempt = new EventEmitter<String[]>();

  submitAttemptEnabled: boolean = false;
  //showSubmitAttemptBtn: boolean = true;
  showCorrectColors: boolean = false;
  numberSubmitted: number = 0;


  guessedColorPattern: String[] = [];

  correctColors: number;
  correctColorsPosition: number;

  attempts: Attempt[] = [];
  attemptsLength: number;

  gameWon: boolean = false;
  gameLost: boolean = false;

  numbers = [1, 2, 3, 4];
 
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    console.log(this.numberOfTries);
    this.attemptsLength = this.attempts.length;

  }

  colorChosen(id: number, $event){
    console.log("color chosen:");
    this.numberSubmitted += 1;
    this.guessedColorPattern[id] = $event;

    if(this.numberSubmitted == 4){
      this.submitAttemptEnabled = true;
    }
    console.log(this.guessedColorPattern);
  }

  submitAttempt(guessedColorPattern: String[]): void {
    this.numberSubmitted = 0;
    this.showCorrectColors = true;
    this.submitAttemptEnabled = false;
    this.attemptsLength = this.attempts.length;
    
    
    
   
    console.log("all color patterns:");
    
    console.log("submitAttempt");
      this.gameService.attempt(this.attempts.length, this.numberOfTries, guessedColorPattern)
      .subscribe(x => 
      {
        this.numberOfTries--;

        this.correctColors = x.correctColors;
        this.correctColorsPosition = x.correctColorsPosition;
        this.gameWon = x.gameWon;
        this.gameLost = x.gameLost;

        this.attempts.push({numberAttempt: this.attemptsLength, numberOfTries: this.numberOfTries, guessedColorPattern: this.guessedColorPattern, correctColors: this.correctColors, correctColorsPosition: this.correctColorsPosition, gameWon: this.gameWon, gameLost: this.gameLost});
        console.log(`correctColors: ${this.correctColors}`);

        console.log(`correctColorsPosition: ${this.correctColorsPosition}`);
        this.guessedColorPattern = [];
        
        this.numbers = this.numbers.map(x => x*6);

       
      });
      console.log(guessedColorPattern);
      
  }

}
