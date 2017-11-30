import './App.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';
import { Todo, AsyncCounter } from 'ROUTERS';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {	
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
	render() {
		return (
			<div styleName="app">
				<Navbar color="faded" light expand="md">
					<NavbarBrand href="/">React</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link className="nav-link" to="/todo">TODO</Link>
								{/* <NavLink href="/components/">Components</NavLink> */}
							</NavItem>
							<NavItem>
								{/* <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink> */}
								<Link className="nav-link" to="/couter">COUTER</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<Route path="/todo" component={Todo}/>
				<Route path="/couter" component={AsyncCounter}/>
			</div>
		);
	}
}

App.propTypes = {

};

export default App;
