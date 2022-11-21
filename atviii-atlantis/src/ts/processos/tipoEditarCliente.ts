import Processo from "../abstracoes/processo";
import MenuEditarPrincipal from "../menus/menuEditar";
import EditarClienteTitular from "./Atualizar e Excluir/Atualizar/editarTitular";
import EditarClienteDependente from "./Atualizar e Excluir/Atualizar/editarClienteDependente";

export default class SelecionarEditarCliente extends Processo{
    constructor(){
        super()
        this.menu = new MenuEditarPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch(this.opcao){
            case 1:
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Operação não entendida.');
        }
    }

}