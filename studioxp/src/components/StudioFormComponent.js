import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Form, FormGroup, Label, Input  } from 'reactstrap';
import AudioPlayer  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



var title = "";
var link = "";

class StudioForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false,
      isModalNestedOpen: false

    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalNested = this.toggleModalNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.handleSound = this.handleSound.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.handleTrapChange = this.handleTrapChange.bind(this);
    this.handleCloudChange = this.handleCloudChange.bind(this);
    this.handleElectroChange = this.handleElectroChange.bind(this);
    this.handleHouseChange = this.handleHouseChange.bind(this);
    this.handleLatinoChange = this.handleLatinoChange.bind(this);

    this.handleChill = this.handleChill.bind(this);
    this.handleEnergique = this.handleEnergique.bind(this);
    this.handleJoyeux = this.handleJoyeux.bind(this);
    this.handleTriste = this.handleTriste.bind(this);
    this.handleEnerve = this.handleEnerve.bind(this);
    this.handleReveur = this.handleReveur.bind(this);
    this.handleNormal = this.handleNormal.bind(this);

    this.handleDrumKit = this.handleDrumKit.bind(this);
    this.handleBatteries = this.handleBatteries.bind(this);
    this.handleRhodes = this.handleRhodes.bind(this);
    this.handlePiano = this.handlePiano.bind(this);
    this.handleSynth = this.handleSynth.bind(this);
    this.handleSamples = this.handleSamples.bind(this);
    this.handle808 = this.handle808.bind(this);
    this.handleBass = this.handleBass.bind(this);
    this.handleArpBells = this.handleArpBells.bind(this);
    this.handleAcoustic = this.handleAcoustic.bind(this);
    this.handleElectric = this.handleElectric.bind(this);


  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleModalNested(){
    this.setState({
      isModalNestedOpen: !this.state.isModalNestedOpen
    });
  }

  toggleAll(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      isModalNestedOpen: !this.state.isModalNestedOpen
    });
  }

  handleSound(evt){

            if (this.state.selectedType === "prod") {
              if (this.state.selectedTrap || this.state.selectedCloud) {
                  if (this.state.selectedReveur || this.state.selectedTriste) {
                    link="epilogue.mp3";
                    title="Epilogue";
                  }
              }
              if (this.state.selectedElectro || this.state.selectedLatino) {
                  if (this.state.selectedChill || this.state.selectedJoyeux) {
                    link="caipirinha.mp3";
                    title="Caïpirinha";
                  }
                  else if (this.state.selectedTriste || this.state.selectedReveur) {
                    link=="isladelsol.mp3";
                    title=="Isla Del Sol";
                  }
              }
              if (this.state.selectedTrap) {
                  if (this.state.selectedEnergique || this.state.selectedEnerve) {
                    link=="east6thst.mp3";
                    title=="East 6th St.";
                  }
              }
              if (this.state.selectedCloud) {
                  if (this.state.selectedTriste || this.state.selectedEnerve) {
                    link=="longitude.mp3";
                    title=="Longitude";
                  }
              }
              if (this.state.selectedElectro || this.state.selectedHouse) {
                  if (this.state.selectedJoyeux || this.state.selectedChill || this.state.selectedEnergique) {
                    link=="cruise.mp3";
                    title=="Cruise";
                  }
              }

            }
            else if (this.state.selectedType === "chanson") {
            }
            else if (this.state.selectedType === "both") {
            }

            alert( "Type " + this.state.selectedType +
            "\nTrap " + this.state.selectedTrap +
            " Cloud " + this.state.selectedCloud +
            " Electro " + this.state.selectedElectro +
            " House " + this.state.selectedHouse +
            " Latino " + this.state.selectedLatino +

            "\nChill " + this.state.selectedChill +
            " Energique " + this.state.selectedEnergique +
            " Joyeux " + this.state.selectedJoyeux +
            " Triste " + this.state.selectedTriste +
            " Enerve " + this.state.selectedEnerve +
            " Reveur " + this.state.selectedReveur +
            " Normal " + this.state.selectedNormal +

            "\nDrumKit " + this.state.selectedDrumKit +
            " Batteries " + this.state.selectedBatteries +
            "Rhodes " + this.state.selectedRhodes +
            " Piano " + this.state.selectedPiano +
            " Synth " + this.state.selectedSynth +
            " Samples " + this.state.selectedSamples +
            " 808 " + this.state.selected808 +
            " Bass " + this.state.selectedBass +
            " ArpBells " + this.state.selectedArpBells +
            " Acoustic " + this.state.selectedAcoustic +
            " Electric " + this.state.selectedElectric
          );

            alert(link + title);

            evt.preventDefault();

            this.setState({selectedType: false});

            this.setState({selectedTrap: false});
            this.setState({selectedCloud: false});
            this.setState({selectedElectro: false});
            this.setState({selectedHouse: false});
            this.setState({selectedLatino: false});

            this.setState({selectedChill: false});
            this.setState({selectedEnergique: false});
            this.setState({selectedJoyeux: false});
            this.setState({selectedTriste: false});
            this.setState({selectedEnerve: false});
            this.setState({selectedReveur: false});
            this.setState({selectedNormal: false});

            this.setState({selectedDrumKit: false});
            this.setState({selectedBatteries: false});
            this.setState({selectedRhodes: false});
            this.setState({selectedPiano: false});
            this.setState({selectedSynth: false});
            this.setState({selectedSamples: false});
            this.setState({selected808: false});
            this.setState({selectedBass: false});
            this.setState({selectedArpBells: false});
            this.setState({selectedAcoustic: false});
            this.setState({selectedElectric: false});
    }

    handleTypeChange(evt) {this.setState({selectedType: evt.target.value});}

    handleTrapChange(evt) {this.setState({selectedTrap: evt.target.checked,});}
    handleCloudChange(evt) {this.setState({selectedCloud: evt.target.checked});}
    handleElectroChange(evt) {this.setState({selectedElectro: evt.target.checked});}
    handleHouseChange(evt) {this.setState({selectedHouse: evt.target.checked});}
    handleLatinoChange(evt) {this.setState({selectedLatino: evt.target.checked});}

    handleChill(evt) {this.setState({selectedChill: evt.target.checked,});}
    handleEnergique(evt) {this.setState({selectedEnergique: evt.target.checked});}
    handleJoyeux(evt) {this.setState({selectedJoyeux: evt.target.checked});}
    handleTriste(evt) {this.setState({selectedTriste: evt.target.checked});}
    handleEnerve(evt) {this.setState({selectedEnerve: evt.target.checked});}
    handleReveur(evt) {this.setState({selectedReveur: evt.target.checked});}
    handleNormal(evt) {this.setState({selectedNormal: evt.target.checked});}

    handleDrumKit(evt) {this.setState({selectedDrumKit: evt.target.checked,});}
    handleBatteries(evt) {this.setState({selectedBatteries: evt.target.checked});}
    handleRhodes(evt) {this.setState({selectedRhodes: evt.target.checked});}
    handlePiano(evt) {this.setState({selectedPiano: evt.target.checked});}
    handleSynth(evt) {this.setState({selectedSynth: evt.target.checked});}
    handleSamples(evt) {this.setState({selectedSamples: evt.target.checked});}
    handle808(evt) {this.setState({selected808: evt.target.checked});}
    handleBass(evt) {this.setState({selectedBass: evt.target.checked});}
    handleArpBells(evt) {this.setState({selectedArpBells: evt.target.checked});}
    handleAcoustic(evt) {this.setState({selectedAcoustic: evt.target.checked});}
    handleElectric(evt) {this.setState({selectedElectric: evt.target.checked});}



  render(){

    return(
      <div>

         <Button color="dark" size="lg" className="my-5 p-4" onClick={this.toggleModal}>
          <h4>Let's go !</h4> <span className="fa fa-headphones fa-lg"></span>
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <Form onSubmit={this.handleSound}>
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
                  <Input type="checkbox" name="mood" id="chill" value="chill"
                  checked={this.state.selectedChill}
                  onChange={this.handleChill}/> Chill
                </Label>
                </FormGroup>
                <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" name="mood" id="energique" value="energique"
                  checked={this.state.selectedEnergique}
                  onChange={this.handleEnergique} /> Énergique
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" name="mood" id="Joyeux" value="Joyeux"
                    checked={this.state.selectedJoyeux}
                    onChange={this.handleJoyeux} /> Joyeux
                  </Label>
                  </FormGroup>
                  <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" name="mood" id="triste" value="triste"
                    checked={this.state.selectedTriste}
                    onChange={this.handleTriste} /> Triste
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" name="mood" id="enerve" value="enerve"
                      checked={this.state.selectedEnerve}
                      onChange={this.handleEnerve}/> Énervé
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" name="mood" id="reveur" value="reveur"
                      checked={this.state.selectedReveur}
                      onChange={this.handleReveur}/> Rêveur
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" name="mood" id="normal" value="normal"
                        checked={this.state.selectedNormal}
                        onChange={this.handleNormal}/> Normal
                      </Label>
                      </FormGroup>

                      <h5>Les instruments ?</h5>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" name="instru" id="drumkit" value="drumkit"
                      checked={this.state.selectedDrumKit}
                      onChange={this.handleDrumKit}/> Drum Kit
                    </Label>
                    </FormGroup>
                    <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" name="instru" id="batteries" value="batteries"
                      checked={this.state.selectedBatteries}
                      onChange={this.handleBatteries} /> Batteries
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" name="instru" id="rhodes" value="rhodes"
                        checked={this.state.selectedRhodes}
                        onChange={this.handleRhodes}/> Rhodes
                      </Label>
                      </FormGroup>
                      <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" name="instru" id="piano" value="piano"
                        checked={this.state.selectedPiano}
                        onChange={this.handlePiano}/> Piano
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" name="instru" id="synth" value="synth"
                          checked={this.state.selectedSynth}
                          onChange={this.handleSynth}/> Synth
                        </Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" name="instru" id="samples" value="samples"
                          checked={this.state.selectedSamples}
                          onChange={this.handleSamples}/> Samples
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" name="instru" id="808" value="808"
                            checked={this.state.selected808}
                            onChange={this.handle808} /> 808
                          </Label>
                          </FormGroup>
                          <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" name="instru" id="bass" value="bass"
                            checked={this.state.selectedBass}
                            onChange={this.handleBass}/> Bass
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" name="instru" id="arpbells" value="arpbells"
                              checked={this.state.selectedArpBells}
                              onChange={this.handleArpBells}/> Arp Bells
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" name="instru" id="acoustic" value="acoustic"
                              checked={this.state.selectedAcoustic}
                              onChange={this.handleAcoustic}/> Guitare Acoustique
                              </Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Label check>
                                <Input type="checkbox" name="instru" id="electric" value="electric"
                                checked={this.state.selectedElectric}
                                onChange={this.handleElectric}/> Guitare Électrique
                              </Label>
                              </FormGroup>


          </ModalBody>
          <ModalFooter>
          <Button type="submit" name="submit" color="success" onClick={this.toggleModalNested}>Écoutez</Button>
         <Button color="secondary" onClick={this.toggleModal}>Close</Button>
         </ModalFooter>
          </Form>
          </Modal>
          <Modal isOpen={this.state.isModalNestedOpen} toggle={this.toggleModalNested}>
            <ModalHeader>
              <h5>Vous écoutez : - " {title} " -</h5>
            </ModalHeader>
            <ModalBody>
              <h6>Asseyez-vous confortablement et appréciez</h6>
              <AudioPlayer
                    autoPlay
                    src={link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
            </ModalBody>

            <ModalFooter>
            <Button color="success">Lien</Button>
           <Button color="secondary" onClick={this.toggleAll}>Close</Button>
            </ModalFooter>

          </Modal>

        </div>
      );
    }
  }

export default StudioForm;
