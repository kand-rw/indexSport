import { Component } from '@angular/core';

import { Market } from '../market/market';
import { Charge } from '../charge/charge';
import { Briefcase } from '../briefcase/briefcase';
import { Account } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Market;
  tab2Root: any = Charge;
  tab3Root: any = Briefcase;
  tab4Root: any = Account;

  constructor() {

  }
}
