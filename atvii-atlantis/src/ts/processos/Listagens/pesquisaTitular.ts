import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Pesquisa from "../../interfaces/pesquisa";
import Entrada from "../../io/entrada";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemTitulares from "./listagemTitulares";


export default class PesquisaTitular implements Pesquisa<Cliente>{
    private titular!: Cliente
    private clientes!: Cliente[]
    private entrada = new Entrada()

    constructor(){
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    pesquisa() {        
        let listagem = new ListagemTitulares()
        listagem.processar()        
        let numeroDocTitular = this.entrada.receberTexto("Digite o numero do documento do titular desejado: ")

        this.clientes.forEach( (cliente: Cliente) => {
            cliente.Documentos.forEach( (documento:Documento) => {
                if( documento.Numero === numeroDocTitular){this.titular = cliente}
            })
        })
        return this.titular
    }
}