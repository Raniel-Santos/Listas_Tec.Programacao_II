import Processo from "../../../abstracoes/processo"
import ImpressaorCliente from "../../../impressores/impressorCliente"
import Impressor from "../../../interfaces/impressor"
import EditarTelefones from "../../../menus/menuEditarTelefones"
import Cliente from "../../../modelos/cliente"


export default class EditarTelefoneCliente extends Processo{
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new EditarTelefones()
        this.execucao = true
    }

    processar(): void {

        this.impressor = new ImpressaorCliente(this.cliente)
        console.log(this.impressor.imprimir())

        let telefone = this.entrada.receberTexto('Qual o telefone que deseja atualizar? ')
        let telefoneSelecionado = this.cliente.Telefones.find((tel) => tel.Numero === telefone )

        if(!telefoneSelecionado){
            console.log('Telefone não encontrado');
        }else{
            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        let atualizaDdd: string = this.entrada.receberTexto('Insira o novo ddd: ')
                        telefoneSelecionado.Ddd = atualizaDdd
                        break
                    case 2:
                        let atualizaNumero: string = this.entrada.receberTexto('Insira o novo numero: ')
                        telefoneSelecionado.Numero = atualizaNumero
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