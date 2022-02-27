import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
import { Attempt } from './attempt';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url="http://localhost:5000/Values"

  constructor(private http: HttpClient) { }
  startGame(playerName: string, numberOfTries: number): Observable<Game>{
    /*
    let HttpOptions:Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    }
    */
    console.log("sending post...");
    return this.http.post<Game>(`${this.url}`, {"PlayerName": playerName, "NumberOfTries": numberOfTries});
  }

  attempt(numberAttempt: number, numberOfTries: number, guessedColorPattern: String[]): Observable<Attempt>{
    return this.http.post<Attempt>(`${this.url}/Attempt`, {"NumberAttempt": numberAttempt, "NumberOfTries": numberOfTries, "GuessedColorPattern": guessedColorPattern});
  }
}
