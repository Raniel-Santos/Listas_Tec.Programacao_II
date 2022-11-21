import Diretor from "../../abstracoes/diretor";
import Processo from "../../abstracoes/processo";
import Acomodacao from "../../modelos/acomodacao";
import Armazem from "../../dominio/armazem";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";

export default class CadastroDeAcomodacoes extends Processo{
    private acomodacoes: Acomodacao[]
    private diretor!: Diretor<Acomodacao>

    constructor(){
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void{
        // -- Casal Simples --
        this.diretor = new DiretorCasalSimples()
        this.acomodacoes.push(this.diretor.construir())
        // -- Familia Simples --
        this.diretor = new DiretorFamiliaSimples()
        this.acomodacoes.push(this.diretor.construir())
        // -- Familia Mais--
        this.diretor = new DiretorFamiliaMais()
        this.acomodacoes.push(this.diretor.construir())
        // -- Familia Super--
        this.diretor = new DiretorFamiliaSuper()
        this.acomodacoes.push(this.diretor.construir())
        // -- Solteiro Simples --
        this.diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(this.diretor.construir())
        // -- Solteiro Mais --
        this.diretor = new DiretorSolteiroMais()
        this.acomodacoes.push(this.diretor.construir())
    }
}