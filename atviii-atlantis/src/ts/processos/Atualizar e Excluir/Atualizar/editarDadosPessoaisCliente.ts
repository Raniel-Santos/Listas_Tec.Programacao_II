import Processo from "../../../abstracoes/processo";
import MenuEditarDadosCliente from "../../../menus/menuEditarDadosPessoais";
import Cliente from "../../../modelos/cliente";

export default class EditarDadosPessoaisCliente extends Processo{
    private cliente:Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuEditarDadosCliente()
        this.execucao = true
    }
    processar(): void {
        
        while(this.execucao){
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada atualizar?')

            switch(this.opcao){
                case 1:
                    let atualizaNome = this.entrada.receberTexto('Insira o novo nome: ')
                    this.cliente.Nome = atualizaNome
                    console.log('Nome atualizado.');
                    break
                case 2:
                    let atualizaNomeSocial = this.entrada.receberTexto('Insira o novo nome social: ')
                    this.cliente.NomeSocial = atualizaNomeSocial
                    console.log('Nome social atualizado');
                    break
                case 3:
                    let atualizaDataNascimento = this.entrada.receberData('Insira a nova data de nascimento: ')
                    this.cliente.DataNascimento = atualizaDataNascimento
                    console.log('Data de nascimento atualizado');
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