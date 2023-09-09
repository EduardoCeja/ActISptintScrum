import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Promociones } from './components/Promociones'
//import { Principal } from './components/Principal'
import Principal from './components/Principal'
import Promociones from './components/Promociones'
import Layout from "./components/Layout";
import Contact from "./components/Contact";
//import { useState } from 'react';
import './App.css';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Principal />}/>
              <Route path="Promociones" element={<Promociones />}/>
              <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
