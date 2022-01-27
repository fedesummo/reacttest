import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// Renderizo contenido desde una variable.
let helloWorld = ( <h1>Hello World!</h1> );
ReactDOM.render( helloWorld, document.getElementById('root') );

// Renderizo contenido desde un componente (función).
// Recordar que los componentes deben empezar con mayuscula.
function HelloWorld() {
  return ( <h1>Hello World!</h1> );
};
// Los componentes se usan con <.../>, ingresando el nombre del mismo.
ReactDOM.render( <HelloWorld/>, document.getElementById('root') );

// Creo un componente que requiera un argumento.
// El argumento es un objeto y no pueden cambiarse sus propiedades dentro de un componente.
function Saludo(argumento) {
  return ( <h1>Bienvenido {argumento.nombre}</h1> );
};
// Utilizo el componente llamando a la función.
//ReactDOM.render( Saludo( {nombre: 'Federico'} ), document.getElementById('root') );
// Utilizo el componente utilizando la etiqueta.
ReactDOM.render( <Saludo nombre="Federico"/>, document.getElementById('root') );

// Puedo utilizar un componente dentro de otro utilizando la etiqueta.
// Como estándar, si el argumento es un objeto se lo pasa como "props".
function Despedida(props) {
  return (
    <>
      <Saludo nombre={props.nombre}/>
      <h2>Vuelve pronto {props.nombre}</h2>
    </>
  );
};
ReactDOM.render( <Despedida nombre="Federico"/>, document.getElementById('root') );

// Dentro del componente puedo renderizar elementos con eventos asociados.
function EventoSaludar() {
  // Defino la función que se ejecutará al tener lugar el evento.
  const evento = () => {
    console.log('Se disparó el evento');
  };
  // Agrego el evento a la etiqueta correspondiente.
  // Los eventos tiene el mismo nombre, solo que se escriben en camelCase.
  return (<button onClick={ () => evento() }>Disparar evento</button>);

};
ReactDOM.render( <EventoSaludar/>, document.getElementById('root') );

// Cambios de estado.
function FavoriteColor() {
  // useState realiza un tracking del estado del componente.
  // Recibe un estado inicial como argumento.
  // Retorna dos valor, el estado actual y una función para actualizar el estado.

  // En este caso realizo un tracking de la variable "color", que inicializo como "red".
  const [color, setColor] = useState("Red");

  return(
    <>
      {/* Renderizo el estado actual de la variable. */}
      <h1>Mi favorite color is {color}</h1>
      {/* Cambio el valor de la variable. */}
      <button onClick={ () => setColor('Blue') }>Change favorite color</button>
    </>
  );
  
};
ReactDOM.render( <FavoriteColor/>, document.getElementById('root') );

// Formulario en forma de componente
function MyForm() {

  // Inputs será la variable que haga el tracking de los valores, inicializo el objeto vacío.
  const [inputs, setInputs] = useState({});

  // Actualizar el objeto Inputs con los valores ingresados.
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  // Previene la actualización de la página y retorna los datos ingresados.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( JSON.stringify(inputs) );
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type ="text" name="name" value={inputs.name || ""} onChange={handleChange}></input>
      <br/>
      <label>Last name: </label>
      <input type="text" name="lastName" value={inputs.lastName || ""} onChange={handleChange}></input>
      <br/>
      <label>Email address: </label>
      <input type="email" name="email" value={ inputs.email || "" } onChange={handleChange} ></input>
      <br/>
      <button type="submit">Enviar</button>
    </form>
  );

};
ReactDOM.render( <MyForm/>, document.getElementById('root') );

function BootstrapTest() {
  return(
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
};
ReactDOM.render( <BootstrapTest/>, document.getElementById('root') );