import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Step1MuslimCodicil from "./Step1MuslimCodicil";
import Step2MuslimCodicil from "./Step2MuslimCodicil";
import Step3MuslimCodicil from "./Step3MuslimCodicil";
import Step4MuslimCodicil from "./Step4MuslimCodicil";
import Step5MuslimCodicil from "./Step5MuslimCodicil";
import Step6MuslimCodicil from "./Step6MuslimCodicil";
import Step7MuslimCodicil from "./Step7MuslimCodicil";
import Step8MuslimCodicil from "./Step8MuslimCodicil";
import Step9MuslimCodicil from "./Step9MuslimCodicil";
import Step10MuslimCodicil from "./Step10MuslimCodicil";
import Step11MuslimCodicil from "./Step11MuslimCodicil";
import Step12MuslimCodicil from "./Step12MuslimCodicil";
import Step13MuslimCodicil from "./Step13MuslimCodicil";
import Step14MuslimCodicil from "./Step14MuslimCodicil";
import Step15MuslimCodicil from "./Step15MuslimCodicil";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default class MuslimCodicil extends Component {
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

  componentDidMount() {
    axios
      .post(process.env.REACT_APP_API_URL + "/managewill/getWill", {
        willID: new URLSearchParams(this.props.history.location.search).get(
          "will_id"
        ),
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
        this.setState({ wivesDetails: will.wivesDetails });

        // step 4
        this.setState({ children: will.children });

        // step 5
        this.setState({ otherFamilyMembers: will.otherFamilyMembers });

        // step 6
        this.setState({ guardianDetails: will.guardianDetails });

        // step 7 & 9
        for (let i = 0; i < will.step7AssetDetails.length; i++) {
          will.step7AssetDetails[i].assetFileName = "";
        }
        this.setState({ step7AssetDetails: will.step7AssetDetails });

        // step 8
        this.setState({ step8Question: will.step8Question });
        this.setState({ step8ExecutorDetails: will.step8ExecutorDetails });

        // step 10
        this.setState({ priorityArray: will.priorityArray });

        // step 11
        this.setState({
          otherTransferBeneficiary: will.otherTransferBeneficiary,
        });
        this.setState({ otherGiftMadeTo: will.otherGiftMadeTo });
        this.setState({ otherName: will.otherName });
        this.setState({ otherRelationship: will.otherRelationship });
        this.setState({ otherAddress: will.otherAddress });
        this.setState({ otherContest: will.otherContest });
        this.setState({ otherTrusteeName: will.otherTrusteeName });
        this.setState({ otherTrusteeAdd: will.otherTrusteeAdd });

        // step 12
        this.setState({ petCaretaker: will.petCaretaker });
        this.setState({ petCareTakerName: will.petCareTakerName });
        this.setState({ petAddress: will.petAddress });

        // step 13
        this.setState({ burialDescription: will.burialDescription });

        // step 14
        this.setState({ additionalInstructions: will.additionalInstructions });
        this.setState({ isLiterate: will.isLiterate });
        this.setState({ additionalName: will.additionalName });
        this.setState({ additionalAddress: will.additionalAddress });

        // step 15
        this.setState({ signingDetails: will.signingDetails });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    formData.append("wivesDetails", JSON.stringify(this.state.wivesDetails));

    // step 4
    formData.append("children", JSON.stringify(this.state.children));

    // step 5
    formData.append(
      "otherFamilyMembers",
      JSON.stringify(this.state.otherFamilyMembers)
    );

    // step 6
    formData.append(
      "guardianDetails",
      JSON.stringify(this.state.guardianDetails)
    );

    // step 7 & 9
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
        formData.append(filename, this.state.step7AssetDetails[i].assetFile);
      }
    }
    formData.append(
      "step7AssetDetails",
      JSON.stringify(this.state.step7AssetDetails)
    );

    // step 8
    formData.append("step8Question", this.state.step8Question);
    formData.append(
      "step8ExecutorDetails",
      JSON.stringify(this.state.step8ExecutorDetails)
    );

    // step 10
    formData.append("priorityArray", JSON.stringify(this.state.priorityArray));

    // step 11
    formData.append(
      "otherTransferBeneficiary",
      this.state.otherTransferBeneficiary
    );
    formData.append("otherGiftMadeTo", this.state.otherGiftMadeTo);
    formData.append("otherName", this.state.otherName);
    formData.append("otherRelationship", this.state.otherRelationship);
    formData.append("otherAddress", this.state.otherAddress);
    formData.append("otherContest", this.state.otherContest);
    formData.append("otherTrusteeName", this.state.otherTrusteeName);
    formData.append("otherTrusteeAdd", this.state.otherTrusteeAdd);

    // step 12
    formData.append("petCaretaker", this.state.petCaretaker);
    formData.append("petCareTakerName", this.state.petCareTakerName);
    formData.append("petAddress", this.state.petAddress);

    // step 13
    formData.append("burialDescription", this.state.burialDescription);

    // step 14
    formData.append(
      "additionalInstructions",
      JSON.stringify(this.state.additionalInstructions)
    );
    formData.append("isLiterate", this.state.isLiterate);
    formData.append("additionalName", this.state.additionalName);
    formData.append("additionalAddress", this.state.additionalAddress);

    // step 15
    formData.append(
      "signingDetails",
      JSON.stringify(this.state.signingDetails)
    );

    formData.append("userID", localStorage.getItem("id"));
    formData.append(
      "willID",
      new URLSearchParams(this.props.history.location.search).get("will_id")
    );

    axios
      .post(
        process.env.REACT_APP_API_URL + "/managewill/updateWill_muslim",
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
    };

    switch (step) {
      case 0:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
            <div className="back-button">
              <Link to="/products/managewill"><FaArrowLeft /></Link>
            </div>
          <Step1MuslimCodicil
            updateAndClose={this.updateAndClose}
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
          <Step2MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 2:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step3MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 3:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step4MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );

      case 4:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step5MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 5:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step6MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 6:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
            <Step7MuslimCodicil 
            updateAndClose={this.updateAndClose}
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
          <Step8MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 8:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step9MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 9:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step10MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 10:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step11MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 11:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step12MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 12:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step13MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 13:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step14MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
      case 14:
        return (
          <div className="global-container" style={{backgroundAttachment:"fixed"}}>
          <Step15MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            onFileChange={this.onFileChange}
            values={values}
          /></div>
        );
    }
  }
}
