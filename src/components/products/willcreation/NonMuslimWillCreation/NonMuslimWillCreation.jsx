import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Step1NonMuslim from "./Step1NonMuslim";
import Step2NonMuslim from "./Step2NonMuslim";
import Step3NonMuslim from "./Step3NonMuslim";
import Step4NonMuslim from "./Step4NonMuslim";
import Step5NonMuslim from "./Step5NonMuslim";
import Step6NonMuslim from "./Step6NonMuslim";
import Step7NonMuslim from "./Step7NonMuslim";
import Step8NonMuslim from "./Step8NonMuslim";
import Step9NonMuslim from "./Step9NonMuslim";
import Step10NonMuslim from "./Step10NonMuslim";
import Step11NonMuslim from "./Step11NonMuslim";
import Step12NonMuslim from "./Step12NonMuslim";
import Step13NonMuslim from "./Step13NonMuslim";
import Step14NonMuslim from "./Step14NonMuslim";
import Step15NonMuslim from "./Step15NonMuslim";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default class NonMuslimWillCreation extends Component {
    state = {
        step: new URLSearchParams(this.props.location.search).get("makingFor")
            ? 0
            : 1,

        // pre
        makingFor: new URLSearchParams(this.props.location.search).get(
            "makingFor"
        ),

        // step 1
        step1Prefix: "",
        step1FirstName: "",
        step1MiddleName: "",
        step1LastName: "",
        step1Suffix: "",
        step1Gender: "",
        step1Address: "",
        step1Town: "",
        step1Country: "",
        step1County: "",
        step1PhoneNumber: "",
        step1Email: "",
        step1MaritalStatus: "",

        // step 2
        prefix: "",
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
        gender: "",
        address: "",
        town: "",
        country: "",
        county: "",
        phoneNumber: "",
        email: "",
        maritalStatus: "",

        // step 3
        step3ExecutorDetails: [
            {
                name: "",
                relationship: "",
                address: "",
                town: "",
                state: "",
                email: "",
                phoneNumber: "",
                willExecutorBeRenumerated: "No",
                executorRenumeration: "",
            },
        ],

        // step 4
        wivesDetails: [
            {
                index: 1,
                name: "",
                dob: "",
                city: "",
                zipCode: "",
                state: "",
                address: "",
            },
        ],

        // step 5
        step5Children: [
            {
                index: 1,
                name: "",
                dob: "",
            },
        ],

        // step 6
        step6GuardianDetails: [
            {
                index: 1,
                name: "",
                relationship: "",
                address: "",
                town: "",
                country: "",
            },
        ],

        // step 7 & step 8
        step7AssetDetails: [
            {
                assetID: uuidv4(),
                index: 1,
                assetType: "",
                desc: "",
                value: "",
                tenant: "",
                documentLocation: "",
                assetFile: null,
                assetFileName: "",
                beneficiaries: [
                    {
                        type: "",
                        name: "",
                        address: "",
                        email: "",
                        phoneNumber: "",
                        percentage: "",
                    },
                ],
            },
        ],

        // step 9
        doYouWantToDistributeEqually: "Yes",
        step9specificIndividuals: [
            {
                index: 1,
                name: "",
                address: "",
                percentage: "",
                type: "",
            },
        ],

        // step 10
        transferBeneficiary: "",
        giftMadeTo: "",
        trusteeName: "",
        trusteeAddress: "",
        name: "",
        relationship: "",
        step10Address: "",
        restriction: "",

        // step 11
        // step11AnyGiftToPet: "No",
        // step11Name: "",
        // step11Desc: "",
        // step11Amount: "",
        step11AppointCareTaker: "No",
        step11CareTakerName: "",
        step11CareTakerAddress: "",

        // step 12
        burialDesc: "",

        // step 13
        step13Desc: [
            {
                index: 1,
                desc: "",
            },
        ],
        step13IsLiterate: "Yes",
        step13LiterateName: "",
        step13LiterateAddress: "",

        // step 14
        step14Witness: [
            {
                index: 1,
                name: "",
            },
        ],

        // step 15
        selfie1: null,
        selfie2: null,
        selfie3: null,
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    handleChange = (input, e) => {
        this.setState({ [input]: e.target.value });
    };

    changeState = (input, val) => {
        this.setState({ [input]: val });
    };

    onFileChange = (input, val) => {
        this.setState({ [input]: val });
    };

    render() {
        const { step } = this.state;

        const {
            makingFor,
            step1Prefix,
            step1FirstName,
            step1MiddleName,
            step1LastName,
            step1Suffix,
            step1Gender,
            step1Address,
            step1Town,
            step1Country,
            step1County,
            step1PhoneNumber,
            step1Email,
            step1MaritalStatus,
            prefix,
            firstName,
            middleName,
            lastName,
            suffix,
            gender,
            address,
            town,
            country,
            county,
            phoneNumber,
            email,
            maritalStatus,
            step3ExecutorDetails,
            wivesDetails,
            step5Children,
            step6GuardianDetails,
            step7AssetDetails,
            doYouWantToDistributeEqually,
            step9specificIndividuals,
            transferBeneficiary,
            giftMadeTo,
            trusteeName,
            trusteeAddress,
            name,
            relationship,
            step10Address,
            restriction,
            // step11AnyGiftToPet,
            // step11Name,
            // step11Desc,
            // step11Amount,
            step11AppointCareTaker,
            step11CareTakerName,
            step11CareTakerAddress,
            burialDesc,
            step13Desc,
            step13IsLiterate,
            step13LiterateName,
            step13LiterateAddress,
            step14Witness,
            selfie1,
            selfie2,
            selfie3,
        } = this.state;

        const values = {
            makingFor,
            step1Prefix,
            step1FirstName,
            step1MiddleName,
            step1LastName,
            step1Suffix,
            step1Gender,
            step1Address,
            step1Town,
            step1Country,
            step1County,
            step1PhoneNumber,
            step1Email,
            step1MaritalStatus,
            prefix,
            firstName,
            middleName,
            lastName,
            suffix,
            gender,
            address,
            town,
            country,
            county,
            phoneNumber,
            email,
            maritalStatus,
            step3ExecutorDetails,
            wivesDetails,
            step5Children,
            step6GuardianDetails,
            step7AssetDetails,
            doYouWantToDistributeEqually,
            step9specificIndividuals,
            transferBeneficiary,
            giftMadeTo,
            trusteeName,
            trusteeAddress,
            name,
            relationship,
            step10Address,
            restriction,
            // step11AnyGiftToPet,
            // step11Name,
            // step11Desc,
            // step11Amount,
            step11AppointCareTaker,
            step11CareTakerName,
            step11CareTakerAddress,
            burialDesc,
            step13Desc,
            step13IsLiterate,
            step13LiterateName,
            step13LiterateAddress,
            step14Witness,
            selfie1,
            selfie2,
            selfie3,
        };

        switch (step) {
            case 0:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <div className="back-button">
                      <Link to="/individualProducts"><FaArrowLeft /></Link>
                    </div>
                    <Step1NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 1:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step2NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 2:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step3NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 3:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step4NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 4:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step5NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 5:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step6NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 6:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step7NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 7:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step8NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 8:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step9NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 9:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step10NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 10:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step11NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 11:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step12NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 12:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step13NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 13:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step14NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
            case 14:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step15NonMuslim
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                    />
                    </div>
                );
        }
    }
}
