import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AudioPlayer  from 'react-h5-audio-player';
import { AvForm, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import 'react-h5-audio-player/lib/styles.css';




var title = "";
var link = "";
var urlLink = "";
var lstStyle = [];
var lstMood = [];



const ModalAudio = ({title, link, urlLink}) => {
    if(title === ""){
      return(
      <div>
      <ModalHeader>
      <h5>Aucun résultat</h5>
      </ModalHeader>
      <ModalBody>
      <h6>Malheureusement, nous n'avons pas pu trouver un résultat, nous vous invitons à recommencer à d'autres critères</h6>
      </ModalBody>

      </div>
    );
   }
   else {
     return(
       <div>
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
       <Button color="success" outline><a href={urlLink} target="_blank">Lien</a></Button>
       </ModalFooter>

       </div>
     );
   }

   }


class StudioForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false,
      isModalNestedOpen: false,
      isType: {
          prodActive: false,
          chansonActive: false,
          bothActive: false,
      },
      isStyle: {
          trapActive: false,
          cloudActive: false,
          electroActive: false,
          houseActive: false,
          latinoActive: false,
      },
      isMood: {
          chillActive: false,
          energiqueActive: false,
          joyeuxActive: false,
          tristeActive: false,
          enerveActive: false,
          reveurActive: false,
          normalActive: false,
    }

    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalNested = this.toggleModalNested.bind(this);
    this.handleSound = this.handleSound.bind(this);

    this.handleButton = this.handleButton.bind(this);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);

  }




  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      isType: false, isStyle: false, isMood: false,

    });
  }

  toggleModalNested(){
    this.setState({
      isModalNestedOpen: !this.state.isModalNestedOpen
    });
  }



  handleSound(evt, values){

            link="";
            title="";
            urlLink="";
            lstStyle=[];
            lstMood=[];
            lstStyle=this.state.values.checkboxStyle;
            lstMood=this.state.values.checkboxMood;

            if (this.state.values.radioType === "prod" || this.state.radioType === "both") {
                if (lstStyle.indexOf("trap") !== -1 || lstStyle.indexOf("cloud") !== -1) {
                    if (lstMood.indexOf("reveur") !== -1 || lstMood.indexOf("triste") !== -1 || lstMood.indexOf("normal") !== -1  || lstMood.indexOf("chill") !== -1 ) {
                      link="epilogue.mp3";
                      title="Epilogue";
                      urlLink="https://www.youtube.com/watch?v=yvmmI72_M7c";
                    }
                }
                if (lstStyle.indexOf("latino") !== -1) {
                    if (lstMood.indexOf("chill") !== -1 || lstMood.indexOf("joyeux") !== -1) {
                      link="caipirinha.mp3";
                      title="Caïpirinha";
                      urlLink="https://www.youtube.com/watch?v=rlu0DEbuOaQ";
                    }
                    else if (lstMood.indexOf("triste") !== -1 || lstMood.indexOf("reveur") !== -1 || lstMood.indexOf("normal") !== -1) {
                      link="isladelsol.mp3";
                      title="Isla Del Sol";
                      urlLink="https://www.youtube.com/watch?v=Yhxq98k1FFA";
                    }
                }
                if (lstStyle.indexOf("trap") !== -1) {
                    if (lstMood.indexOf("energique") !== -1 || lstMood.indexOf("enerve") !== -1) {
                      link="east6thst.mp3";
                      title="East 6th St.";
                      urlLink="https://www.youtube.com/watch?v=jL697ntWttg";
                    }
                }
                if (lstStyle.indexOf("cloud") !== -1) {
                    if (lstMood.indexOf("triste") !== -1 || lstMood.indexOf("reveur") !== -1 || lstMood.indexOf("chill") !== -1 || lstMood.indexOf("normal") !== -1) {
                      link="longitude.mp3";
                      title="Longitude";
                      urlLink="https://www.youtube.com/watch?v=9ZTxx7eAfY0";
                    }
                }
                if (lstStyle.indexOf("electro") !== -1 || lstStyle.indexOf("house") !== -1) {
                    if (lstMood.indexOf("joyeux") !== -1 ||lstMood.indexOf("chill") !== -1 || lstMood.indexOf("energique") !== -1) {
                      link="cruise.mp3";
                      title="Cruise";
                      urlLink="https://www.youtube.com/watch?v=_5ZTMR0USyE";
                    }
                }

            }


            if (this.state.values.radioType === "chanson" || this.state.values.radioType === "both") {
                if (lstStyle.indexOf("trap") !== -1 || lstStyle.indexOf("electro") !== -1) {
                  if (lstMood.indexOf("energique") !== -1 || lstMood.indexOf("enerve") !== -1) {
                      link="steel.mp3";
                      title="Steel";
                      urlLink="https://open.spotify.com/track/3FJAhLuXcDZrekBSACh37T?si=nc8HM69xR6SulxPx6dKFxA";
                    }
                }
                if (lstStyle.indexOf("cloud") !== -1) {
                  if (lstMood.indexOf("triste") !== -1 || lstMood.indexOf("reveur") !== -1) {
                      link="proud.mp3";
                      title="Proud";
                      urlLink="https://open.spotify.com/track/65bmYk4S1636c1q6t1XgA4?si=g8AxArufTHCJG68v_-qn4A";
                    }
                  if (lstMood.indexOf("chill") !== -1 || lstMood.indexOf("normal") !== -1) {
                        link="triangle.mp3";
                        title="Triangle";
                        urlLink="https://open.spotify.com/track/4e0uYBiqHliwBdYhyrUJPv?si=SfQnTnIUSuapnLt8u2Y9aw";
                    }
                }
                if (lstStyle.indexOf("house") !== -1 || lstStyle.indexOf("electro") !== -1) {
                      if (lstMood.indexOf("energique") !== -1 || lstMood.indexOf("enerve") !== -1) {
                          link="moab.mp3";
                          title="Moab";
                          urlLink="https://open.spotify.com/track/2NlJNPYa4joFdHshpqfx8D?si=FH2XxgUGT6uccDtD5BPwyQ";
                        }
                    }


                if (lstStyle.indexOf("latino") !== -1) {
                  if (lstMood.indexOf("triste") !== -1 || lstMood.indexOf("chill") !== -1) {
                      link="uyuni.mp3";
                      title="Uyuni";
                      urlLink="https://open.spotify.com/track/3Jtl40mdpQ5ELTtDbpMjfI?si=K-giLAGxSEqs3ZJ5vlk-yg";
                    }
                }
                if (lstStyle.indexOf("electro") !== -1) {
                  if (lstMood.indexOf("triste") !== -1 || lstMood.indexOf("reveur") !== -1) {
                      link="833acres.mp3";
                      title="833 Acres";
                      urlLink="https://open.spotify.com/track/2qDKex1fks2C0ltOt8YPym?si=z1xybWDNQyCjs-6pvJ9e5w";
                    }
                }

            }


            this.setState({selectedType: false});







    }

    handleTypeChange(evt) {this.setState({selectedType: evt.target.value});}




    onLink({urlLink}){
      window.location.href={urlLink};
    }

    handleValidSubmit(event, values) {
    this.setState({values});
    this.toggleModalNested();
    this.handleSound({event, values});
}

    handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }

    handleButton(cat, number){
        if (cat === 0) {
            if (number === 0){
              this.setState(prevState => ({
                isType:{...prevState.isType, chansonActive: false, bothActive:false}}))

              this.setState(prevState => ({
                isType:{...prevState.isType, prodActive: !this.state.isType.prodActive}}))
            }
            if (number === 1){
              this.setState(prevState => ({
                isType:{...prevState.isType, prodActive: false, bothActive:false}}))

              this.setState(prevState => ({
                isType:{...prevState.isType, chansonActive: !this.state.isType.chansonActive}}))
            }
            if (number === 2){
              this.setState(prevState => ({
                isType:{...prevState.isType, prodActive: false, chansonActive:false}}))

              this.setState(prevState => ({
                isType:{...prevState.isType, bothActive: !this.state.isType.bothActive}}))
            }
        }
        if (cat === 1) {
            if (number === 0){
              this.setState(prevState => ({
                isStyle:{...prevState.isStyle, trapActive: !this.state.isStyle.trapActive}}))
            }
            if (number === 1){
              this.setState(prevState => ({
                isStyle:{...prevState.isStyle, cloudActive: !this.state.isStyle.cloudActive}}))
            }
            if (number === 2){
              this.setState(prevState => ({
                isStyle:{...prevState.isStyle, electroActive: !this.state.isStyle.electroActive}}))
            }
            if (number === 3){
              this.setState(prevState => ({
                isStyle:{...prevState.isStyle, houseActive: !this.state.isStyle.houseActive}}))
            }
            if (number === 4){
              this.setState(prevState => ({
                isStyle:{...prevState.isStyle, latinoActive: !this.state.isStyle.latinoActive}}))
            }
        }
        if (cat === 2) {
            if (number === 0){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, chillActive: !this.state.isMood.chillActive}}))
            }
            if (number === 1){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, energiqueActive: !this.state.isMood.energiqueActive}}))
            }
            if (number === 2){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, joyeuxActive: !this.state.isMood.joyeuxActive}}))
            }
            if (number === 3){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, tristeActive: !this.state.isMood.tristeActive}}))
            }
            if (number === 4){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, enerveActive: !this.state.isMood.enerveActive}}))
            }
            if (number === 5){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, reveurActive: !this.state.isMood.reveurActive}}))
            }
            if (number === 6){
              this.setState(prevState => ({
                isMood:{...prevState.isMood, normalActive: !this.state.isMood.normalActive}}))
            }
        }

      }



  render(){
    var classProd = this.state.isType.prodActive ? 'active' : '';
    var classChanson = this.state.isType.chansonActive ? 'active' : '';
    var classBoth = this.state.isType.bothActive ? 'active' : '';

    var classTrap = this.state.isStyle.trapActive ? 'active' : '';
    var classCloud = this.state.isStyle.cloudActive ? 'active' : '';
    var classElectro = this.state.isStyle.electroActive ? 'active' : '';
    var classHouse = this.state.isStyle.houseActive ? 'active' : '';
    var classLatino = this.state.isStyle.latinoActive ? 'active' : '';

    var classChill = this.state.isMood.chillActive ? 'active' : '';
    var classEnergique = this.state.isMood.energiqueActive ? 'active' : '';
    var classJoyeux = this.state.isMood.joyeuxActive ? 'active' : '';
    var classTriste = this.state.isMood.tristeActive ? 'active' : '';
    var classEnerve = this.state.isMood.enerveActive ? 'active' : '';
    var classReveur = this.state.isMood.reveurActive ? 'active' : '';
    var classNormal = this.state.isMood.normalActive ? 'active' : '';
    return(
      <div>
         <Button color="dark" size="lg" className="my-5 p-4" onClick={this.toggleModal}>
          <h4>Let's go !</h4> <span className="fa fa-headphones fa-lg"></span>
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <ModalHeader toggle={this.toggleModal}>Choisissez une des catégories</ModalHeader>
          <ModalBody>


            <h5>Tu recherches</h5>
            <AvRadioGroup inline name="radioType" label="" required errorMessage="Choisissez un!">
                   <AvRadio className={"btn btn-outline-dark " + classProd } customInput label="Prod" value="prod" onChange={() => this.handleButton(0,0)}/>
                   <AvRadio className={"btn btn-outline-dark " + classChanson } customInput label="Chanson" value="chanson" onChange={() => this.handleButton(0,1)}/>
                   <AvRadio className={"btn btn-outline-dark " + classBoth } customInput label="N'importe" value="both" onChange={() => this.handleButton(0,2)}/>
            </AvRadioGroup>

                <h5>Le style ?</h5>
                <AvCheckboxGroup inline name="checkboxStyle" label="" required validate={{max: {value: 2}}} errorMessage="Choisissez au moins 1 et pas plus de 2!">
                      <AvCheckbox className={"btn btn-outline-secondary " + classTrap }  customInput label="Trap" value="trap" onChange={() => this.handleButton(1,0)}/>
                      <AvCheckbox className={"btn btn-outline-info " + classCloud  } customInput label="Cloud" value="cloud" onChange={() => this.handleButton(1,1)}/>
                      <AvCheckbox className={"btn btn-outline-success " + classElectro } customInput label="Electro" value="electro" onChange={() => this.handleButton(1,2)}/>
                      <AvCheckbox className={"btn btn-outline-info button-hotyellow " + classHouse } customInput label="House" value="house" onChange={() => this.handleButton(1,3)}/>
                      <AvCheckbox className={"btn btn-outline-info button-hellred " + classLatino } customInput label="Latino" value="latino" onChange={() => this.handleButton(1,4)}/>
                </AvCheckboxGroup>

                  <h5>Le mood ?</h5>
                  <AvCheckboxGroup inline name="checkboxMood" label="" required validate={{max: {value: 3}}} errorMessage="Choisissez au moins 1 et pas plus de 3!">
                        <AvCheckbox className={"btn btn-outline-info button-turquoise " + classChill } customInput label="Chill" value="chill" onChange={() => this.handleButton(2,0)}/>
                        <AvCheckbox className={"btn btn-outline-primary " + classEnergique } customInput label="Énergique" value="energique" onChange={() => this.handleButton(2,1)}/>
                        <AvCheckbox className={"btn btn-outline-success " + classJoyeux } customInput label="Joyeux" value="joyeux" onChange={() => this.handleButton(2,2)}/>
                        <AvCheckbox className={"btn btn-outline-secondary button-darkblue " + classTriste } customInput label="Triste" value="triste" onChange={() => this.handleButton(2,3)}/>
                        <AvCheckbox className={"btn btn-outline-info button-hellred " + classEnerve } customInput label="Énervé" value="enerve" onChange={() => this.handleButton(2,4)}/>
                        <AvCheckbox className={"btn btn-outline-secondary button-purple " + classReveur } customInput label="Rêveur" value="reveur" onChange={() => this.handleButton(2,5)}/>
                        <AvCheckbox className={"btn btn-outline-secondary button-hotyellow " + classNormal } customInput label="Normal" value="normal" onChange={() => this.handleButton(2,6)}/>
                  </AvCheckboxGroup>


          </ModalBody>
          <ModalFooter>
          <Button type="submit" name="submit" color="success">Écoutez</Button>
         <Button color="secondary" onClick={this.toggleModal}>Close</Button>
         </ModalFooter>
          </AvForm>
          </Modal>
          <Modal isOpen={this.state.isModalNestedOpen} toggle={this.toggleModalNested}>

          <ModalAudio title={title} link={link} urlLink={urlLink}/>

          <ModalFooter>
          <Button color="secondary" onClick={this.toggleModalNested}>Close</Button>
          </ModalFooter>
          </Modal>

        </div>
      );
    }
  }

export default StudioForm;
