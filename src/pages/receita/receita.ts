import { ReceitasService } from './../../service/receitasService';
import { ListaComprasService } from './../../service/lista-compras';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Receita } from "../../models/receita";
import { EditaReceitaPage } from "../edita-receita/edita-receita";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html'
})
export class ReceitaPage implements OnInit {
    
  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitasService,
              public alertCtrl: AlertController ) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
     let confirm = this.alertCtrl.create({
      title: 'Remover a receita',
      message: 'Tem certeza que deseja remover a Receita?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.receitasService.removeReceita(this.index);
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes);
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Ingredientes adicionados a lista de compras!',
      buttons: ['OK']
    });
    alert.present();
  }


}

