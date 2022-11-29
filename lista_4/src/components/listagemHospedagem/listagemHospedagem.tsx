import React, { useState, useEffect } from 'react';
import './listagemHospedagem.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Navigate, useNavigate } from 'react-router';


const ListagemHospedagem: React.FC = () =>{
    const [hospedes, setHospedes] = useState([])
    const navigate = useNavigate();

    class ProductService {        
    
        getHospedesSmall() {
            return fetch('data/listaHospedes.json').then(res => res.json()).then(d => d.data);
        }
    }
    const productService = new ProductService(); 

    const visualizarHospede = () =>{
        navigate('/titular-info')
    }
    
    const actionBodyTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-user" 
                    className="p-button-rounded p-button-outlined " 
                    onClick={visualizarHospede}
                    tooltip='Visualizar Hóspede' tooltipOptions={{position: 'top'}}/> 
            </React.Fragment>
        );
    }

    useEffect(() => {
        productService.getHospedesSmall().then(data => setHospedes(data));
    }, []); 
    
    return(
        <div className='menu-hospede'>
            <div className='card'>
                <h1>Listagem de Hóspedes</h1>
                <DataTable value={hospedes} responsiveLayout="scroll">
                    <Column field="nomeAcomodacao" header="Acomodação" sortable></Column>
                    <Column field="nomeTitular" header="Hóspede (titular)" sortable></Column>
                    <Column field="documento" header="Documento" sortable></Column>
                    <Column field="dataEntrada" header="Data Cadastro" sortable></Column>
                    <Column body={actionBodyTemplate} header=''exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>

        </div>
    )
}
export default ListagemHospedagem