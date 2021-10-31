import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";

const Step15NonMuslim = ({
    values,
    nextStep,
    prevStep,
    handleChange,
    changeState,
    onFileChange,
}) => {
    const history = useHistory();
    const submitForm = (e) => {
        e.preventDefault();

        let formData = new FormData();

        // pre
        formData.append("makingFor", values.makingFor);

        // step 1
        formData.append("step1Prefix", values.step1Prefix);
        formData.append("step1FirstName", values.step1FirstName);
        formData.append("step1MiddleName", values.step1MiddleName);
        formData.append("step1LastName", values.step1LastName);
        formData.append("step1Suffix", values.step1Suffix);
        formData.append("step1Gender", values.step1Gender);
        formData.append("step1Address", values.step1Address);
        formData.append("step1Town", values.step1Town);
        formData.append("step1Country", values.step1Country);
        formData.append("step1County", values.step1County);
        formData.append("step1PhoneNumber", values.step1PhoneNumber);
        formData.append("step1Email", values.step1Email);
        formData.append("step1MaritalStatus", values.step1MaritalStatus);

        // step 2
        formData.append("prefix", values.prefix);
        formData.append("firstName", values.firstName);
        formData.append("middleName", values.middleName);
        formData.append("lastName", values.lastName);
        formData.append("suffix", values.suffix);
        formData.append("gender", values.gender);
        formData.append("address", values.address);
        formData.append("town", values.town);
        formData.append("country", values.country);
        formData.append("county", values.county);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("email", values.email);
        formData.append("maritalStatus", values.maritalStatus);

        // step 3
        formData.append(
            "step3ExecutorDetails",
            JSON.stringify(values.step3ExecutorDetails)
        );

        // step 4
        formData.append("wivesDetails", JSON.stringify(values.wivesDetails));

        // step 5
        formData.append("step5Children", JSON.stringify(values.step5Children));

        // step 6
        formData.append(
            "step6GuardianDetails",
            JSON.stringify(values.step6GuardianDetails)
        );

        // step 7 & 8
        for (let i = 0; i < values.step7AssetDetails.length; i++) {
            if (
                values.step7AssetDetails[i].assetFile !== undefined &&
                values.step7AssetDetails[i].assetFile !== null
            ) {
                let fileEXT = values.step7AssetDetails[i].assetFile?.name
                    .split(".")
                    .pop();
                let filename =
                    values.step7AssetDetails[i].assetType +
                    " " +
                    values.step7AssetDetails[i].documentLocation +
                    "." +
                    fileEXT;
                values.step7AssetDetails[i].assetFileName = filename;
                formData.append(
                    filename,
                    values.step7AssetDetails[i].assetFile
                );
            }
        }
        formData.append(
            "step7AssetDetails",
            JSON.stringify(values.step7AssetDetails)
        );

        // step 9
        formData.append(
            "doYouWantToDistributeEqually",
            values.doYouWantToDistributeEqually
        );
        formData.append(
            "step9specificIndividuals",
            JSON.stringify(values.step9specificIndividuals)
        );

        // step 10
        formData.append("transferBeneficiary", values.transferBeneficiary);
        formData.append("giftMadeTo", values.giftMadeTo);
        formData.append("trusteeName", values.trusteeName);
        formData.append("trusteeAddress", values.trusteeAddress);
        formData.append("name", values.name);
        formData.append("relationship", values.relationship);
        formData.append("step10Address", values.step10Address);
        formData.append("restriction", values.restriction);

        // step 11
        // formData.append("step11AnyGiftToPet", values.step11AnyGiftToPet);
        // formData.append("step11Name", values.step11Name);
        // formData.append("step11Desc", values.step11Desc);
        // formData.append("step11Amount", values.step11Amount);
        formData.append(
            "step11AppointCareTaker",
            values.step11AppointCareTaker
        );
        formData.append("step11CareTakerName", values.step11CareTakerName);
        formData.append(
            "step11CareTakerAddress",
            values.step11CareTakerAddress
        );

        // step 12
        formData.append("burialDesc", values.burialDesc);

        // step 13
        formData.append("step13Desc", JSON.stringify(values.step13Desc));
        formData.append("step13IsLiterate", values.step13IsLiterate);
        formData.append("step13LiterateName", values.step13LiterateName);
        formData.append("step13LiterateAddress", values.step13LiterateAddress);

        // step 14
        formData.append("step14Witness", JSON.stringify(values.step14Witness));

        // step 15
        formData.append("selfie1", values.selfie1);
        formData.append("selfie2", values.selfie2);
        formData.append("selfie3", values.selfie3);

        formData.append("userID", localStorage.getItem("id"));

        axios
            .post(
                process.env.REACT_APP_API_URL + "/willcreation/createwill",
                formData
            )
            .then((response) => {
                history.push("/success");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };
    return (
        <FormContainer>
            <h4>Step 15: Validation</h4>

            <Form onSubmit={submitForm} className="l-form">
                <Form.Group controlId="file1">
                    <Form.Label>Selfie of the person that prepared </Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => {
                            onFileChange("selfie1", e.target.files[0]);
                        }}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="file2">
                    <Form.Label>Selfie of the person that read </Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => {
                            onFileChange("selfie2", e.target.files[0]);
                        }}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="file3">
                    <Form.Label>Selfie of Testator</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => {
                            onFileChange("selfie3", e.target.files[0]);
                        }}
                    ></Form.Control>
                </Form.Group>

                <Button className="button">
                    Submit Form
                </Button>
                <br />
            </Form>
            <button className="mt-2 button" onClick={Previous}>
                Prev
            </button>
            <br />
        </FormContainer>
    );
};

export default Step15NonMuslim;
