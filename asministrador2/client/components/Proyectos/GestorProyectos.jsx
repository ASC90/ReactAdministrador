import React from 'react';
import LineaDeProyectos from './LineaDeProyectos.jsx';
import { Button, Icon, Navbar, NavItem, Dropdown, Input, Row } from 'react-materialize'
import FiltroComp from '../componentFiltro.jsx'

const GestorProyectos = React.createClass({
    getInitialState: function () {
        console.log("Estoy en el initial state...");
        return { nombre: "" };
    },
    render() {
        function forProyectos(_obj, str) {
            let concatena = [];
            if (str != "") {
                _obj = _obj.filter(function (prop) {
                    if (prop.nombre.toUpperCase().includes(str.toUpperCase()))
                        return prop;
                });
            }
            for (let i = 0; i < _obj.length; i++)
                concatena.push(<LineaDeProyectos key={i} id={_obj[i].pId} nombre_proyecto={_obj[i].nombre} />);
            return concatena;
        }
        return (
            <div className="purple lighten-5 container">
                <row><FiltroComp handlerValor={this.updateNombre}/></row>
                <h4>Proyectos</h4>
                <div className="container">
                    {forProyectos(this.props.proys, this.state.nombre)}
                </div>
            </div>);
    },
    updateNombre(e) {
        console.log("actualizando estado:", e.target);
        this.setState({ nombre: e.target.value });
    }
})

export default GestorProyectos;