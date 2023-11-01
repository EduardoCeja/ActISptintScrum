import './FormularioOrd.css'
import Select from './Select';
import RadioButton from './RadioButton';
import React, { Component } from "react";



class FormularioOrd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lista: []
    };
  }
  
  getDatos(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  enviarDatos = () => {
    fetch("https://localhost:44362/weatherforecast")
      .then((response) => response.json())
      .then((listaJson) => this.setState({ lista: listaJson }));

    //aqui enviaria el post al api
    console.log(this.state);
  };
   sendMessage = (e) => {
    e.preventDefault();
    alert('La orden se genero correctamente');
  };
  render() {
    const { email } = this.state;
    return (
      
      <form>
        <div id="div_inicio">
          <div>
            <label>Ingrese su nombre</label>

            <input
              onChange={(ev) => {
                this.getDatos(ev.target.value, "email");
              }}
              type="email"
              placeholder="ejemplo: Eduardo Ceja"
              //value={email}
            />
          </div>
          <div>
            <label>Ingrese su Domicilio</label>

            <input
              onChange={(ev) => {
                this.getDatos(ev.target.value, "email");
              }}
              type="email"
              placeholder="ejemplo: domicilio #123"
             // value={email}
            />
          </div>
          <div>
            <label>Notas para el pedido</label>

            <div>
   

            <input
              onChange={(ev) => {
                this.getDatos(ev.target.value, "email");
              }}
              type="email"
              placeholder="Notas: "
             // value={email}
            />
          </div>
            <hr></hr>
           <label >Forma de Pago</label>
          </div>
          
          <RadioButtonField />
          <hr />
          <SelectField />
          <input
            onClick={this.sendMessage}
            type="submit"
            value="Generar orden de Compra"
          />
          
        </div>
        <br />
        <br />
        <br />
        <br />
      </form>
    );
  }
}


const SelectField = () => {
  const [color, setColor] = React.useState("");

  return (
    <article>
      <form onSubmit={(event) => event.preventDefault()}>
        <Select
          value={color}
          setValue={setColor}
          options={["Envio por repartidor", "En sucursal"]}
        />
      </form>
    </article>
  );
};


const RadioButtonField = () => {
  const [color, setColor] = React.useState("");

  return (
    <article>
      <form  className='button' onSubmit={(event) => event.preventDefault()}>
        <RadioButton
          options={["Efectivo", "Tarjeta", "Puntos"]}
          value={color}
          setValue={setColor}
        />

      </form>
    </article>
  );
};






export default FormularioOrd;
