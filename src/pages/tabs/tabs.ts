import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TicTacToePage } from '../tic-tac-toe/tic-tac-toe';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab2Root = TicTacToePage;

  constructor() {

  }
}
