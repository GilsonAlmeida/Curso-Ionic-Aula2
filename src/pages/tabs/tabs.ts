import { ListaComprasPage } from './../lista-compras/lista-compras';
import { ReceitasPage } from './../receitas/receitas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  receitas = ReceitasPage;
  listaCompras = ListaComprasPage; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
