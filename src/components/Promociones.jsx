import './Promociones.css'
import logo from '../BlackWings.png';
import React from "react";
import  { useState } from "react";



const Input = () => {
  return  <Detalles />
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Detalles del producto</button>
      {inputList}
    </div>
  );
};



export function Promociones() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Promociones</p>
          <div className="Card-2">
          <Cart />
          <Cart />
          <Cart />
          </div>
          <br />
          <br />
          <br />
          <Busqueda />
        </header>
      </div>
    );
  }


const Cart = () =>{
  return (
  <div class="card">
    <img src={logo} className="App-logo" alt="logo"/>
    <h4>Producto</h4>
    <p class="price">$19.99</p>
    <p>Descipción, del producto con el detallado de ingredientes</p>
    <br />
    <Form />
    <p><button>Agregar al carro</button></p>
  </div>
  )
}

const Busqueda = () =>{
  return(
    <div>
      <fieldset>
        <legend>Sección de búsquedas</legend>
        <label for="idSearch">Buscador de productos</label>
        <input id="idSearch" type="search" name="nmSearch" placeholder="        Producto" aria-label="Buscar a través del contenido del sitio" list="idDataListAsociada" minlength="" maxlength="" pattern="[A-z]{2}[0-9]{4}" size="30"></input>
        <button className='Button-prom'>Buscar</button>
      </fieldset>
    </div>
  )
}

const Detalles = () =>{
  return (
    <div className='Detalles'>
    <h1>Detalles</h1>
    <p>Precio: $500.00</p>
    <p>Ingredientes: </p>

    </div>
  )
}
  export default Promociones;