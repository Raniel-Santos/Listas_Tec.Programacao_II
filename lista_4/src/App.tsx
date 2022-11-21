import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Import dos Componentes
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import MenuCliente from './components/menuCliente/menuCliente'
import NovoCliente from './components/novoCliente/novoCliente'

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
              <Route path='novo-cliente' element={<NovoCliente/>}/>
            </Routes>
          </BrowserRouter>        
      </div>
  );
}
}
export default App;
