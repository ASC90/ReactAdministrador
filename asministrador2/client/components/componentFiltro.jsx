import React from 'react';
import { Button, Icon, Navbar, NavItem, Dropdown, Input, Row } from 'react-materialize'

const FiltroComp = React.createClass({
    getInitialState: function () {
        console.log("Estoy en el initial state...");
        return { nombre: "XXX" };
    },
    render() {
        console.log("STATE: ", this.state);
        return (
            <div>
              <Input s={6} label="Input" onChange={this.updateNombre} name="nombre" value={this.state.nombre}/>
                <div>
                    <h3>
                        {this.state.nombre}
                    </h3>
                </div>
            </div>);
    },
    updateNombre(e) {
        console.log("actualizando estado:", e.target);
        this.setState({ nombre: e.target.value });
        this.props.handlerValor(e);
    }
})

export default FiltroComp;