import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagens";

export default class ImpressorHospedagem implements Impressor {
    private hospedagem!:Hospedagem
    constructor(hospedagem:Hospedagem) {
        this.hospedagem = hospedagem
    }
    imprimir(): string {
        // -- Dados do Hospede e da Hospedagem
        let impressao = "\n" 
        + `| Tipo da Acomodação: ${this.hospedagem.getAcomodacao.NomeAcomadacao}\n`
        + `| Data de de Entrada da Hospedagem: ${this.hospedagem.getDataCadastro.toLocaleDateString()}\n`
        + `|\n`
        + `| -- Dados do Hospede --\n`
        + `|\n`
        + `| Nome: ${this.hospedagem.getTitular.Nome}\n`
        + `| Nome Social: ${this.hospedagem.getTitular.NomeSocial}\n`
        + `| Data de Nascimento: ${this.hospedagem.getTitular.DataNascimento}\n`
        + `| Data de Entrada: ${this.hospedagem.getDataCadastro}\n`

        // -- Verificação se possui dependentes... --
        if(this.hospedagem.getTitular.Dependentes.length > 0){
            impressao = impressao + `|\n` +  `| -- Dependentes\n`+ `|\n`
            this.hospedagem.getTitular.Dependentes.forEach((dependente,i) => {
                impressao = impressao 
                + `| Nome do Dependente: ${dependente.Nome}\n`
                + `| Nome Social de Dependente: ${dependente.NomeSocial}\n`
                + `| Data de Nascimento do Dependente: ${dependente.DataNascimento}\n`
                if(i != this.hospedagem.getTitular.Dependentes.length - 1){
                    impressao = impressao + `| ----------------------------------------\n`
                }
            })
        }

        return impressao
    }
}