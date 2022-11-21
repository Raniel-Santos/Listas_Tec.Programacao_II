import Processo from "../../../abstracoes/processo";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";
import Documento from "../../../modelos/documento";
import Cliente from "../../../modelos/cliente";

export default class CadastrarPassaporte extends Processo{
    private cliente: Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numeroPassaporte = this.entrada.receberTexto('Insira o número de seu Passaporte: ')
        let dataEmissao = this.entrada.receberData('Insira a data de emissão de seu passaporte')
        let passaporte = new Documento(numeroPassaporte, TipoDocumento.Passaporte, dataEmissao)
        
        this.cliente.Documentos.push(passaporte)
    }
}