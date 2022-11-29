import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./listagemDependentes.css"
import { Navigate, useNavigate } from 'react-router';
import { Button } from 'primereact/button';

const ListagemDependente: React.FC = ()=>{
    const [dependentes, setDependentes] = useState([])
    const navigate = useNavigate();

    class ProductService {          
    
        getDependentesSmall() {
            return fetch('data/listaDependentes.json').then(res => res.json()).then(d => d.data);
        }
    }
    const productService = new ProductService();

    const editarDependente = () =>{
        navigate('/editar-dependente')
    }

    const actionBodyTemplate = () => {
        return (
            <React.Fragment>               
                <Button
                    icon="pi pi-pencil" 
                    className="p-button-rounded p-button-outlined p-button-info " 
                    onClick={editarDependente}
                    tooltip='Editar Dependente' tooltipOptions={{position: 'top'}}
                />
                <Button
                    icon="pi pi-times" 
                    className="p-button-rounded p-button-outlined p-button-danger" 
                    tooltip='Deletar Dependente' tooltipOptions={{position: 'top'}}
                />  
            </React.Fragment>
        );
    }

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
                    <Column body={actionBodyTemplate} header='Opções'exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>
        </div>
    )

}
export default ListagemDependente