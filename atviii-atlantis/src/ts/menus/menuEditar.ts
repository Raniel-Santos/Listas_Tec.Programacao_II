import Menu from "../interfaces/menu";

export default class MenuEditarPrincipal implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Escolha quem você deseja atualizar: `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------`)
    }
}