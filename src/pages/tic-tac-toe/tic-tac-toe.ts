import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import TicTacToe from 'tictactoe-ai';

/**
 * Generated class for the TicTacToePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tic-tac-toe',
  templateUrl: 'tic-tac-toe.html',
})
export class TicTacToePage {

	//prazen board/igralna plošča
	board: any;
	//UI igralec
	aiTeam: any;
	aiPlayer: any;
	//njegova poteza
	move: any;

	//konec
	konec: any;

	//stevci
	zmaga: number;
	neodloceno: number;
	poraz: number;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    	//inicializiram ploščo
    	this.board = new TicTacToe.TicTacToeBoard(['','','','','','','','','']);
    	if(this.board==null){
    		console.log("Failed to initialize Board");
    	}

    	this.aiTeam = this.board.oppositePlayer("X");
    	if(this.aiTeam==null){
    		console.log("Failed to initialize aiTeam");
    	}

		this.aiPlayer = new TicTacToe.TicTacToeAIPlayer();
		this.aiPlayer.initialize(this.aiTeam, this.board);
		if(this.aiPlayer==null){
    		console.log("Failed to initialize aiPlayer");
    	}

    	//nastavim stevce na 0
    	this.zmaga = 0;
    	this.neodloceno = 0;
    	this.poraz = 0;
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad TicTacToePage');
    }

    narediPotezo(ix,iy){
    	if(this.konec!=null){
    		return;
    	}

    	console.log("Poteza:" + ix + ", " + iy);

    	//jaz naredim potezo
    	var location = {
        	x: ix,
        	y: iy
      	}
    	this.board.makeMove('X', location)

    	//ai naredi potezo
    	this.move = this.aiPlayer.makeMove();
		if(this.move != null){
			this.board.makeMove(this.aiTeam, this.move);
		}

		console.log(this.board.board);

		//pogledamo ce je igre konec
		this.konec = this.board.winner();
		if(this.konec!=null){
			if(this.konec.cell=='O'){this.poraz += 1;}
			else if(this.konec.cell=='X'){this.zmaga += 1;}
			else{this.neodloceno+=1;}
		}
    }

    resetIgro(){
    	//inicializiram ploščo
    	this.board = new TicTacToe.TicTacToeBoard(['','','','','','','','','']);
    	if(this.board==null){
    		console.log("Failed to initialize Board");
    	}

    	this.aiTeam = this.board.oppositePlayer("X");
    	if(this.aiTeam==null){
    		console.log("Failed to initialize aiTeam");
    	}

		this.aiPlayer = new TicTacToe.TicTacToeAIPlayer();
		this.aiPlayer.initialize(this.aiTeam, this.board);
		if(this.aiPlayer==null){
    		console.log("Failed to initialize aiPlayer");
    	}

    	this.konec = null;
    }
}
