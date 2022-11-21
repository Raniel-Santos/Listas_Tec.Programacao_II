import Armazem from "../../../dominio/armazem"
import Pesquisa from "../../../interfaces/pesquisa"
import Processo from "../../../abstracoes/processo"
import MenuAcomodacoes from "../../../menus/menuAcomodacoes"
import Cliente from "../../../modelos/cliente"
import Hospedagem from "../../../modelos/hospedagens"
import PesquisaAcomodacao from "../../Acomodação/pesquisaAcomodacoes"
import PesquisaTitular from "../../Listagens/pesquisaTitular"
import Acomodacao from "../../../modelos/acomodacao"

export default class cadastroHospedagem extends Processo{
    private titular!:Cliente
    private acomodacoes!:Acomodacao[]
    private hospedagens!:Hospedagem[]
    private pesquisa:any
    private confirmacao:String = `Hospedagem Realizada com sucesso...`

    constructor(){
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.menu = new MenuAcomodacoes()
        this.execucao = true
    }

    processar(): void {

        this.pesquisa = new PesquisaTitular()
        this.titular = this.pesquisa.pesquisa()

        if(this.titular === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero("Qual o tipo de acomodação deseja se hospedar ?")
            switch(opcao){
                case 1:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[0]))
                    console.log(this.confirmacao);
                    break
                case 2:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[1]))
                    console.log(this.confirmacao);
                    break
                case 3:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[2]))
                    console.log(this.confirmacao);
                    break
                case 4:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[3]))
                    console.log(this.confirmacao);
                    break
                case 5:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[4]))
                    console.log(this.confirmacao);
                    break
                case 6:
                    this.hospedagens.push(new Hospedagem(this.titular, this.acomodacoes[5]))
                    console.log(this.confirmacao);
                    break

            }
        }
    }
}