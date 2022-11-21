import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpTelefones from "./impressorTelefones";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpDependentes implements Impressor{
    private cliente!: Cliente
    private impressor!: Impressor

    constructor(cliente:Cliente){
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = `**********************************\n`
            + `| -- Inserção de Dependentes -- \n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome Social: ${this.cliente.NomeSocial}\n`
            + `| Data de Nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de Cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

            this.impressor = new ImpTelefones(this.cliente.Telefones)
            impressao = impressao + `\n${this.impressor.imprimir()}`
            
            this.impressor = new ImpressorEndereco(this.cliente.Endereco)
            impressao = impressao + `\n${this.impressor.imprimir()}`
            
            this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
            impressao = impressao + `\n${this.impressor.imprimir()}`

            return impressao
        }
}