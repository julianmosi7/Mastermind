import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { AttemptComponent } from './attempt/attempt.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    GameboardComponent,
    AttemptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }