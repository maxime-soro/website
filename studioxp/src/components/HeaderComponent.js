import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';


class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);

  }

  toggleNav(){
  this.setState({
    isNavOpen: !this.state.isNavOpen
  });
}

  render() {
    return (
      <div>

      <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
          <NavbarBrand className="navbar-brand" href="home.html">Païsley/Soro Che
           </NavbarBrand>
         <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="navbar-nav ml-auto text-left">
              <NavItem>
                <NavLink href="home.html">Home
                  <span class="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="releases.html">Releases</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="beats.html">Beats</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="merch.html">Merch</NavLink>
              </NavItem>
              <NavItem active>
                <NavLink href="studio">Studio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="contact.html">Contact</NavLink>
              </NavItem>
              <br></br>
              <div class="underbar">
              </div>
            </Nav>
            </Collapse>


        </div>
      </Navbar>


      </div>



    );
  }
}


export default Header;
