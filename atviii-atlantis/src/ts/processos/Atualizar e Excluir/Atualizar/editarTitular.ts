import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Impressor from "../../../interfaces/impressor";
import MenuEditarTitular from "../../../menus/menuEditarTitular";
import ImpDocumentoCliente from "../../../impressores/impressorDocumentoCliente";
import ImpressaorCliente from "../../../impressores/impressorCliente";
import AtualizadorTitular from "./atualizador/titular";
import PesquisaTitular from "../../Listagens/pesquisaTitular";
import EditarDadosPessoaisCliente from "./editarDadosPessoaisCliente";
import EditarTelefoneCliente from "./editarTelefoneCliente";
import EditarDocumentoCliente from "./editarDocumentoCliente";
import EditarEnderecoCliente from "./editarEnderecoCliente";

export default class EditarClienteTitular extends Processo{
    private impressor!: Impressor
    private titular!:Cliente
    private pesquisa:PesquisaTitular = new PesquisaTitular()

    constructor(){
        super()
        this.menu = new MenuEditarTitular()
        this.execucao = true
    }

    processar(): void {

        this.titular = this.pesquisa.pesquisa();

        if(this.titular === undefined){
            console.log("Titular não encontrado/não existente! ");
        }else{
            this.impressor = new ImpDocumentoCliente(this.titular)
            console.log(this.impressor.imprimir())

            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        this.processo = new EditarDadosPessoaisCliente(this.titular)
                        this.processo.processar()
                        break
                    case 2:
                        this.processo = new EditarTelefoneCliente(this.titular)
                        this.processo.processar()
                        break
                    case 3:
                        this.processo = new EditarEnderecoCliente(this.titular)
                        this.processo.processar()
                        break
                    case 4:
                        this.processo = new EditarDocumentoCliente(this.titular)
                        this.processo.processar()
                        break
                    case 0:
                        this.execucao = false
                        this.impressor = new ImpressaorCliente(this.titular)
                        let atualizador = new AtualizadorTitular(this.titular)
                        atualizador.atualizar()
                        console.log(`Dados do titular atualizado com sucesso...\n`);
                        console.log(this.impressor.imprimir());
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }
}