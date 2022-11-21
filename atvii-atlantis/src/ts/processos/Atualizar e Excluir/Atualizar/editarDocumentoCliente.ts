import Processo from "../../../abstracoes/processo";
import ImpressaorCliente from "../../../impressores/impressorCliente";
import Impressor from "../../../interfaces/impressor";
import EditarDocumento from "../../../menus/menuEditarDocumento";
import Cliente from "../../../modelos/cliente";

export default class EditarDocumentoCliente extends Processo{
    private cliente:Cliente
    private impressor!:Impressor

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new EditarDocumento()
        this.execucao = true
    }

    processar(): void {
        this.impressor = new ImpressaorCliente(this.cliente)
        console.log(this.impressor.imprimir())

        let numeroDoc = this.entrada.receberTexto('Insira o numero do documento que deseja atualizar?')
        let documento = this.cliente.Documentos.find((doc) => numeroDoc === doc.Numero)

        if(!documento){
            console.log('Documento não encontrado/não existente');
        }else{
            while(this.execucao){
                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        let atualizaNumero = this.entrada.receberTexto(`Insira o novo numero do ${documento.Tipo}: `)
                        documento.Numero = atualizaNumero
                        break
                    case 2:
                        let atualizaDataExpedicao = this.entrada.receberData(`Insira a nova data de expedição do ${documento.Tipo}: `)
                        documento.DataExpedicao = atualizaDataExpedicao
                        break
                    case 0:
                        this.execucao = false
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }
}