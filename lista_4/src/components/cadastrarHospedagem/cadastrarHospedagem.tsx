import React, { useState } from 'react';
import './cadastrarHospedagem.css'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

const CadastrarHospedagem: React.FC = () =>{

    // --- Hospedagem ---
    const [documento,setDocumento] = useState(null)

    const [selecionadoAcomodacao, setSelecionadoAcomodacao] = useState<any>(null)
    const acomodacoes = [
        { acomodacao: 'Casal Simples'},
        { acomodacao: 'Familia Simples'},
        { acomodacao: 'Familia Mais'},
        { acomodacao: 'Familia Super'},
        { acomodacao: 'Solteiro Simples'},
        { acomodacao: 'Solteiro Mais'}
    ]
    const tipoAcomodacao= (e: { value: any}) => {
        setSelecionadoAcomodacao(e.value);
    }

    return(
        <div className=' menu-hospedagem'>
            <h1>Registrar Hóspede</h1>
            <div className='field campos-hospedagem1'>
                <span className="dados-hospedagem">                            
                    <InputNumber className='dados-hospedagem numero' placeholder='Número do documento do Titular' value={documento}/>                        
                </span>
            </div>
            <div className='dropdown-demo field campos-hospedagem'>
                <span className="dados-hospedagem">                    
                    <Dropdown className='dados-hospedagem' value={selecionadoAcomodacao} options={acomodacoes} onChange={tipoAcomodacao} optionLabel="acomodacao" placeholder="Escolha a Acomodação" />
                </span>
            </div>
            <div className="button-demo btn-cadastro-hospedagem">
                <Button label="Registrar Hóspede" icon="pi pi-check" />              
            </div>    
        </div>
    )
}
export default CadastrarHospedagem