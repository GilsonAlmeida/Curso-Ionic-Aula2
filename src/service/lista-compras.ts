
import { Ingrediente } from "../models/ingredientes";

export class ListaComprasService {

    private itens: Ingrediente[] = [];
    
    incluiItem(nome: string, quantidade: number) {

      const index = this.itens.findIndex(item => item.nome == nome);

      if(index >= 0) {
        this.itens[index].quantidade = Number(this.itens[index].quantidade) + Number(quantidade);
      } else {
        this.itens.push(new Ingrediente(nome, quantidade));
      }
    }

    incluiItens(itens: Ingrediente[]) {
        this.itens.push(...itens);
    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

}
