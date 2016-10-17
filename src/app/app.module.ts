import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Market } from '../pages/market/market';
import { Charge } from '../pages/charge/charge';
import { Briefcase } from '../pages/briefcase/briefcase';
import { Account } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Market,
    Charge,
    Briefcase,
    Account,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Market,
    Charge,
    Briefcase,
    Account,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
