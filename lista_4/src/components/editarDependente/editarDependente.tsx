import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './editarDependente.css'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

const EditarDependente: React.FC = () =>{
    // --- Documento do Titular ---
    const [nomeTitular,setNomeTitular] = useState('')
    const [documentoTitular,setDocumentoTitular] = useState(null)

    // --- Documento do Titular ---
    const [documentoDependente,setDocumentoDependente] = useState(null)
    const [docSelecionado, setdocSelecionado] = useState<any>(null);
    const docs = [
        { tipo: 'RG', code: 'NY' },
        { tipo: 'CPF', code: 'RM' },
        { tipo: 'PASSAPORTE', code: 'LDN' }
    ]
    const tipoDoc= (e: { value: any}) => {
        setdocSelecionado(e.value);
    }

    // --- Dependentes ---
    const [nomeDependente, setNomeDependente] = useState('');
    const [nomeSocialDependente, setNomeSocialDependente] = useState('')
    const [dataNascimentoDependente, setdataNascimentoDependente] = useState<string|undefined>()

    return(
        <div className="accordion-demo menu-editar-dependente">
            <h1>Editar Dependente</h1>
            <div className='card'>
                <Accordion className="accordion-custom" activeIndex={3}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-id-card"></i><span>Dados do Titular</span></React.Fragment>}>
                        <span className="dados-pessoais-dependentes">
                            <InputText className='dados-pessoais-dependentes'placeholder='Nome do Titular' value={nomeTitular} onChange={(e) => setNomeTitular(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais-dependentes">
                            <InputNumber className='dados-pessoais-dependentes numero' placeholder='Número do Documento' value={documentoTitular}  />                           
                        </span>
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={3}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-user"></i><span>Dados Pessoais</span></React.Fragment>}>
                        <span className="dados-pessoais-dependentes">
                            <InputText className='dados-pessoais-dependentes'placeholder='Nome Dependente' value={nomeDependente} onChange={(e) => setNomeDependente(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais-dependentes">
                            <InputText className='dados-pessoais-dependentes'placeholder='Nome Social' value={nomeSocialDependente} onChange={(e) => setNomeSocialDependente(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais-dependentes">
                            <InputMask className='dados-pessoais-dependentes' mask="99/99/9999" value={dataNascimentoDependente} placeholder="Data Nascimento" onChange={(e) => setdataNascimentoDependente(e.value)}></InputMask>                           
                        </span>
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={2}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-copy"></i><span>Documentos</span></React.Fragment>}>
                        <Dropdown className='dados-pessoais-dependentes' value={docSelecionado} options={docs} onChange={tipoDoc} optionLabel="tipo" placeholder="Tipo de Documento" />
                        <span className="dados-pessoais-dependentes">                            
                            <InputNumber className='dados-pessoais-dependentes numero' placeholder='Número do Documento' value={documentoDependente}  />                        
                        </span>
                    </AccordionTab>
                </Accordion>  

                <div className="button-demo btn-cadastro-dependente">
                    <Button label="Salvar Alterações" icon="pi pi-check" />              
                </div>    
            </div>
        </div>
    )
}
export default EditarDependente