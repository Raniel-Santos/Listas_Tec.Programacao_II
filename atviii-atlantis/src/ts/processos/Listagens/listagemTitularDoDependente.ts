import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import ImpDependentesTitular from "../../impressores/impressorDependentesTitular";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Pesquisa from "../../interfaces/pesquisa";
import ListagemDependentes from "./listagemDependentes";
import PesquisarDependente from "./pesquisaDependente";

export default class ListagemTitularDoDependente extends Processo{
    private impressor!: Impressor

    constructor(){
        super()   
    }

    processar(): void {
        let pesquisaDepenendente = new PesquisarDependente
        let dependente = pesquisaDepenendente.pesquisa()
        
        if(dependente === undefined){
            console.log("Titular não existente/não encontrado...");
        }else{
            this.impressor = new ImpDependentesTitular(dependente)
            console.log(this.impressor.imprimir())
        }
    }
}