import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicTacToePage } from './tic-tac-toe';

@NgModule({
  declarations: [
    TicTacToePage,
  ],
  imports: [
    IonicPageModule.forChild(TicTacToePage),
  ],
})
export class TicTacToePageModule {}
