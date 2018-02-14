import React from 'react';
import GestorTareas from './Tareas/GestorTareas.jsx'
import GestorProyectos from './Proyectos/GestorProyectos.jsx'
import Titulo from './componentTitulo.jsx'
import Navegacion from './componentNavbar.jsx'

const Hoc = React.createClass({
    render() {
        const projs = [{ pId: 1, nombre: 'p1' },
            { pId: 2, nombre: 'p2' },
            { pId: 3, nombre: 'p3' }
        ];
        const tareas = [
            { id: 1, descripcion: 'hola que tal', tiempo: 12, id_proyecto: 1 },
            { id: 2, descripcion: 'como estas', tiempo: 37, id_proyecto: 2 },
            { id: 3, descripcion: 'yo bien', tiempo: 10, id_proyecto: 3 }
        ];
        return (
            <div className="container">
                <Navegacion/>
                <h1>Titulo</h1>
                <a className="btn btn-floating pulse"><i className="material-icons">menu</i></a>
                <Titulo nombre="Arnau" />
                <GestorProyectos proys={projs}/>
                <GestorTareas tarea={tareas}/>
            </div>);
    }
})

export default Hoc;