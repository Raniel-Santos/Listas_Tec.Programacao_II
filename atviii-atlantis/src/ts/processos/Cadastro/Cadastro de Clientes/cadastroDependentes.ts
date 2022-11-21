import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import Telefone from "../../../modelos/telefone";
import Endereco from "../../../modelos/endereco";
import CadastrarDocumentosCliente from "../Cadastro de Documentos/cadastrarDocumentosCliente";
import ListagemTitulares from "../../Listagens/listagemTitulares";



export default class CadastrarDependente extends Processo{
    private dependente!: Cliente
    private clientes: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.execucao = true
    }

    processar(): void {
        this.processo = new ListagemTitulares()
        this.processo.processar()

        // -- Pesquisa de Titular pelo Documento --
        let docTitular = this.entrada.receberTexto ('Insira o número do documento do Titular: ')
        let titular = this.clientes.find((cliente:Cliente) => cliente.Documentos.find(documento=> documento.Numero === docTitular))

        if(!titular){
            console.log(`Número do documento de titular inválido/não encontrado...`)
        }else{            
            // -- Cadastro do Dependente --
            while(this.execucao){                 
                let opcoes = this.entrada.receberTexto('Cadastro de Dependente. Digite SIM para cadastrar um dependente ou NAO para finalizar')
            
                if (opcoes === 'SIM' || opcoes === 'sim' || opcoes === 's'){
                    console.log('Iniciando o cadastro do Dependente');   
                    let nomeDependente = this.entrada.receberTexto('Insira o nome do Dependente: ')
                    let nomeSocialDependente = this.entrada.receberTexto('Insira o nome social do dependente: ')
                    let dataNascimento = this.entrada.receberData('Insira a data de nascimento do dependente: ')
                    
                    this.dependente = new Cliente(nomeDependente, nomeSocialDependente, dataNascimento)

                    this.processo = new CadastrarDocumentosCliente(this.dependente)
                    this.processo.processar()

                    this.dependente.Endereco = titular?.Endereco.clonar() as Endereco
                    this.dependente.Telefones = titular?.Telefones.map(telefone =>{return telefone.clonar()as Telefone}) || []
                    this.dependente.Titular = titular

                    titular.Dependente = this.dependente
                    this.clientes.push(this.dependente)
                
                } else {
                    this.execucao = false
                    console.log('Cadastro de Dependentes Finalizado...')
                }
            }                
        }
    }
}
