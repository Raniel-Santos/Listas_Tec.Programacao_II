import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Import dos Componentes
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import MenuCliente from './components/menuCliente/menuCliente'
import NovoCliente from './components/novoCliente/novoCliente'
import NovoDependente from './components/novoDependente/novoDependente'
import MenuListagens from './components/menuListagens/menuListagens';
import ListagemTitular from './components/listagemTitular/listagemTitular';
import ListagemDependente from './components/listagemDependentes/listagemDependentes';

// Função App() {
  type state = {
    tela: string
  }

  class App extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
      super(props)
      this.state = {
        tela: ''
      }
      this.selecionarTela = this.selecionarTela.bind(this)
    }
  
    selecionarTela(opcao: string, evento: { preventDefault: () => void; }) {
      console.log('ta clicando....');
      evento.preventDefault()
      this.setState({
        tela: opcao
      })
    }

  render(){    
    return(
      <div>        
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='menu-cliente' element={<MenuCliente/>}/>
              <Route path='menu-listagens' element={<MenuListagens/>}/>
              <Route path='listagem-dependente' element={<ListagemDependente/>}/>
              <Route path='listagem-titular' element={<ListagemTitular/>}/>
              <Route path='novo-cliente' element={<NovoCliente/>}/>
              <Route path='novo-dependente' element={<NovoDependente/>}/>
            </Routes>
          </BrowserRouter>        
      </div>
  );
}
}
export default App;
