import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import CadastroAcomodacoes from "./Acomodação/cadastroAcomodacoes"
import AutoGerarClientes from "../scripts/autoGerarClientes"
import ListagemAcomodacoes from "./Acomodação/listagemAcomodacoes"
import cadastroHospedagem from "./Cadastro/Hospedagens/cadastroHospedagens"
import TipoCadastroCliente from "./tipoCadastroCliente"
import SelecionarEditarCliente from "./tipoEditarCliente"
import MenuEscolhaExcluir from "./tipoExclusao"
import TipoListagemClientes from "./tipoListagemClientes"
import ListagemDeHospedagens from "./Cadastro/Hospedagens/listagemHospedagem"

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
            case 6:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 7:
                this.processo = new cadastroHospedagem()
                this.processo.processar()
            break;
            case 8:
                this.processo = new ListagemDeHospedagens()
                this.processo.processar()
            break;
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