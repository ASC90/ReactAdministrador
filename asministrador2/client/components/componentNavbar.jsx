import React from 'react';
import { Button, Icon, Navbar, NavItem, Dropdown } from 'react-materialize'

const Navegacion = React.createClass({
    render() {
        const styles = {
            width: 55,
            margin: 1
        }
        return (
            <div>
                <Navbar className="cyan lighten-2" brand={<img className="brand" style={styles} src="http://www.telestream.net/images/home/logo-product-gameshow.png" alt="Error" />} right>
                    <Dropdown trigger={<NavItem data-beloworigin="true">Drop me!</NavItem>}>
                        <NavItem>one</NavItem>
                        <NavItem>two</NavItem>
                        <NavItem divider />
                        <NavItem>three</NavItem>
                    </Dropdown>
                    <NavItem href='get-started.html'>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
            </div>);
    }
})

export default Navegacion;