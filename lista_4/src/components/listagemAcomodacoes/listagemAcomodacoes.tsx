import React, { useState, useEffect } from 'react';
import './listagemAcomodacoes.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ListagemAcomodacoes: React.FC = () =>{
    // --- Dados da Acomodação ---
    const [acomodacao,setAcomodacao] = useState([])
    // const [camaSolteiro,setCamaSolteiro] = useState(null)
    // const [camaCasal,setCamaCasal] = useState(null)
    // const [suite,setSuite] = useState(null)
    // const [climatizacao,setClimatizacao] = useState(null)
    // const [garagem,setGaragem] = useState(null)

    class ProductService {          
    
        getAcomodacoesSmall() {
            return fetch('data/listaAcomodacoes.json').then(res => res.json()).then(d => d.data);
        }
    }
    const productService = new ProductService();    

    useEffect(() => {
        productService.getAcomodacoesSmall().then(data => setAcomodacao(data));
    }, []); 

    return(
        <div className='accordion-demo menu-hospedagem"'>
            <div className="card menu-hospedagem">
            <h1>Listagem de Acomodações</h1>            
                <DataTable value={acomodacao} responsiveLayout="scroll">
                    <Column field="nomeAcomodacao" header="Nome Acomodação" sortable></Column>
                    <Column field="camaSolteiro" header="Cama Solteiro" sortable></Column>
                    <Column field="camaCasal" header="Cama Casal" sortable></Column>
                    <Column field="suite" header="Suite" sortable></Column>
                    <Column field="climatizacao" header="Climatização" sortable></Column>
                    <Column field="garagem" header="Garagem" sortable></Column>
                </DataTable>

            </div>
        </div>
    )

}
export default ListagemAcomodacoes