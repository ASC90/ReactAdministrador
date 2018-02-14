import React from 'react';
import LineaDeTareas from './LineaDeTareas.jsx'
import { Button, Icon, Navbar, NavItem, Dropdown, Input, Row } from 'react-materialize'
import FiltroComp from '../componentFiltro.jsx'

const GestorTareas = React.createClass({
    getInitialState: function () {
        console.log("Estoy en el initial state...");
        return { nombre: "" };
    },
    render() {
        function forTareas(_obj, str) {
            let concatena = [];
            if (str != "") {
                _obj = _obj.filter(function (prop) {
                    if (prop.descripcion.toUpperCase().includes(str.toUpperCase()))
                        return prop;
                });
            }
            for (let i = 0; i < _obj.length; i++) {
                concatena.push(<LineaDeTareas key={i} id={_obj[i].id} descripcion={_obj[i].descripcion} tiempo={_obj[i].tiempo} id_proyecto={_obj[i].id_proyecto} />);
            }
            return concatena;
        }
        return (
            <div className="deep-purple lighten-5  container">
                <Row>
                    <FiltroComp handlerValor={this.updateNombre} />
                </Row>
                <div>
                    <h3>
                        {this.state.nombre}
                    </h3>
                </div>
                <h4>Tareas</h4>
                <div className="container">
                    {forTareas(this.props.tarea, this.state.nombre)}
                </div>
            </div>);
    },
    updateNombre(e) {
        console.log("actualizando estado:", e.target);
        this.setState({ nombre: e.target.value });
    }
})

export default GestorTareas;