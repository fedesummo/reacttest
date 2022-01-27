// importo la libreria de React
import React, {Component} from 'react';

// Defino el componente, el nombre se debe corresponder con el nombre del archivo

class MyComponent extends Component{
    
    // el método render es el que muestra el componente al usuario
    render() {

        let persona = {
            nombre: 'Federico',
            apellido: 'Summo',
            hobbies: ['música', 'videojuegos', 'películas']
        };

        return(
            /* el return solo devuelve UNA etiqueta, por lo que si quiero renderizar varias tengo que agruparlas
            en otra (DIV por ejemplo) o en un react fragment, el fragment en sí no renderiza ninguna etiqueta
            solo sirve para saltar esa restriccion*/
            <React.Fragment>
                {/* uso className xq class es una palabra reservada de JS */}
                <p className='test'>Bienvenido {persona.nombre} {persona.apellido}.</p>
                <ul>
                    { persona.hobbies.map(
                        function (element, i) {
                            return(
                                <li key={i}>{element}</li>
                            );
                        }
                    ) }
                </ul>
            </React.Fragment>
        );
    };
};

export default MyComponent;