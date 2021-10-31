import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


export default class DeedofGift extends Component {

    state = {
        step: 1,

        // Step 1
        countryOfGift: "Nigeria",
        nameOfGift: "",
        stateOfGift: "",
        revokeThisGift: "",
        dateOfTransfer: "",

        // Step 2
        typeOfDonor: "Individual",
        donorFullName: "",        
        donorCity: "",
        donorZipCode: "",
        donorState: "",
        donorAddress: "",

        // Step 3
        typeOfDonee: "Individual",
        doneeFullName: "",
        doneeCity: "",
        doneeZipCode: "",
        doneeState: "",
        doneeAddress: "",
        relationshipDonorDonee: "Husband",
        otherRelationshipDonorDonee: "",
        isDoneeMinor: "No",
        doneeGuardianName: "",
        doneeGuardianAddress: "",

        // Step 4
        step4AssetsCount: 1,
        step4Assets: [{
            typeOfGift: "Real Property",
            giftPossessionTime: "Immediate",
            descriptionOfGift: "",
            purposeOfGift: "",
            specificDate: "",
            monetaryValue: 0,
            documentLocation: "",
            assetFile: null,
            assetFileName: ""
        }],

        // Step 5
        additionalClauses: [""],
        clausesCount: 1,

        // Step 6
        agentFullName: "",
        agentCity: "",
        agentZipCode: "",
        agentState: "",
        agentAddress: "",
        addAlternateAgent: "No",
        alternateAgentFullName: "",
        alternateAgentCity: "",   
        alternateAgentZipCode: "",   
        alternateAgentState: "",   
        alternateAgentAddress: "",   
        
        // Step 7
        selectedFile: null,
        signature: null,
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = (input, e) => {
        this.setState({ [input]: e.target.value });
    }

    changeState = (input, val) => {
        this.setState({ [input]: val });
    }

    onFileChange = (input, val) => {
        this.setState({ [input]: val });      
    }

    render() {

        const { step } = this.state;

        const { countryOfGift, nameOfGift, stateOfGift, revokeThisGift, dateOfTransfer,
                typeOfDonor, donorFullName, donorCity, donorZipCode, donorState, donorAddress,
                typeOfDonee, doneeFullName, doneeCity, doneeZipCode, doneeState, doneeAddress, relationshipDonorDonee, otherRelationshipDonorDonee, isDoneeMinor, doneeGuardianName, doneeGuardianAddress, 
                step4AssetsCount, step4Assets, 
                additionalClauses, clausesCount,
                agentFullName, agentCity, agentZipCode, agentState, agentAddress, addAlternateAgent, alternateAgentFullName, alternateAgentCity, alternateAgentZipCode, alternateAgentState, alternateAgentAddress, 
                selectedFile, signature } = this.state;

        const values = { countryOfGift, nameOfGift, stateOfGift, revokeThisGift, dateOfTransfer,
                        typeOfDonor, donorFullName, donorCity, donorZipCode, donorState, donorAddress, 
                        typeOfDonee, doneeFullName, doneeCity, doneeZipCode, doneeState, doneeAddress, relationshipDonorDonee, otherRelationshipDonorDonee, isDoneeMinor, doneeGuardianName, doneeGuardianAddress, 
                        step4AssetsCount, step4Assets,
                        additionalClauses, clausesCount,
                        agentFullName, agentCity, agentZipCode, agentState, agentAddress, addAlternateAgent, alternateAgentFullName, alternateAgentCity, alternateAgentZipCode, alternateAgentState, alternateAgentAddress,
                        selectedFile, signature };

        switch (step) {
            case 1: 
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <div className="back-button">
                      <Link to="/individualuser/home"><FaArrowLeft /></Link>
                    </div>
                    <Step1 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                )
            case 2: 
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step2 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                )
            case 3:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step3 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                )
            case 4:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step4 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} onFileChange={this.onFileChange} values={values} />
                    </div>
                )    
            case 5:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step5 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                    </div>)
            case 6:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step6 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                    </div> )
            case 7:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step7 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} onFileChange={this.onFileChange} values={values} />
                    </div>)                             
            default: 
               // do nothing
        }
    }
}
