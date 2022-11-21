import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import AutoGerarClientes from "../scripts/autoGerarClientes"
import TipoCadastroCliente from "./tipoCadastroCliente"
import SelecionarEditarCliente from "./tipoEditarCliente"
import MenuEscolhaExcluir from "./tipoExclusao"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new SelecionarEditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new MenuEscolhaExcluir()
                this.processo.processar()
                break
            case 5:
                this.processo = new AutoGerarClientes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}