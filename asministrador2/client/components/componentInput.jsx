import React from 'react';
import { Button, Icon, Navbar, NavItem, Dropdown, Input, Row } from 'react-materialize'

const InputComp = React.createClass({
    getInitialState: function () {
        console.log("Estoy en el initial state...");
        return { nombre: "XXX" };
    },
    render() {
        console.log("STATE: ", this.state);
        return (
            <div className="container">
                <Row>
                    <Input s={6} label="Input" onChange={this.updateNombre} name="nombre" value={this.state.nombre}/>
                </Row>
                <div>
                    <h3>
                        {this.state.nombre}
                    </h3>
                </div>
                <div>
                    <Button onClick={this.saludar} waves='light'>button</Button>
                </div>
            </div>);
    },
    saludar(e) {
        alert("Hola" + this.state.nombre + "!!");
    },
    updateNombre(e) {
        console.log("actualizando estado:", e.target);
        this.setState({ nombre: e.target.value });
    }
})

export default InputComp;