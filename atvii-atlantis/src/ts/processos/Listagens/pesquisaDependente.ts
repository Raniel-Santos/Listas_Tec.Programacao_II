import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Pesquisa from "../../interfaces/pesquisa";
import ListagemDependentes from "./listagemDependentes";
import Entrada from "../../io/entrada";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";


export default class PesquisarDependente implements Pesquisa<Cliente>{
    private clientes!:Cliente[]
    private dependente!:Cliente
    private entrada = new Entrada()

    constructor(){
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    pesquisa(): Cliente {

        let listagem = new ListagemDependentes()
        listagem.processar()

        let numeroDocumento = this.entrada.receberTexto("Digite o numero do documento do dependente desejado: ")

        this.clientes.forEach( (cliente:Cliente) => {
            cliente.Documentos.forEach( (documento:Documento) => {
                if(documento.Numero === numeroDocumento){
                    this.dependente = cliente
                }
            })
        })

        return this.dependente
    }
}