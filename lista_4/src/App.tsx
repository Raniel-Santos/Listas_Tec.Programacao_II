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
import ListagemAcomodacoes from './components/listagemAcomodacoes/listagemAcomodacoes';
import CadastrarHospedagem from './components/cadastrarHospedagem/cadastrarHospedagem';
import ListagemHospedagem from './components/listagemHospedagem/listagemHospedagem';
import TitularInfo from './components/titularInfo/titularInfo';
import EditarTitular from './components/editarTitular/editarTitular';
import EditarDependente from './components/editarDependente/editarDependente';

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
              <Route path='listagem-hospedagem' element={<ListagemAcomodacoes/>}/>
              <Route path='listagem-hospedes' element={<ListagemHospedagem/>}/>
              <Route path='cadastrar-hospedagem' element={<CadastrarHospedagem/>}/>
              <Route path='novo-cliente' element={<NovoCliente/>}/>
              <Route path='novo-dependente' element={<NovoDependente/>}/>
              <Route path='titular-info' element={<TitularInfo/>}/>
              <Route path='editar-titular' element={<EditarTitular/>}/>
              <Route path='editar-dependente' element={<EditarDependente/>}/>
            </Routes>
          </BrowserRouter>        
      </div>
  );
}
}
export default App;
