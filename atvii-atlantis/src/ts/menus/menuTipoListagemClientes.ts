import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Todos os dependentes`)
        console.log(`| 3 - Titular de um Dependente`)
        console.log(`| 4 - Dependentes do Titular`)
        console.log(`----------------------`)
    }
}