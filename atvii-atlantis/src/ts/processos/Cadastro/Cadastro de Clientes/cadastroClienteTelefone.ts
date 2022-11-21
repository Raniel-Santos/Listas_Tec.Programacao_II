import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Telefone from "../../../modelos/telefone";

export default class ClienteTelefone extends Processo{
    private cliente!: Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.execucao = true
    }
    processar(): void {
        while(this.execucao){
            let opcoes = this.entrada.receberTexto('Cadastrar Telefone? [SIM/NAO].')
            
            if (opcoes === 'SIM' || opcoes === 'sim' || opcoes === 's'){
                let dddNumero = this.entrada.receberTexto(`Insira o DDD e o telefone (xx) xxxxx-xxxx`)
                let separar = dddNumero.split(')')
                let dadosNum = separar[0] + ")-" + separar [1]
                let numeroComddd = dadosNum.split("-")

                let ddd = new String(numeroComddd[0].valueOf()).valueOf()
                let numero = new String(numeroComddd[1].valueOf()).valueOf()
                let telefone = new Telefone(ddd,numero)
                this.cliente.Telefones.push(telefone)
            } else {
                this.execucao = false
            }
        }
    }
}