import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import Documento from "../../../modelos/documento";
import ListagemDependentes from "../../Listagens/listagemDependentes";

export default class DependenteExcluir extends Processo{
    private clientes!: Cliente[]
    private titular!: Cliente
    private indice: number = -1

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        this.processo = new ListagemDependentes()
        this.processo.processar()

        let docDependenteNumero = this.entrada.receberTexto('Insira o documento do dependente para excluir: ')
        this.clientes.forEach((cliente,indice)=>{cliente.Documentos.forEach(documento=>{
            if(documento.Numero === docDependenteNumero){
                this.indice = indice
                this.titular = cliente.Titular
            }
        })
    })
        if(this.indice === -1){
            console.log(`Dependente não encontrado/não existente...`);
        }else{
            let i = this.titular.Dependentes.findIndex(dependente => 
                dependente.Documentos.find(documento => documento.Numero === docDependenteNumero)
            );

            if(i === -1){
                console.log("Erro");
            }else{
                this.clientes.splice(this.indice, 1)
                this.titular.Dependentes.splice(i, 1)
                console.log(`Dependente Excluido...`);
            }
        }
    }
}
