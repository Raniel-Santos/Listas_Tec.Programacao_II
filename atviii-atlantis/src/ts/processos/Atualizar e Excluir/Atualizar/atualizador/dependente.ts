import Armazem from "../../../../dominio/armazem";
import Atualizador from "../../../../modelos/atualizador";
import Cliente from "../../../../modelos/cliente";

export default class AtualizadorDependente implements Atualizador{
    private dependente!: Cliente
    private clientes!: Cliente[]
    private titular!: Cliente

    constructor(dependente: Cliente){
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.dependente = dependente
    }

    atualizar(): void {
        this.titular = this.dependente.Titular

        let docDependentes: any = []
        this.dependente.Documentos.forEach(documento => {
            docDependentes.push({numero: documento.Numero})
        })

        for (let index = 0; index < docDependentes.length; index++) {
            let indiceListaDependentes = -1
            this.titular.Dependentes.forEach((dependente, i) => {
                dependente.Documentos.forEach(documento => {
                    if(documento.Numero === docDependentes[index].numero){
                        indiceListaDependentes = i
                    }
                });
            })

            if(indiceListaDependentes != -1){
                this.titular.Dependentes.splice(indiceListaDependentes, 1,this.dependente)
                this.dependente.Titular = this.titular
            }
        }
    }
}