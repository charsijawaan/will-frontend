import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Step1Muslim from "./Step1Muslim";
import Step2Muslim from "./Step2Muslim";
import Step3Muslim from "./Step3Muslim";
import Step4Muslim from "./Step4Muslim";
import Step5Muslim from "./Step5Muslim";
import Step6Muslim from "./Step6Muslim";
import Step7Muslim from "./Step7Muslim";
import Step8Muslim from "./Step8Muslim";
import Step9Muslim from "./Step9Muslim";
import Step10Muslim from "./Step10Muslim";
import Step11Muslim from "./Step11Muslim";
import Step12Muslim from "./Step12Muslim";
import Step13Muslim from "./Step13Muslim";
import Step14Muslim from "./Step14Muslim";
import Step15Muslim from "./Step15Muslim";
import Step16Muslim from "./Step16Muslim";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default class MuslimWillCreation extends Component {
  state = {
    step: new URLSearchParams(this.props.location.search).get("makingFor")
      ? 0
      : 1,

    makingFor: new URLSearchParams(this.props.location.search).get("makingFor"),

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

    // step 4
    children: [
      {
        index: 1,
        name: "",
        dob: "",
      },
    ],

    // step 5
    otherFamilyMembers: [
      {
        index: 1,
        name: "",
        city: "",
        zipCode: "",
        state: "",
        address: "",
        relationship: "",
      },
    ],

    // step 6
    guardianDetails: [
      {
        index: 1,
        name: "",
        relationship: "",
        address: "",
        town: "",
        country: "",
      },
    ],

    // step 7 & 9
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
          },
        ],
      },
    ],

    // step 8
    step8Question: "Yes",
    step8ExecutorDetails: [
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

    // step 10
    priorityArray: [
      {
        index: 1,
        text: "I direct that my executor apply first, the assets of my estate to the payment the expenses associated with my burial, to my medical expenses, to the repayment of my debts, to legal and administrative expenses, including taxes, which are associated with my estate.",
      },
      {
        index: 2,
        text: "I direct that my executor allocate and distribute from the residue of my estate, charitable contributions as outlined in Article 8, [Charitable Contributions and Testamentary Transfer].",
      },
      {
        index: 3,
        text: "I direct that my executor allocate and distribute from the balance of the residue of my estate, to my legitimate Muslim heirs, as outlined under Article 9, [Distribution of Residue of Estate to Muslim Heirs].",
      },
    ],

    // step 11
    otherTransferBeneficiary: "",
    otherGiftMadeTo: "",
    otherName: "",
    otherRelationship: "",
    otherAddress: "",
    otherContest: "",
    otherTrusteeName: "",
    otherTrusteeAdd: "",

    // step 12
    petCaretaker: "",
    petCareTakerName: "",
    petAddress: "",

    // step 13
    burialDescription: "",

    // step 14
    additionalInstructions: [
      {
        index: 1,
        desc: "",
      },
    ],
    isLiterate: "",
    additionalName: "",
    additionalAddress: "",

    // step 15
    signingDetails: [
      {
        index: 1,
        name: "",
      },
      {
        index: 2,
        name: "",
      },
    ],

    // step 16
    selfie1: null,
    selfie2: null,
    selfie3: null,
  };

  prevStep = () => {
    const { step } = this.state;
    if (step === 12 && this.state.step8Question === "No") {
      this.setState({ step: step - 5 });
    } else {
      this.setState({ step: step - 1 });
    }
  };

  nextStep = () => {
    const { step } = this.state;
    if (step === 7 && this.state.step8Question === "No") {
      this.setState({ step: step + 5 });
    } else {
      this.setState({ step: step + 1 });
    }
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
      wivesDetails,
      children,
      otherFamilyMembers,
      guardianDetails,
      step7AssetDetails,
      step8Question,
      step8ExecutorDetails,
      priorityArray,
      otherTransferBeneficiary,
      otherGiftMadeTo,
      otherName,
      otherRelationship,
      otherAddress,
      otherContest,
      otherTrusteeName,
      otherTrusteeAdd,
      petCaretaker,
      petCareTakerName,
      petAddress,
      burialDescription,
      additionalInstructions,
      isLiterate,
      additionalName,
      additionalAddress,
      signingDetails,
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
      wivesDetails,
      children,
      otherFamilyMembers,
      guardianDetails,
      step7AssetDetails,
      step8Question,
      step8ExecutorDetails,
      priorityArray,
      otherTransferBeneficiary,
      otherGiftMadeTo,
      otherName,
      otherRelationship,
      otherAddress,
      otherContest,
      otherTrusteeName,
      otherTrusteeAdd,
      petCaretaker,
      petCareTakerName,
      petAddress,
      burialDescription,
      additionalInstructions,
      isLiterate,
      additionalName,
      additionalAddress,
      signingDetails,
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
          <Step1Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 1:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step2Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 2:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step3Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 3:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step4Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 4:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step5Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 5:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step6Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 6:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step7Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 7:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step8Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 8:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step9Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 9:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step10Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 10:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step11Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 11:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step12Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
          </div>
        );
      case 12:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step13Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 13:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step14Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 14:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step15Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
      case 15:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step16Muslim
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          />
          </div>
        );
    }
  }
}
