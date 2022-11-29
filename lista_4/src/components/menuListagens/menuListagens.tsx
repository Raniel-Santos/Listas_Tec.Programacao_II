import React from "react";
import { Link } from "react-router-dom";
import "./menuListagens.css"

const MenuListagens: React.FC = () =>{
    return(
        <div className="menu-listagens">
        <h1>Listagens</h1>
            <div className="collection home">
                <Link to={'/listagem-titular'}className="collection-item pointer">Listagem Titulares</Link>
                <Link to={'/listagem-dependente'}className="collection-item pointer">Listagem Dependentes</Link>
                <Link to={'/listagem-hospedagem'} className="collection-item pointer">Listagem de Acomodações</Link>
                <Link to={'/listagem-hospedes'} className="collection-item pointer">Listagem de Hóspedes</Link>
            </div>
        </div>    
    )
}
export default MenuListagens;