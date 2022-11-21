import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependentes from "../../impressores/impressorDependentes";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo{
    private clientes!:Cliente[]
    private impressor!: Impressor

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {        
        console.clear();
        console.log("Listagem de Todos os Dependentes:");
        this.clientes.forEach(dependente => {
            if(this.titular(dependente)){
                this.impressor = new ImpressorDependentes(dependente)
                console.log(this.impressor.imprimir())
            }
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular != undefined) {
            verificacao = true
        }
        return verificacao
    }
    
}