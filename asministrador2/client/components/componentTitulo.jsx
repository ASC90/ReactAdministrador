import React from 'react';

class Titulo extends React.Component {
    render() {
        return (
            <h3>{this.props.nombre}</h3>
        )
    }
}

Titulo.propTypes = {
    nombre: React.PropTypes.string.isRequired
}

export default Titulo;