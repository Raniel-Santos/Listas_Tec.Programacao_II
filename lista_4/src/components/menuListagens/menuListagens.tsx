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
            </div>
        </div>    
    )
}
export default MenuListagens;