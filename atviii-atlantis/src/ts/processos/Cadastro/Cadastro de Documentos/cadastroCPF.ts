import Processo from "../../../abstracoes/processo";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";
import Cliente from "../../../modelos/cliente";
import Documento from "../../../modelos/documento";

export default class CadastrarCPF extends Processo{
    private cliente: Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numeroCPF = this.entrada.receberTexto('Insira o número do CPF: ')
        let dataEmissao = this.entrada.receberData('Insira a data de Emissão do CPF')
        let cpf = new Documento(numeroCPF, TipoDocumento.CPF, dataEmissao)

        this.cliente.Documentos.push(cpf)
    }
}