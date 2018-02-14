import React from 'react';


const LineaDeProyectos = React.createClass({
    render() {
        return (
            <div>
                <ul>
                    <li>
                        id: {this.props.id}
                    </li>
                    <li>
                        nombre_proyecto: {this.props.nombre_proyecto}
                    </li>
                </ul>
            </div>);
    }
})

export default LineaDeProyectos;