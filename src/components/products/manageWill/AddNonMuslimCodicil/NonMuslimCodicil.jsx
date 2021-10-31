import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Step1NonMuslimCodicil from "./Step1NonMuslimCodicil";
import Step2NonMuslimCodicil from "./Step2NonMuslimCodicil";
import Step3NonMuslimCodicil from "./Step3NonMuslimCodicil";
import Step4NonMuslimCodicil from "./Step4NonMuslimCodicil";
import Step5NonMuslimCodicil from "./Step5NonMuslimCodicil";
import Step6NonMuslimCodicil from "./Step6NonMuslimCodicil";
import Step7NonMuslimCodicil from "./Step7NonMuslimCodicil";
import Step8NonMuslimCodicil from "./Step8NonMuslimCodicil";
import Step9NonMuslimCodicil from "./Step9NonMuslimCodicil";
import Step10NonMuslimCodicil from "./Step10NonMuslimCodicil";
import Step11NonMuslimCodicil from "./Step11NonMuslimCodicil";
import Step12NonMuslimCodicil from "./Step12NonMuslimCodicil";
import Step13NonMuslimCodicil from "./Step13NonMuslimCodicil";
import Step14NonMuslimCodicil from "./Step14NonMuslimCodicil";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default class NonMuslimCodicil extends Component {
    state = {
        step: 1,

        // pre
        makingFor: "",

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

    updateAndClose = (e) => {
        e.preventDefault();
        let formData = new FormData();

        // pre
        formData.append("makingFor", this.state.makingFor);

        // step 1
        formData.append("step1Prefix", this.state.step1Prefix);
        formData.append("step1FirstName", this.state.step1FirstName);
        formData.append("step1MiddleName", this.state.step1MiddleName);
        formData.append("step1LastName", this.state.step1LastName);
        formData.append("step1Suffix", this.state.step1Suffix);
        formData.append("step1Gender", this.state.step1Gender);
        formData.append("step1Address", this.state.step1Address);
        formData.append("step1Town", this.state.step1Town);
        formData.append("step1Country", this.state.step1Country);
        formData.append("step1County", this.state.step1County);
        formData.append("step1PhoneNumber", this.state.step1PhoneNumber);
        formData.append("step1Email", this.state.step1Email);
        formData.append("step1MaritalStatus", this.state.step1MaritalStatus);

        // step 2
        formData.append("prefix", this.state.prefix);
        formData.append("firstName", this.state.firstName);
        formData.append("middleName", this.state.middleName);
        formData.append("lastName", this.state.lastName);
        formData.append("suffix", this.state.suffix);
        formData.append("gender", this.state.gender);
        formData.append("address", this.state.address);
        formData.append("town", this.state.town);
        formData.append("country", this.state.country);
        formData.append("county", this.state.county);
        formData.append("phoneNumber", this.state.phoneNumber);
        formData.append("email", this.state.email);
        formData.append("maritalStatus", this.state.maritalStatus);

        // step 3
        formData.append(
            "step3ExecutorDetails",
            JSON.stringify(this.state.step3ExecutorDetails)
        );

        // step 4
        formData.append(
            "wivesDetails",
            JSON.stringify(this.state.wivesDetails)
        );

        // step 5
        formData.append(
            "step5Children",
            JSON.stringify(this.state.step5Children)
        );

        // step 6
        formData.append(
            "step6GuardianDetails",
            JSON.stringify(this.state.step6GuardianDetails)
        );

        // step 7 & 8
        for (let i = 0; i < this.state.step7AssetDetails.length; i++) {
            if (this.state.step7AssetDetails[i].assetFile) {
                let fileEXT = this.state.step7AssetDetails[i].assetFile?.name
                    .split(".")
                    .pop();
                let filename =
                    this.state.step7AssetDetails[i].assetType +
                    " " +
                    this.state.step7AssetDetails[i].documentLocation +
                    "." +
                    fileEXT;
                this.state.step7AssetDetails[i].assetFileName = filename;
                formData.append(
                    filename,
                    this.state.step7AssetDetails[i].assetFile
                );
            }
        }
        formData.append(
            "step7AssetDetails",
            JSON.stringify(this.state.step7AssetDetails)
        );

        // step 9
        formData.append(
            "doYouWantToDistributeEqually",
            this.state.doYouWantToDistributeEqually
        );
        formData.append(
            "step9specificIndividuals",
            JSON.stringify(this.state.step9specificIndividuals)
        );

        // step 10
        formData.append("transferBeneficiary", this.state.transferBeneficiary);
        formData.append("giftMadeTo", this.state.giftMadeTo);
        formData.append("trusteeName", this.state.trusteeName);
        formData.append("trusteeAddress", this.state.trusteeAddress);
        formData.append("name", this.state.name);
        formData.append("relationship", this.state.relationship);
        formData.append("step10Address", this.state.step10Address);
        formData.append("restriction", this.state.restriction);

        // step 11
        // formData.append("step11AnyGiftToPet", this.state.step11AnyGiftToPet);
        // formData.append("step11Name", this.state.step11Name);
        // formData.append("step11Desc", this.state.step11Desc);
        // formData.append("step11Amount", this.state.step11Amount);
        formData.append(
            "step11AppointCareTaker",
            this.state.step11AppointCareTaker
        );
        formData.append("step11CareTakerName", this.state.step11CareTakerName);
        formData.append(
            "step11CareTakerAddress",
            this.state.step11CareTakerAddress
        );

        // step 12
        formData.append("burialDesc", this.state.burialDesc);

        // step 13
        formData.append("step13Desc", JSON.stringify(this.state.step13Desc));
        formData.append("step13IsLiterate", this.state.step13IsLiterate);
        formData.append("step13LiterateName", this.state.step13LiterateName);
        formData.append(
            "step13LiterateAddress",
            this.state.step13LiterateAddress
        );

        // step 14
        formData.append(
            "step14Witness",
            JSON.stringify(this.state.step14Witness)
        );

        formData.append("userID", localStorage.getItem("id"));
        formData.append(
            "willID",
            new URLSearchParams(this.props.history.location.search).get(
                "will_id"
            )
        );

        axios
            .post(
                process.env.REACT_APP_API_URL + "/managewill/updateWill",
                formData
            )
            .then((response) => {
                if (response.data.msg === "Success") {
                    window.location.href = "/products/managewill";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    componentDidMount() {
        axios
            .post(process.env.REACT_APP_API_URL + "/managewill/getWill", {
                willID: new URLSearchParams(
                    this.props.history.location.search
                ).get("will_id"),
            })
            .then((response) => {
                var will = response.data.will;

                // pre
                this.setState({ makingFor: will.makingFor });
                if (this.state.makingFor === "Yes") {
                    this.setState({ step: 0 });
                } else {
                    this.setState({ step: 1 });
                }

                // step 1
                this.setState({ step1Prefix: will.step1Prefix });
                this.setState({ step1FirstName: will.step1FirstName });
                this.setState({ step1MiddleName: will.step1MiddleName });
                this.setState({ step1LastName: will.step1LastName });
                this.setState({ step1Suffix: will.step1Suffix });
                this.setState({ step1Gender: will.step1Gender });
                this.setState({ step1Address: will.step1Address });
                this.setState({ step1Town: will.step1Town });
                this.setState({ step1Country: will.step1Country });
                this.setState({ step1County: will.step1County });
                this.setState({ step1PhoneNumber: will.step1PhoneNumber });
                this.setState({ step1Email: will.step1Email });
                this.setState({ step1MaritalStatus: will.step1MaritalStatus });

                // step 2
                this.setState({ prefix: will.prefix });
                this.setState({ firstName: will.firstName });
                this.setState({ middleName: will.middleName });
                this.setState({ lastName: will.lastName });
                this.setState({ suffix: will.suffix });
                this.setState({ gender: will.gender });
                this.setState({ address: will.address });
                this.setState({ town: will.town });
                this.setState({ country: will.country });
                this.setState({ county: will.county });
                this.setState({ phoneNumber: will.phoneNumber });
                this.setState({ email: will.email });
                this.setState({ maritalStatus: will.maritalStatus });

                // step 3
                this.setState({
                    step3ExecutorDetails: will.step3ExecutorDetails,
                });

                // step 4
                this.setState({ wivesDetails: will.wivesDetails });

                // step 5
                this.setState({ step5Children: will.step5Children });

                // step 6
                this.setState({
                    step6GuardianDetails: will.step6GuardianDetails,
                });

                // step 7 & 8
                for (let i = 0; i < will.step7AssetDetails.length; i++) {
                    will.step7AssetDetails[i].assetFileName = "";
                }
                this.setState({ step7AssetDetails: will.step7AssetDetails });

                // step 9
                this.setState({
                    doYouWantToDistributeEqually:
                        will.doYouWantToDistributeEqually,
                });
                this.setState({ step1Prefix: will.step1Prefix });

                // step 10
                this.setState({
                    transferBeneficiary: will.transferBeneficiary,
                });
                this.setState({ giftMadeTo: will.giftMadeTo });
                this.setState({ trusteeName: will.trusteeName });
                this.setState({ trusteeAddress: will.trusteeAddress });
                this.setState({ name: will.name });
                this.setState({ relationship: will.relationship });
                this.setState({ step10Address: will.step10Address });
                this.setState({ restriction: will.restriction });

                // step 11
                // this.setState({ step11AnyGiftToPet: will.step11AnyGiftToPet });
                // this.setState({ step11Name: will.step11Name });
                // this.setState({ step11Desc: will.step11Desc });
                // this.setState({ step11Amount: will.step11Amount });
                this.setState({
                    step11AppointCareTaker: will.step11AppointCareTaker,
                });
                this.setState({
                    step11CareTakerName: will.step11CareTakerName,
                });
                this.setState({
                    step11CareTakerAddress: will.step11CareTakerAddress,
                });

                // step 12
                this.setState({ burialDesc: will.burialDesc });

                // step 13
                this.setState({ step13Desc: will.step13Desc });
                this.setState({ step13IsLiterate: will.step13IsLiterate });
                this.setState({ step13LiterateName: will.step13LiterateName });
                this.setState({
                    step13LiterateAddress: will.step13LiterateAddress,
                });

                // step 14
                this.setState({ step14Witness: will.step14Witness });
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
        };

        switch (step) {
            case 0:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                      <div className="back-button">
                        <Link to="/products/managewill"><FaArrowLeft /></Link>
                      </div>
                    <Step1NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    /> </div>
                );
            case 1:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step2NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 2:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step3NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 3:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step4NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 4:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step5NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 5:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step6NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 6:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step7NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 7:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step8NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 8:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step9NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 9:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step10NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 10:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step11NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 11:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step12NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 12:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step13NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
            case 13:
                return (
                    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
                    <Step14NonMuslimCodicil
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        changeState={this.changeState}
                        onFileChange={this.onFileChange}
                        updateAndClose={this.updateAndClose}
                    />
                    </div>
                );
        }
    }
}
