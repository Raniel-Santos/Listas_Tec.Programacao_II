import React from "react";
import { Link } from "react-router-dom";
import "./menuCliente.css"

const MenuCliente: React.FC = () =>{
    return(
        <div className="menu-cliente">
        <h1>Cadastro de Clientes </h1>
            <div className="collection home">
                <Link to={'/novo-cliente'}className="collection-item pointer">Novo Cliente</Link>
                <Link to={'/funcao3'}className="collection-item pointer">Listagem de Todos os Clientes</Link>  
            </div>
        </div>    
    )
}
export default MenuCliente;