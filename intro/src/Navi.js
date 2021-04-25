import React, {Component}  from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import CartSummery from './CartSummery';
export default class Navi extends Component {

  toggle = this.toggle.bind(this)
  state = {
    isOpen:false
  }

  toggle() {
    this.setState({isOpen:!this.state.isOpen});
  }

  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Nortwind App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">GitHub</NavLink>
            </NavItem>
            <CartSummery cart={this.props.cart}/>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}
