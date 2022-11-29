import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./listagemTitular.css"
import { Navigate, useNavigate } from 'react-router';
import { Button } from 'primereact/button';

const ListagemTitular: React.FC = () =>{
    const [titulares, setTitulares] = useState([]);
    const navigate = useNavigate();

    class ProductService {          
    
        getTitularesSmall() {
            return fetch('data/listaTitulares.json').then(res => res.json()).then(d => d.data);
        }
    }
    const productService = new ProductService();
    
    const visualizarHospede = () =>{
        navigate('/titular-info')
    }

    const editarTitular = () =>{
        navigate('/editar-titular')
    }

    const actionBodyTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-user" 
                    className="p-button-rounded p-button-outlined p-button-info" 
                    onClick={visualizarHospede}
                    tooltip='Visualizar Hóspede' tooltipOptions={{position: 'top'}}
                /> 
                <Button
                    icon="pi pi-pencil" 
                    className="p-button-rounded p-button-outlined p-button-info " 
                    onClick={editarTitular}
                    tooltip='Editar Titular' tooltipOptions={{position: 'top'}}
                />
                <Button
                    icon="pi pi-times" 
                    className="p-button-rounded p-button-outlined p-button-danger" 
                    
                    tooltip='Deletar Titular' tooltipOptions={{position: 'top'}}
                />  
            </React.Fragment>
        );
    }

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
                    <Column body={actionBodyTemplate} header='Opções'exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}
export default ListagemTitular