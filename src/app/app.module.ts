import { ReceitasService } from './../service/receitasService';
import { EditaReceitaPage } from './../pages/edita-receita/edita-receita';
import { ReceitaPage } from './../pages/receita/receita';
import { ListaComprasService } from './../service/lista-compras';
import { ListaComprasPage } from './../pages/lista-compras/lista-compras';
import { ReceitasPage } from './../pages/receitas/receitas';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ReceitasPage,
    ListaComprasPage,
    ReceitaPage,
    EditaReceitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ReceitasPage,
    ListaComprasPage,
    ReceitaPage,
    EditaReceitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
