import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import { CheckboxGroup } from 'react-checkbox-group';

class StudioForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false,

    };
    this.toggleModal = this.toggleModal.bind(this);
    this.HandleSound = this.HandleSound.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleTrapChange = this.handleTrapChange.bind(this);
    this.handleCloudChange = this.handleCloudChange.bind(this);
    this.handleElectroChange = this.handleElectroChange.bind(this);
    this.handleHouseChange = this.handleHouseChange.bind(this);
    this.handleLatinoChange = this.handleLatinoChange.bind(this);


  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


   HandleSound(evt){

            alert( "Type " + this.state.selectedType +
            "\nTrap " + this.state.selectedTrap +
            "\nCloud " + this.state.selectedCloud +
            "\nElectro " + this.state.selectedElectro +
            "\nHouse " + this.state.selectedHouse +
            "\nLatino " + this.state.selectedLatino
          );
            evt.preventDefault();

            this.setState({selectedType: false});
            this.setState({selectedTrap: false});
            this.setState({selectedCloud: false});
            this.setState({selectedElectro: false});
            this.setState({selectedHouse: false});
            this.setState({selectedLatino: false});
    }


    handleTypeChange(evt) {
  this.setState({
    selectedType: evt.target.value
  });
}

    handleTrapChange(evt) {
      this.setState({
        selectedTrap: evt.target.checked,
      });

}
    handleCloudChange(evt) {this.setState({selectedCloud: evt.target.checked});}
    handleElectroChange(evt) {this.setState({selectedElectro: evt.target.checked});}
    handleHouseChange(evt) {this.setState({selectedHouse: evt.target.checked});}
    handleLatinoChange(evt) {this.setState({selectedLatino: evt.target.checked});}


  render(){

    return(
      <div>
        <Button color="dark" size="lg" className="my-5 p-4" onClick={this.toggleModal}>
          <h4>Let's go !</h4> <span className="fa fa-headphones fa-lg"></span>
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <Form onSubmit={this.HandleSound}>
          <ModalHeader toggle={this.toggleModal}>Choisissez une des catégories</ModalHeader>
          <ModalBody>

            <FormGroup tag="fieldset">
            <h5>Tu recherches</h5>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="type" id="prod" value="prod"
                    checked={this.state.selectedType === 'prod'}
                    onChange={this.handleTypeChange} />{' '}
                    Prod
                    </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="type" id="chanson" value="chanson"
                      checked={this.state.selectedType === 'chanson'}
                      onChange={this.handleTypeChange} />{' '}
                    Chanson
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="type" id="both" value="both"
                    checked={this.state.selectedType === 'both'}
                    onChange={this.handleTypeChange} />{' '}
                    N'importe
                  </Label>
                </FormGroup>
                </FormGroup>


                <h5>Le style ?</h5>

            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" name="style" id="trap" value="trap"
                    checked={this.state.selectedTrap}
                    onChange={this.handleTrapChange} /> Trap
              </Label>
              </FormGroup>
              <FormGroup check inline>
              <Label check>
                <Input type="checkbox" name="style" id="Cloud" value="cloud"
                  checked={this.state.selectedCloud}
                  onChange={this.handleCloudChange}/> Cloud
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" name="style" id="Electro" value="electro"
                  checked={this.state.selectedElectro}
                  onChange={this.handleElectroChange}/> Electro
                </Label>
                </FormGroup>
                <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" name="style" id="House" value="House"
                  checked={this.state.selectedHouse}
                  onChange={this.handleHouseChange} /> House
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" name="style" id="Latino" value="Latino"
                    checked={this.state.selectedLatino}
                    onChange={this.handleLatinoChange} /> Latino
                  </Label>
                  </FormGroup>

                  <h5>Le mood ?</h5>


              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Chill
                </Label>
                </FormGroup>
                <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Énergique
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> Joyeux
                  </Label>
                  </FormGroup>
                  <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> Triste
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Énervé
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Rêveur
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" /> Normal
                      </Label>
                      </FormGroup>

                      <h5>Les instruments ?</h5>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Drum Kit
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" /> Batteries
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" /> Rhodes
                      </Label>
                      </FormGroup>
                      <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" /> Piano
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Synth
                        </Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Samples
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" /> 808
                          </Label>
                          </FormGroup>
                          <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" /> Bass
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" /> Arp Bells
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" /> Guitare Acoustique
                              </Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Label check>
                                <Input type="checkbox" /> Guitare Électrique
                              </Label>
                              </FormGroup>


          </ModalBody>
          <ModalFooter>
          <Button type="submit" name="lessgo" color="success" onClick={this.toggleModal}>Écoutez</Button>
         <Button color="secondary" onClick={this.toggleModal}>Close</Button>
         </ModalFooter>
          </Form>
          </Modal>

        </div>
      );
    }
  }

export default StudioForm;
