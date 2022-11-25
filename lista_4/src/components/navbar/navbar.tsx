import React from "react";
import {Menubar} from "primereact/menubar"
import "./navbar.css"
import { Navigate, useNavigate } from "react-router-dom";
import Atlantis from "../../img/logo_atlantis.png"

const Navbar: React.FC = (props) =>{
  const navigate = useNavigate();
    // --- Botões Navbar ---
    const itemsNavbar = [
        {
          label: "Home",
          command: (event: any) => {
          navigate("/");
          },
        },
        {
          label: "Clientes",
          command: (event: any) => {
          navigate("/menu-cliente");
          },
        },
        {
          label: "Hospedagens",
          command: (event: any) => {
          navigate("/menu-hospedagens");
          },
        },
        {
          label: "Listagens",
          command: (event: any) => {
          navigate("/menu-listagens");
          },
        }        
      ];
    // --- Logo Atlantis ---
    const end = (
      <a href="/">
        <img
          alt="logo"
          src={Atlantis}
          onError={(e) =>"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}
          height="60"
          className="mr-2"
        ></img>
      </a>
    );    
    // --- Função Navegar ---
    const navegar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
    return (
      <div>
        <div className="card">
          <Menubar start={end} onClick={(e) => navegar(e)} model={itemsNavbar} />
        </div>
      </div>
    );
};
export default Navbar;
