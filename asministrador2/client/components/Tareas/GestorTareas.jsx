import React from 'react';
import LineaDeTareas from './LineaDeTareas.jsx'

const GestorTareas = React.createClass({
    render() {
        function forTareas(_obj) {
            let concatena = [];
            for (let i = 0; i < _obj.length; i++)
                concatena.push(<LineaDeTareas key={i} id={_obj[i].id} descripcion={_obj[i].descripcion} tiempo={_obj[i].tiempo} id_proyecto={_obj[i].id_proyecto} />);
            return concatena;
        }
        return (
            <div className="deep-purple lighten-5">
                <h4>Tareas</h4>
                <div className="container">
                    {forTareas(this.props.tarea)}
                </div>
            </div>);
    }
})

export default GestorTareas;