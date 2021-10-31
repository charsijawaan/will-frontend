import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default class LivingTrust extends Component {
    state = {
        step: 1,

        // Step 1
        areYouOver18: "Yes",
        areYouOfSaneMind: "Yes",
        doYouOwnThePropertyVested: "Yes",
        areYouCreatingARevocableOrIrrevocable: "Yes",

        // Step 2
        name: "",
        city: "",
        zipCode: "",
        state: "",
        address: "",
        phone: "",
        email: "",

        // Step 3
        isTheGrantorNotTheTrustee: "No",
        trusteeType: "Individual",
        organisationConfirmation: false,
        individuaConfirmation: false,
        trusteeName: "",
        trusteeCity: "",
        trusteeZipCode: "",
        trusteeState: "",
        trusteeAddress: "",
        doYouWantCotrustee: "No",
        CotrusteeName: "",
        CotrusteeCity: "",
        CotrusteeZipCode: "",
        CotrusteeState: "",
        CotrusteeAddress: "",
        wouldYouLikeToNameTheTrust: "No",
        trustName: "",

        // Step 4 & 5
        step4Gifts: [
            {
                giftID: uuidv4(),
                assetType: "Real Estate",
                descForIdentifyingAsset: "",
                realEstateAddress: "",
                realEstateType: "",
                financialAccountName: "",
                financialAccountType: "",
                financialAccountNumber: "",
                stockAndBondStockName: "",
                stockAndBondStockNumberOfShares: "",
                stockAndBondStockCertificateNumber: "",
                stockAndBondStockDescription: "",
                stockAndBondBondName: "",
                stockAndBondBondValue: "",
                stockAndBondBondCertificateNumber: "",
                stockAndBondBondDescription: "",
                businessName: "",
                businessDescription: "",
                titleOfContract: "",
                nameOfOtherParty: "",
                dateOfContract: "",
                contarctDescription: "",
                lifeAssuranceName: "",
                lifeAssuranceDescription: "",
                lifeAssuranceNumber: "",
                retirementProceedName: "",
                retirementProceedDescription: "",
                retirementProceedNumber: "",
                personalPropertyQuestion: "Yes",
                personalPropertyDescription: "",
                documentLocation: "",
                assetFile: null,
                assetFileName: "",
                beneficiaries: [
                    {
                        name: "",
                        dob: "",
                    },
                ],
            },
        ],
        step4GiftsCount: 1,

        // Step 7
        step5Charities: [
            {
                nameOfCharity: "",
                gift: {},
            },
        ],
        step5CharityCount: 1,

        // Step 8
        subtrustQuestion: "No",
        subtrustName: "",
        subtrustAge: "",

        // Step 9
        pourOverWillQuestion: "No",

        // Step 10
        additionalInstructionOne: "",
        additionalInstructionTwo: "",

        // Step 11
        remunerationQuestion: "No",
        remunerationInstruction: "",
        remunerationAmount: null,
        remunerationPeriod: "Monthly",
        step11DoYouWantCoTrustee: "No",
        step11RemunerationInstructions: "",
        step11Amount: "",
        step11Period: "",

        // Step 12
        signature: null,
        selfie: null,
        signatureGrantor: null,
        signatureTrustee: null,
        signatureSuccessor: null,
        date: "",
        place: "",
        time: "",
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
            areYouOver18,
            areYouOfSaneMind,
            doYouOwnThePropertyVested,
            areYouCreatingARevocableOrIrrevocable,
            name,
            city,
            zipCode,
            state,
            address,
            phone,
            email,
            isTheGrantorNotTheTrustee,
            trusteeType,
            organisationConfirmation,
            individuaConfirmation,
            trusteeName,
            trusteeCity,
            trusteeZipCode,
            trusteeState,
            trusteeAddress,
            doYouWantCotrustee,
            CotrusteeName,
            CotrusteeCity,
            CotrusteeZipCode,
            CotrusteeState,
            CotrusteeAddress,
            wouldYouLikeToNameTheTrust,
            trustName,
            step4Gifts,
            step4GiftsCount,
            step5Charities,
            step5CharityCount,
            subtrustQuestion,
            subtrustName,
            subtrustAge,
            pourOverWillQuestion,
            additionalInstructionOne,
            additionalInstructionTwo,
            remunerationQuestion,
            remunerationInstruction,
            remunerationAmount,
            remunerationPeriod,
            step11DoYouWantCoTrustee,
            step11RemunerationInstructions,
            step11Amount,
            step11Period,
            signature,
            selfie,
            signatureGrantor,
            signatureTrustee,
            signatureSuccessor,
            date,
            place,
            time,
        } = this.state;

        const values = {
            areYouOver18,
            areYouOfSaneMind,
            doYouOwnThePropertyVested,
            areYouCreatingARevocableOrIrrevocable,
            name,
            city,
            zipCode,
            state,
            address,
            phone,
            email,
            isTheGrantorNotTheTrustee,
            trusteeType,
            organisationConfirmation,
            individuaConfirmation,
            trusteeName,
            trusteeCity,
            trusteeZipCode,
            trusteeState,
            trusteeAddress,
            doYouWantCotrustee,
            CotrusteeName,
            CotrusteeCity,
            CotrusteeZipCode,
            CotrusteeState,
            CotrusteeAddress,
            wouldYouLikeToNameTheTrust,
            trustName,
            step4Gifts,
            step4GiftsCount,
            step5Charities,
            step5CharityCount,
            subtrustQuestion,
            subtrustName,
            subtrustAge,
            pourOverWillQuestion,
            additionalInstructionOne,
            additionalInstructionTwo,
            remunerationQuestion,
            remunerationInstruction,
            remunerationAmount,
            remunerationPeriod,
            step11DoYouWantCoTrustee,
            step11RemunerationInstructions,
            step11Amount,
            step11Period,
            signature,
            selfie,
            signatureGrantor,
            signatureTrustee,
            signatureSuccessor,
            date,
            place,
            time,
        };

        switch (step) {
            case 1:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <div className="back-button">
                      <Link to="/individualuser/home"><FaArrowLeft /></Link>
                    </div>
                    <Step1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );
            case 2:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );
            case 3:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        values={values}
                    />
                    </div>
                );
            case 4:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        onFileChange={this.onFileChange}
                        changeState={this.changeState}
                        values={values}
                    /></div>
                );
            case 5:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        values={values}
                    />
                    </div>
                );
            // case 6:
            //     return (
            //         <Step6
            //             nextStep={this.nextStep}
            //             prevStep={this.prevStep}
            //             handleChange={this.handleChange}
            //             changeState={this.changeState}
            //             values={values}
            //         />
            //     );
            case 6:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step7
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        values={values}
                    />
                    </div>
                );
            case 7:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step8
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );
            case 8:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step9
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );
            case 9:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step10
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );
            case 10:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step11
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );
            case 11:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step12
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        values={values}
                    />
                    </div>
                );

            default:
            // do nothing
        }
    }
}
