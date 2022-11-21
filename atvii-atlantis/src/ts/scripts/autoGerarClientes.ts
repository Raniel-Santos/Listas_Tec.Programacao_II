import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class AutoGerarClientes extends Processo{
    private clientes!: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        autoListaClientes.forEach(cliente=>{
            let telefones:Telefone[], endereco:Endereco, documentos:Documento[]

            let dadosCliente = new Cliente(cliente.nome, cliente.nomeSocial, cliente.dataNascimento)

            telefones = cliente.telefones.map(telefone => { return new Telefone(telefone.ddd,telefone.numero) })
            endereco = new Endereco(
                cliente.endereco.rua,
                cliente.endereco.bairro,
                cliente.endereco.cidade,
                cliente.endereco.estado,
                cliente.endereco.pais,
                cliente.endereco.codigoPostal,
            )
            documentos = cliente.documentos.map(documento => { return new Documento(documento.numero, documento.tipo, documento.dataExpedicao) })

            dadosCliente.Telefones = telefones
            dadosCliente.Endereco = endereco
            dadosCliente.Documentos = documentos

            if(cliente.dependentes.length > 0){
                cliente.dependentes.forEach(dependente => { 
                    let novoDependente = new Cliente(dependente.nome,dependente.nomeSocial, dependente.dataNascimento)

                    let documentos = dependente.documentos.map( documento => {
                        return new Documento(documento.numero, documento.tipo, documento.dataExpedicao)
                    })
                    novoDependente.Documentos = documentos
                    novoDependente.Telefones = dadosCliente.Telefones.map(telefone => {
                        return telefone.clonar() as Telefone
                    }) || []
                    novoDependente.Endereco = dadosCliente.Endereco.clonar() as Endereco
                    novoDependente.Titular = dadosCliente
                    dadosCliente.Dependente = novoDependente
                    this.clientes.push(novoDependente)
                    
                })
            }

            this.clientes.push(dadosCliente)
        })

        console.log('Cadastro de clientes finalizados');

    }

}

const autoListaClientes = [
    {
        "nome":"Gerson Penha",
        "nomeSocial":"Torcedor do Remo",
        "dataNascimento": new Date(1950, 8 -1, 22),
        "telefones":[
            {
                "ddd": '(12)',
                "numero": "99178-9988"
            }
        ],
        "endereco":{
            "rua": "Rua da Fatec",
            "bairro": "Eugenho de Melo",
            "cidade": "São josé dos campos",
            "estado": "São Paulo",
            "pais": "Brasil",
            "codigoPostal": "12200-100"
        },
        "documentos":[
            {
                "numero":"123.444.555-66",
                "tipo": TipoDocumento.CPF,
                "dataExpedicao": new Date(2000, 3 -1, 5)
            }
        ],
        "dependentes":[
            {
                "nome":"Gerson Penha Jr.",
                "nomeSocial": "Gersinho",
                "dataNascimento": new Date(2012, 7 -1, 11),
                "documentos":[
                    {
                        "numero":"47.789.789-1",
                        "tipo": TipoDocumento.RG,
                        "dataExpedicao": new Date(2011, 11 -1, 11)
                    }
                ]
            }
        ],
        "titular": {}
    },

    {
        "nome":"Raniel",
        "nomeSocial":"AgroBoy",
        "dataNascimento": new Date(1993, 6 -1, 6),
        "telefones":[
            {
                "ddd": '(12)',
                "numero": "99103-9735"
            }
        ],
        "endereco":{
            "rua": "Rod. do Livro",
            "bairro": "Recanto do Sol",
            "cidade": "Caçapava",
            "estado": "São Paulo",
            "pais": "Brasil",
            "codigoPostal": "12200-100"
        },
        "documentos":[
            {
                "numero":"123.444.777-66",
                "tipo": TipoDocumento.CPF,
                "dataExpedicao": new Date(2000, 3 -1, 5)
            }
        ],
        "dependentes":[
            {
                "nome":"Raniel Junior.",
                "nomeSocial": "Raninho",
                "dataNascimento": new Date(2012, 7 -1, 11),
                "documentos":[
                    {
                        "numero":"48.789.789-1",
                        "tipo": TipoDocumento.RG,
                        "dataExpedicao": new Date(2011, 11 -1, 11)
                    }
                ]
            }
        ],
        "titular": {}
    }
]