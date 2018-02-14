import React from 'react';


const LineaDeTareas = React.createClass({
    render() {
        return (
            <div>
                <ul>
                    <li>
                        id: {this.props.id}
                    </li>
                    <li>
                        descripcion: {this.props.descripcion}
                    </li>
                    <li>
                        tiempo: {this.props.tiempo}
                    </li>
                    <li>
                        id_proyecto: {this.props.id_proyecto}
                    </li>
                </ul>
            </div>);
    }
})

export default LineaDeTareas;