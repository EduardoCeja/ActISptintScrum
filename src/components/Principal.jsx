import "./Principal.css"
import React from "react";
import logo from '../BlackWings.png';

export function Principal() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <p>Datos de la empresa:</p>
          <p>Dirección: C. Ramón Castellanos 828</p>
          <p>Horario Sabados: 19:00 p.m. a 23:00 p.m. </p>
          <p>Telefono: 33-1173-3 </p>
        </header>
      </div>
    );
  }

  export default Principal;