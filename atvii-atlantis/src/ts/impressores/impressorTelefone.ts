import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";

export default class ImpTelefone implements Impressor{
    private telefone: Telefone
    constructor(telefone: Telefone){
        this.telefone = telefone
    }

// -- Implementando o Impressor --
    imprimir(): string {
        let impressao = `| Telefone:\n`
            +`| DDD: ${this.telefone.Ddd}\n`
            +`| Número: ${this.telefone.Numero}`
        return impressao
    }
}