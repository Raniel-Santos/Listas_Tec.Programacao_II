import Processo from "../../../abstracoes/processo";
import ImpDependentes from "../../../impressores/impressorDependentes";
import Impressor from "../../../interfaces/impressor";
import EditarDadosDependente from "../../../menus/menuEditarDependente";
import Cliente from "../../../modelos/cliente";
import PesquisarDependente from "../../Listagens/pesquisaDependente";
import AtualizadorDependente from "./atualizador/dependente";
import EditarDadosPessoaisCliente from "./editarDadosPessoaisCliente";
import EditarDocumentoCliente from "./editarDocumentoCliente";
Cliente


export default class EditarClienteDependente extends Processo{
    private dependente!:Cliente
    private impressor!:Impressor
    private pesquisa:PesquisarDependente = new PesquisarDependente()

    constructor(){
        super()
        this.menu = new EditarDadosDependente()
        this.execucao = true
    }

    processar(): void {
        
        this.dependente = this.pesquisa.pesquisa()

        if(this.dependente === undefined){
            console.log('Dependente não encontrado...');
        }else{
            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada? ')

                switch(this.opcao){
                    case 1:
                        this.processo = new EditarDadosPessoaisCliente(this.dependente)
                        this.processo.processar()
                        break
                    case 2:
                        this.processo = new EditarDocumentoCliente(this.dependente)
                        this.processo.processar()
                        break
                    case 0:
                        this.execucao = false
                        this.impressor = new ImpDependentes(this.dependente)
                        let atualizador = new AtualizadorDependente(this.dependente)
                        atualizador.atualizar()
                        console.log(`Dados do dependente atualizado com sucesso...\n`);
                        console.log(this.impressor.imprimir());
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }
}