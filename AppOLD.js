
// variables
import logo from './logo.svg';
import './App.css';

// importo mi componente
import MyComponent from './components/MyComponent';


// defino funciones que usare en el return
function Saludo(nombre, edad) {
  // si voy a poner varias etiquetas, deben estar dentro de un <div>
  let content = (<div>
                  <p>Bienvenido {nombre}.</p>
                  <p>Tu edad es {edad}.</p>
                </div>);
  return content;
}


function App() {
// si hay variables, las declaro aca


  return (
    // solo llamados de funciones u operaciones
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Ejecuto la función */}
        {/*Saludo('Federico', 19)*/}
        {/* Cargo mi componente */}
        <section>
          <MyComponent/>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
