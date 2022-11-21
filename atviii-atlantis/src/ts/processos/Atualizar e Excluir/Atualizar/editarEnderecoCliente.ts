import Processo from "../../../abstracoes/processo"
import EditarEndereco from "../../../menus/menuEditarEndereco"
import Cliente from "../../../modelos/cliente"
import Endereco from "../../../modelos/endereco"

export default class EditarEnderecoCliente extends Processo{
    private cliente!:Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new EditarEndereco()
        this.execucao = true
    }

    processar(): void {
        while(this.execucao){
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada atualizar?')

            switch(this.opcao){
                case 1:
                    let atualizaRua = this.entrada.receberTexto('Insira a nova rua: ')
                    this.cliente.Endereco.Rua = atualizaRua
                    break
                case 2:
                    let atualizaBairro = this.entrada.receberTexto('Insira o novo bairro: ')
                    this.cliente.Endereco.Bairro = atualizaBairro
                    break
                case 3:
                    let atualizaCidade = this.entrada.receberTexto('Insira a nova cidade: ')
                    this.cliente.Endereco.Cidade = atualizaCidade
                    break
                case 4:
                    let atualizaEstado = this.entrada.receberTexto('Insira o novo estado: ')
                    this.cliente.Endereco.Estado = atualizaEstado
                    break
                case 5:
                    let atualizaPais = this.entrada.receberTexto('Insira o novo pais: ')
                    this.cliente.Endereco.Pais = atualizaPais
                    break
                case 6:
                    let atualizaCep = this.entrada.receberTexto('Insira o novo cep: ')
                    this.cliente.Endereco.CodigoPostal = atualizaCep
                    break
                case 0:
                    this.cliente.Dependentes.forEach(dependente => {
                        dependente.Endereco = this.cliente.Endereco.clonar() as Endereco})
                    this.execucao = false
                    break
                default:
                    console.log('Operação não entendida.');
            }
        }
    }
    
}