import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './novoCliente.css'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

const NovoCliente: React.FC = () =>{

    // --- Dados Pessoais ---
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('')
    const [dataNascimento, setdataNascimento] = useState<string|undefined>()
    const [dataCadastro, setdataCadastro] = useState<string|undefined>()
    const [telefones, setTelefones] = useState<string|undefined>()

    // --- Endereço ---
    const [pais, setPais] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')   
    const [cep,setCep] = useState<string|undefined>()

    // --- Documentos ---
    const [documento,setDocumento] = useState(null)
    const [docSelecionado, setDocSelecionado] = useState<any>(null);
    const docs = [
        { tipo: 'RG' },
        { tipo: 'CPF' },
        { tipo: 'PASSAPORTE' }
    ]
    const tipoDoc= (e: { value: any}) => {
        setDocSelecionado(e.value);
    }

    return(
        <div className="accordion-demo menu-novo-cliente">
            <h1>Novo Cliente</h1>
            <div className="card">
                <Accordion className="accordion-custom" activeIndex={0}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-user"></i><span>Dados Pessoais</span></React.Fragment>}>
                        <span className="dados-pessoais">
                            <InputText className='dados-pessoais'placeholder='Nome Completo' value={nome} onChange={(e) => setNome(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                            <InputText className='dados-pessoais'placeholder='Nome Social' value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                            <InputMask className='dados-pessoais' mask="99/99/9999" value={dataNascimento} placeholder="Data Nascimento" onChange={(e) => setdataNascimento(e.value)}></InputMask>                           
                        </span>
                        <span className="dados-pessoais">
                            <InputMask className='dados-pessoais' mask="99/99/9999" value={dataCadastro} placeholder="Data Cadastro"  onChange={(e) => setdataCadastro(e.value)}></InputMask>                           
                        </span>
                        <span className="dados-pessoais">
                            <InputMask className='dados-pessoais' mask="(99) 99999-9999" value={telefones} placeholder="Telefone Celular"></InputMask>                           
                        </span>
                        <span className="dados-pessoais">
                            <InputMask className='dados-pessoais' mask="(99) 99999-9999" value={telefones} placeholder="Telefone Residencial"></InputMask>                           
                        </span>
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={1}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-map"></i><span>Endereço</span></React.Fragment>}>
                        <span className="dados-pessoais">
                                <InputText className='dados-pessoais'placeholder='País' value={pais} onChange={(e) => setPais(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                                <InputText className='dados-pessoais'placeholder='Estado' value={estado} onChange={(e) => setEstado(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                                <InputText className='dados-pessoais'placeholder='Cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                                <InputText className='dados-pessoais'placeholder='Bairro' value={bairro} onChange={(e) => setBairro(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                                <InputText className='dados-pessoais'placeholder='Rua' value={rua} onChange={(e) => setRua(e.target.value)} />                           
                        </span>
                        <span className="dados-pessoais">
                            <InputMask className='dados-pessoais' mask="99.999-999" value={cep} placeholder="Código Postal"></InputMask>                      
                        </span>
                    </AccordionTab>
                </Accordion>

                <Accordion className="accordion-custom" activeIndex={2}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-copy"></i><span>Documentos</span></React.Fragment>}>
                        <Dropdown className='dropdown-demo dados-pessoais' value={docSelecionado} options={docs} onChange={tipoDoc} optionLabel="tipo" placeholder="Tipo de Documento" />
                        <span className="dados-pessoais">                            
                            <InputNumber className='dados-pessoais numero' placeholder='Número do Documento' value={documento}  />                        
                        </span>
                    </AccordionTab>
                </Accordion>            

            </div>

                <div className="button-demo btn-cadastro">
                    <Button label="Cadastrar Cliente" icon="pi pi-check" />              
                </div>
        </div>                
    )
}

export default NovoCliente;