import React, { Component } from "react";
import "./Header.css";
import { graphql } from "react-apollo";
import { NavLink as RRNavLink } from "react-router-dom";
import query from "../../queries/CurrentUser";
import mutation from "../../mutations/Logout";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {
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
  onLogoutClick(e) {
    e.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <React.Fragment>
          <NavItem>
            <NavLink to="/dashboard" tag={RRNavLink}>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              tag={RRNavLink}
              onClick={this.onLogoutClick.bind(this)}
            >
              Logout
            </NavLink>
          </NavItem>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavItem>
            <NavLink to="/login" tag={RRNavLink}>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" tag={RRNavLink}>
              Signup
            </NavLink>
          </NavItem>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src="/images/cars/3d.png" alt="3d car logo" className="logo" />
            <span className="ml-3" />
            Race Graphics
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sample
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option One</DropdownItem>
                  <DropdownItem>Option Tow</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {this.renderButtons()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
