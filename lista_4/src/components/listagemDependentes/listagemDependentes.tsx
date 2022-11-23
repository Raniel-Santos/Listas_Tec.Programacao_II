import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./listagemDependentes.css"

const ListagemDependente: React.FC = ()=>{
    const [dependentes, setDependentes] = useState([])

    class ProductService {          
    
        getDependentesSmall() {
            return fetch('data/listaDependentes.json').then(res => res.json()).then(d => d.data);
        }
    }
    const productService = new ProductService();

    useEffect(() => {
        productService.getDependentesSmall().then(data => setDependentes(data));
    }, []); 

    return(
        <div className='menu-listagem-dependente'>
            <div className="card">
                <h1>Dependentes</h1>
                <DataTable value={dependentes} responsiveLayout="scroll">
                    <Column field="nomeTitular" header="Titular" sortable></Column>
                    <Column field="nome" header="Nome" sortable></Column>
                    <Column field="documento" header="Documento" sortable></Column>
                    <Column field="dataNascimento" header="Data Nascimento" sortable></Column>
                </DataTable>
            </div>
        </div>
    )

}
export default ListagemDependente