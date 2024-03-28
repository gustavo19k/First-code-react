import React from 'react';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Menubar} from 'primereact/menubar';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './pages/About/About';
import Contato from './pages/Contact/Contact';

function App() {
  const navigate = useNavigate();
  const menuitems = [
    {
       label:'Home',
       icon:'pi pi-fw pi-home',
       command:() => navigate('/')
    },
    {
       label:'Sobre',
       icon:'pi pi-fw pi-user',
       command:() => navigate('/sobre')
    },
    {
       label:'Contato',
       icon:'pi pi-fw pi-comment',
       command:() => navigate('/contato')
    }
 ];
  return (
    <div className="App">
      <Menubar model={menuitems}/>
      <Header/>
      <Footer/>
      <div id="main">
          <main>
              <div className="content" id="content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sobre" element={<Sobre />} />
                      <Route path="/contato" element={<Contato />} />
                  </Routes>
              </div>
          </main>
      </div>
    </div>
  );
}

export default App;
