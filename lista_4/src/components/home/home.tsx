import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home: React.FC = () =>{
    return(        
        <div className="menu-principal">
        <h1>Atlantis Water Park </h1>
            <div className="collection home">
                <Link to={'menu-cliente'}className="collection-item pointer">Clientes</Link>
                <Link to={'/funcao3'}className="collection-item pointer">Função</Link>
                <Link to={'/menu-listagens'}className="collection-item pointer">Listagens</Link>
                <Link to={'/funcao4'}className="collection-item pointer">Função</Link>
                <Link to={'/funcao5'}className="collection-item pointer">Função</Link>                
            </div>
        </div>    
    )   
}
export default Home;