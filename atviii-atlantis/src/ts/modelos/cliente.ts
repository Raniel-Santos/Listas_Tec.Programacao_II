import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    // -- GET --
    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    // -- SET --
    public set Nome(nome:string) {this.nome = nome}
    public set NomeSocial(nomeSocial:string) {this.nomeSocial = nomeSocial}
    public set DataNascimento(dataNascimento:Date) {this.dataNascimento = dataNascimento}
    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Telefones(telefones: Telefone[]) {this.telefones = telefones}
    public set Documentos(documentos:Documento[]) {this.documentos = documentos}
    public set Titular(titular:Cliente) {this.titular = titular}
    public set Dependente(dependente:Cliente) {this.dependentes.push(dependente)}
}