import Armazem from "../../dominio/armazem";
import Pesquisa from "../../interfaces/pesquisa";
import Acomodacao from "../../modelos/acomodacao";
import Entrada from "../../io/entrada";
import ListagemAcomodacoes from "./listagemAcomodacoes";

export default class PesquisaAcomodacao implements Pesquisa<Acomodacao>{
    private acomodacao!:Acomodacao
    private acomodacoes!:Acomodacao[]
    private entrada = new Entrada()

    constructor(){
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    pesquisa(): Acomodacao {
        let listagemAcomodacoes = new ListagemAcomodacoes()
        listagemAcomodacoes.processar()
        let opcaoAcomodacao = this.entrada.receberNumero("Qual acomodação voçê deseja ?")
        this.acomodacao = this.acomodacoes[opcaoAcomodacao - 1]
        return this.acomodacao
    }
}