import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemTitulares from "./listagemTitulares";

export default class ListagemDependentesPorTitular extends Processo{
    private clientes: Cliente[]
    private impressor!: Impressor

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        this.processo = new ListagemTitulares()
        this.processo.processar()

        let docTitular = this.entrada.receberTexto('Insira o documento do Titular desejado: ')
        let titular = this.clientes.find(
            (cliente:Cliente) => cliente.Documentos.find((documento:Documento) => documento.Numero === docTitular
        ))

        if(!titular){
            console.log('Número documento ttular errado/não cadastrado!');            
        }else{
            console.log(`\n Dependentes do titular ${titular.Nome}\n`);
            titular.Dependentes.forEach((dependente)=>{
                this.impressor = new ImpressaorCliente(dependente)
                console.log(this.impressor.imprimir());                
            })            
        }        
    }
}