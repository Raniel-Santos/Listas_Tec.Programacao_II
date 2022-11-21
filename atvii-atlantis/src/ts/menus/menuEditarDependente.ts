import Menu from "../interfaces/menu"

export default class EditarDadosDependente implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Escolha o que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Dados do Dependente`)
        console.log(`| 2 - Documentos`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}