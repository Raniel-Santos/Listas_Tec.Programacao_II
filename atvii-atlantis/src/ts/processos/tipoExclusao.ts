import Processo from "../abstracoes/processo";
import MenuExcluir from "../menus/menuExcluir";
import TitularExcluir from "./Atualizar e Excluir/Exclusão/titularExcluir";
import DependenteExcluir from "./Atualizar e Excluir/Exclusão/dependenteExcluir";

export default class MenuEscolhaExcluir extends Processo{
    constructor(){
        super()
        this.menu = new MenuExcluir()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao= this.entrada.receberNumero('Qual a opção desejada?')
        switch(this.opcao){
            case 1:
                this.processo = new TitularExcluir()
                this.processo.processar()
                break;
            case 2:
                this.processo = new DependenteExcluir()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida...')}
        }
}
