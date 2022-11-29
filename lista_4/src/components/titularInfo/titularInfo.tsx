import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './titularInfo.css'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const TitularInfo: React.FC = () =>{

    return(
        <div className="accordion-demo menu-visualizartitular">
            <h1>Informações do Titular</h1>
            <div className="card">
                <Accordion className="accordion-custom" activeIndex={0}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-user"></i><span>Dados Pessoais</span></React.Fragment>}>
                    <DataTable className='tabela' responsiveLayout="scroll">
                        <Column field="nome" header="Nome"></Column>
                        <Column field="nomeSocial" header="Nome Social"></Column>
                        <Column field="documento" header="Documento"></Column>
                        <Column field="dataCadastro" header="Data Cadastro"></Column>
                        <Column field="Celular" header="Celular"></Column>
                        <Column field="Residencial" header="Tel.Residencial"></Column>
                    </DataTable>
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={1}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-map"></i><span>Endereço</span></React.Fragment>}>
                    <DataTable className='tabela' responsiveLayout='scroll'>
                        <Column field="pais" header="País"></Column>
                        <Column field="estado" header="Estado"></Column>
                        <Column field="cidade" header="Cidade"></Column>
                        <Column field="bairro" header="Bairro"></Column>
                        <Column field="rua" header="Rua"></Column>
                        <Column field="codigoPostal" header="Código Postal"></Column>
                        </DataTable>
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={2}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-copy"></i><span>Documentos</span></React.Fragment>}>
                    <DataTable className='tabela' responsiveLayout='scroll'>
                        <Column field="tipo" header="Tipo de Documento"></Column>
                        <Column field="numero" header="Número"></Column>
                        </DataTable>                   
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={2}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-sitemap"></i><span>Dependentes</span></React.Fragment>}>
                    <DataTable className='tabela' responsiveLayout="scroll">
                        <Column field="nome" header="Nome"></Column>
                        <Column field="documento" header="Documento"></Column>
                        <Column field="dataNascimento" header="Data Nascimento"></Column>
                    </DataTable>            
                    </AccordionTab>
                </Accordion>                   

            </div>

                
        </div>           
    )
}
export default TitularInfo