import Processo from "../../../abstracoes/processo";
import Hospedagem from "../../../modelos/hospedagens";
import Armazem from "../../../dominio/armazem";
import ImpressorHospedagem from "../../../impressores/impressorHospedagens";
import Impressor from "../../../interfaces/impressor";

export default class ListagemDeHospedagens extends Processo{
    private hospedagens!:Hospedagem[]
    private impressor!:Impressor
    constructor(){
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
    }
    processar(): void {
        console.log('Iniciando a listagem dos clientes hospedados...')
        this.hospedagens.forEach(hospedagem => {
            this.impressor = new ImpressorHospedagem(hospedagem)
            console.log(this.impressor.imprimir());
        })
    }    
}