import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import StudioForm from './StudioFormComponent';
import '../css/full-width-pics.css';
import '../vendor/bootstrap/css/bootstrap.min.css';


class Main extends Component {
  render() {
    return (
      <div>
      <Header />
      <Container className="py-3">
          <Row>
        <div className="col-12 text-center">
          <h1>Studio</h1>
          <p class="lead">Bienvenue chez vous.</p>
          <p>Laissez vous tenter par notre expérience musicale immersive. (Écouteurs ou enceintes recommandées) </p>
        </div>
      </Row>
      </Container>


      <Container className="py-5">
        <Row className="py-5">

        <Col xs="12" className="">
          <StudioForm />
        </Col>

        </Row>
      </Container>
      <Footer />
      </div>




    );
  }
}


export default Main;
