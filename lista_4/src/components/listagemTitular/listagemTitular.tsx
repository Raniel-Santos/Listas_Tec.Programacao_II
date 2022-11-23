import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./listagemTitular.css"

const ListagemTitular: React.FC = () =>{
    const [titulares, setTitulares] = useState([]);

    class ProductService {          
    
        getTitularesSmall() {
            return fetch('data/listaTitulares.json').then(res => res.json()).then(d => d.data);
        }
    }
    const productService = new ProductService();    

    useEffect(() => {
        productService.getTitularesSmall().then(data => setTitulares(data));
    }, []); 

    return(
        <div className='menu-listagem'>
            <div className="card">
                <h1>Clientes Titulares</h1>
                <DataTable value={titulares} responsiveLayout="scroll">
                    <Column field="nome" header="Nome" sortable></Column>
                    <Column field="nomeSocial" header="Nome Social" sortable></Column>
                    <Column field="documento" header="Documento" sortable></Column>
                    <Column field="dataNascimento" header="Data Nascimento" sortable></Column>
                </DataTable>
            </div>
        </div>
    )
}
export default ListagemTitular