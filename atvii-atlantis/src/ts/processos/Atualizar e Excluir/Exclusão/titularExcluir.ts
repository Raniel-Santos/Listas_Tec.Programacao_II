import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import Documento from "../../../modelos/documento";
import ListagemTitulares from "../../Listagens/listagemTitulares";

export default class TitularExcluir extends Processo{
    private clientes!: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        this.processo = new ListagemTitulares()
        this.processo.processar()

        let docNumero = this.entrada.receberTexto('Insira o documento do titular para excluir: ')
        let indice = this.clientes.findIndex((cliente: Cliente) => cliente.Documentos.find((documento: Documento) => documento.Numero === docNumero))
        let filtrados = this.clientes.filter(cliente => (cliente.Documentos.find((documento: Documento) => documento.Numero === docNumero )));
        let documentos: any[]= []
        filtrados.forEach(element => {
            element.Dependentes.forEach(d => d.Documentos.forEach( doc => { documentos.push({ numero:doc.Numero }) }))
        });
        documentos.forEach(excluido => {
            for (let i = 0; i < this.clientes.length; i++) {
                const cliente = this.clientes[i];
                for (let index = 0; index < cliente.Documentos.length; index++) {
                    const documento = cliente.Documentos[index];
                    if(documento.Numero === excluido.numero){
                        this.clientes.splice(i, 1)
                    }
                    break
                }
            }
        });

        if (indice === -1) {
            console.log(`Titular não encontrado/não existe!`);
        } else {
            this.clientes.splice(indice, 1)
            console.log(`Titular Excluido...`);
        }

    }
    
}