import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Componentes/login';
import Create from './Componentes/Create';
import FPass from './Componentes/FPass';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from "./Componentes/Dashboard";
import Promocion from "./Componentes/Promocion";
import Hombre from './Componentes/Hombre';
import Mujer from './Componentes/Mujer';
import Ninos from './Componentes/Ninos';
import Contact from "./Componentes/Contact";
import Admin from './Componentes/Admin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Registrarse" element={<Create />} />
        <Route path="/Actualizar" element={<FPass/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/promocion" element={<Promocion/>}/>
        <Route path="/hombre" element={<Hombre/>}/>
        <Route path="/mujer" element={<Mujer/>}/>
        <Route path="/ninos" element={<Ninos/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
