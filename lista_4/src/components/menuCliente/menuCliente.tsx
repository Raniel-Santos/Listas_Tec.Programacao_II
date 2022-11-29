import React from "react";
import { Link } from "react-router-dom";
import "./menuCliente.css"

const MenuCliente: React.FC = () =>{
    return(
        <div className="menu-cliente">
        <h1>Cadastro de Clientes </h1>
            <div className="collection home">
                <Link to={'/novo-cliente'}className="collection-item pointer">Cadastrar Cliente Titular</Link>
                <Link to={'/novo-dependente'}className="collection-item pointer">Cadastrar Dependente</Link>  
                <Link to={'/listagem-titular'}className="collection-item pointer">Editar Titular</Link>
                <Link to={'/listagem-dependente'}className="collection-item pointer">Editar Dependente</Link>   
            </div>
        </div>    
    )
}
export default MenuCliente;