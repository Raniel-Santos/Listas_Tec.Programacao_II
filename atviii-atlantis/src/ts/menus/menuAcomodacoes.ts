import Menu from "../interfaces/menu";

export default class MenuAcomodacoes implements Menu{
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Tipos de Acomodações: `)
        console.log(`----------------------`)
        console.log(`| 1 - Acomodação Casal Simples`)
        console.log(`| 2 - Acomodação Familia Simples`)
        console.log(`| 3 - Acomodação Familia Mais`)
        console.log(`| 4 - Acomodação Familia Super`)
        console.log(`| 5 - Acomodação Solteiro Simples`)
        console.log(`| 6 - Acomodação Solteiro Mais`)
        console.log(`----------------------`)
    }
}