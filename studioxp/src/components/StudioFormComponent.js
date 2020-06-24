import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col, Container } from 'reactstrap';


class StudioForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false,
      isModalNestedOpen: false,
      isModalNestedNestedOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNestedModal = this.toggleNestedModal.bind(this);
    this.toggleNestedNestedModal = this.toggleNestedNestedModal.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleNestedModal(){
    this.setState({
      isModalNestedOpen: !this.state.isModalNestedOpen
    });
  }
  toggleNestedNestedModal(){
      this.setState({
        isModalNestedNestedOpen: !this.state.isModalNestedNestedOpen
      });
    }


  toggleAll(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      isModalNestedOpen: !this.state.isModalNestedOpen,
      isModalNestedNestedOpen: !this.state.isModalNestedNestedOpen


    });
  }


  render(){

    const StepOne = (props) => {
      const [cSelected, setCSelected] = useState([]);
      const [rSelected, setRSelected] = useState(null);

      const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
          cSelected.push(selected);
        } else {
          cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
      }
      return (
        <div>
        <h5>Tu recherches</h5>
          <ButtonGroup className="mb-3">
            <Button color="dark" onClick={() => setRSelected(1)} active={rSelected === 1}>Prod</Button>
            <Button color="dark" onClick={() => setRSelected(2)} active={rSelected === 2}>Chanson</Button>
            <Button color="dark" onClick={() => setRSelected(3)} active={rSelected === 3}>Chanceux ?</Button>
          </ButtonGroup>

        <h5>Le style que tu recherches</h5>
          <ButtonGroup>
            <Button color="secondary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Trap</Button>
            <Button color="info" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Cloud</Button>
            <Button color="success" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Electro</Button>
            <Button color="warning" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>House</Button>
            <Button color="danger" onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>Latino</Button>
          </ButtonGroup>
        </div>
      );
    }

    const StepTwo = (props) => {
      const [cSelected, setCSelected] = useState([]);
      const [rSelected, setRSelected] = useState(null);

      const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
          cSelected.push(selected);
        } else {
          cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
      }
      return (
        <div>
        <h5>Dans quel mood es-tu ?</h5>
          <ButtonGroup>
          <Row>
            <Button className="m-1" color="info" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Chill</Button>{' '}
            <Button className="m-1" color="primary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Énergique</Button>{' '}
            <Button className="m-1" color="success" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Joyeux</Button>
            <Button className="m-1" color="secondary" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>Triste</Button>
            <Button className="m-1" color="danger" onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>Énervé</Button>
            <Button className="m-1" color="light" onClick={() => onCheckboxBtnClick(6)} active={cSelected.includes(6)}>Rêveur</Button>
            <Button className="m-1" color="warning" onClick={() => onCheckboxBtnClick(7)} active={cSelected.includes(7)}>Normal</Button>
            </Row>
          </ButtonGroup>

        </div>
      );
    }

    const StepThree = (props) => {
      const [cSelected, setCSelected] = useState([]);
      const [rSelected, setRSelected] = useState(null);

      const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
          cSelected.push(selected);
        } else {
          cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
      }
      return (
        <div>
          <h5>Les sonorités que tu apprécies ?</h5>

            <ButtonGroup>
            <Row>
              <Button className="m-1" color="info" outline onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Drum Kit</Button>{' '}
              <Button className="m-1" color="primary" outline onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Batteries</Button>{' '}
              <Button className="m-1" color="success" outline onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Rhodes</Button>
              <Button className="m-1" color="dark" outline onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>Piano</Button>
              <Button className="m-1" color="danger" outline onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>Synth</Button>
              <Button className="m-1" color="secondary" outline onClick={() => onCheckboxBtnClick(6)} active={cSelected.includes(6)}>Samples</Button>
              <Button className="m-1 button-purple" outline onClick={() => onCheckboxBtnClick(7)} active={cSelected.includes(7)}>808</Button>
              <Button className="m-1 button-darkblue" outline onClick={() => onCheckboxBtnClick(8)} active={cSelected.includes(8)}>Bass</Button>
              <Button className="m-1 button-turquoise" outline onClick={() => onCheckboxBtnClick(9)} active={cSelected.includes(9)}>Arp Bells</Button>
              <Button className="m-1 button-hotyellow" outline onClick={() => onCheckboxBtnClick(10)} active={cSelected.includes(10)}>Guitare Acoustique</Button>
              <Button className="m-1 button-hellred" outline onClick={() => onCheckboxBtnClick(11)} active={cSelected.includes(11)}>Guitare Électrique</Button>

              </Row>
            </ButtonGroup>

        </div>
      );
    }

    return(
      <div>
        <Button color="dark" size="lg" className="my-5 p-4" onClick={this.toggleModal}>
          <h4>Let's go !</h4> <span className="fa fa-headphones fa-lg"></span>
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Choisissez une des catégories</ModalHeader>
          <ModalBody>
          <StepOne />
          </ModalBody>
          <ModalFooter>
          <Button color="success" onClick={this.toggleNestedModal}>Suivant</Button>
         <Button color="secondary" onClick={this.toggleModal}>Close</Button>
         </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.isModalNestedOpen} toggle={this.toggleNestedModal}>
            <ModalHeader toggle={this.toggleNestedModal}>Choisissez une des catégories</ModalHeader>
            <ModalBody>
            <StepTwo />
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.toggleNestedModal}>Précédent</Button>
              <Button color="success" onClick={this.toggleNestedNestedModal}>Suivant</Button>
            <Button color="secondary" onClick={this.toggleAll}>Close All</Button>
            </ModalFooter>
            </Modal>
          <Modal isOpen={this.state.isModalNestedNestedOpen} toggle={this.toggleNestedNestedModal}>
            <ModalHeader toggle={this.toggleNestedNestedModal}>Choisissez une des catégories</ModalHeader>
            <ModalBody>
            <StepThree />
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.toggleNestedNestedModal}>Précédent</Button>
              <Button color="success">Suivant</Button>
            <Button color="secondary" onClick={this.toggleAll}>Close All</Button>
            </ModalFooter>
            </Modal>
        </div>
      );
    }
  }

export default StudioForm;
