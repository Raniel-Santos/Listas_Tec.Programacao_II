import Menu from "../interfaces/menu"

export default class MenuEditarTitular implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Opçoes de edição do Titular: `)
        console.log(`----------------------`)
        console.log(`| 1 - Dados do Cliente`)
        console.log(`| 2 - Telefones`)
        console.log(`| 3 - Endereço`)
        console.log(`| 4 - Documentos`);
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}