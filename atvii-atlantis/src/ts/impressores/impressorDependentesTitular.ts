import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpTelefones from "./impressorTelefones";

export default class ImpDependentesTitular implements Impressor{
    private cliente!: Cliente
    private impressor!: Impressor

    constructor(cliente:Cliente){
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = `************************************\n`
            + `| -- Titular do Dependente ${this.cliente.Nome} --\n`
            + `| \n`
            + `| Nome Titular: ${this.cliente.Titular.Nome}\n`
            + `| Nome Social: ${this.cliente.Titular.NomeSocial}\n`
            + `| Data de Nascimento: ${this.cliente.Titular.DataNascimento.toLocaleDateString()}`
            + `| Data de Cadastro: ${this.cliente.Titular.DataCadastro.toLocaleDateString()}`
        
            this.impressor = new ImpTelefones(this.cliente.Titular.Telefones)
            impressao = impressao + `\n${this.impressor.imprimir()}`
        
            this.impressor = new ImpressorEndereco(this.cliente.Titular.Endereco)
            impressao = impressao + `\n${this.impressor.imprimir()}`
        
            this.impressor = new ImpressorDocumentos(this.cliente.Titular.Documentos)
            impressao = impressao + `\n${this.impressor.imprimir()}`

            return impressao
        }
}