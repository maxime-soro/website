import React, { Component } from 'react';
import Footer from './FooterComponent';
import {Container, Row, Col, Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div>
      <Container className="py-5">
          <Row>
        <div className="col-12 text-center">
          <h1>Païsley / Soro Che</h1>
          <p class="lead">Bienvenue</p>
        </div>
      </Row>
      </Container>


      <Container className="py-5">
        <Row className="py-5">

        <Col xs="12" md="6" className="">
         <NavLink href="/home.html">
         <Button color="dark" size="lg" className="my-5 p-4">
         <h4>Page d'accueil</h4>
       </Button></NavLink>
       </Col>

       <Col xs="12" md="6" className="">
       <Link to="/studio">
      <Button color="secondary" size="lg" className="my-5 p-4">
        <h4>Expérience Studio</h4>
      </Button></Link>
        </Col>

        </Row>
      </Container>
      <Footer />
      </div>
    );
  }
}

export default HomePage;
