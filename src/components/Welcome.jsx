import React from "react";
import './Welcome.css'
import logo from '../BlackWings.png';
class Welcome  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Bienvenido colaborador: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      
      <form onSubmit={this.handleSubmit} className="Formulario">
      <div>
      <h1>Pagina para colaboradores</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Inicio de sesión </h1>
        <label>
          Name:
          <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          placeholder="Usuario"
          />
        </label>
        <label>
          
          <input 
          type="password" 
          className="textC"
          //value={this.state.value} 
          //onChange={this.handleChange} 
          placeholder="Contraseña"
          />
        </label>
        <p>Crear nuevo usuario</p>
        <input type="submit" value="Inicio de sesión" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    );
  }
}

export default Welcome