import React from 'react';
import LineaDeProyectos from './LineaDeProyectos.jsx';

const GestorProyectos = React.createClass({
    render() {
        function forProyectos(_obj) {
            let concatena = [];
            for (let i = 0; i < _obj.length; i++)
                concatena.push(<LineaDeProyectos key={i} id={_obj[i].pId} nombre_proyecto={_obj[i].nombre} />);
            return concatena;
        }
        return (
            <div className="purple lighten-5">
                <ul className="collapsible popout" data-collapsible="accordion">
                <h4>Proyectos</h4>
                <div className="container">
                    {forProyectos(this.props.proys)}
                </div>
                   </ul>
            </div>);
    }
})

export default GestorProyectos;