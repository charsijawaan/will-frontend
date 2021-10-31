import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";

const Step16Muslim = ({
    nextStep,
    prevStep,
    handleChange,
    changeState,
    onFileChange,
    values,
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
        formData.append("wivesDetails", JSON.stringify(values.wivesDetails));

        // step 4
        formData.append("children", JSON.stringify(values.children));

        // step 5
        formData.append(
            "otherFamilyMembers",
            JSON.stringify(values.otherFamilyMembers)
        );

        // step 6
        formData.append(
            "guardianDetails",
            JSON.stringify(values.guardianDetails)
        );

        // step 7 & 9
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

        // step 8
        formData.append("step8Question", values.step8Question);
        formData.append(
            "step8ExecutorDetails",
            JSON.stringify(values.step8ExecutorDetails)
        );

        // step 10
        formData.append("priorityArray", JSON.stringify(values.priorityArray));

        // step 11
        formData.append(
            "otherTransferBeneficiary",
            values.otherTransferBeneficiary
        );
        formData.append("otherGiftMadeTo", values.otherGiftMadeTo);
        formData.append("otherName", values.otherName);
        formData.append("otherRelationship", values.otherRelationship);
        formData.append("otherAddress", values.otherAddress);
        formData.append("otherContest", values.otherContest);
        formData.append("otherTrusteeName", values.otherTrusteeName);
        formData.append("otherTrusteeAdd", values.otherTrusteeAdd);

        // step 12
        formData.append("petCaretaker", values.petCaretaker);
        formData.append("petCareTakerName", values.petCareTakerName);
        formData.append("petAddress", values.petAddress);

        // step 13
        formData.append("burialDescription", values.burialDescription);

        // step 14
        formData.append(
            "additionalInstructions",
            JSON.stringify(values.additionalInstructions)
        );
        formData.append("isLiterate", values.isLiterate);
        formData.append("additionalName", values.additionalName);
        formData.append("additionalAddress", values.additionalAddress);

        // step 15
        formData.append(
            "signingDetails",
            JSON.stringify(values.signingDetails)
        );

        // step 16
        formData.append("selfie1", values.selfie1);
        formData.append("selfie2", values.selfie2);
        formData.append("selfie3", values.selfie3);

        formData.append("userID", localStorage.getItem("id"));

        axios
            .post(
                process.env.REACT_APP_API_URL +
                    "/willcreation/createwill/muslim",
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
            <h4>Step 16: Validation</h4>

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
                <button className="button" type="submit" variant="primary">
                    Submit Form
                </button>
            </Form>
            <button className="button" onClick={Previous}>
                Prev
            </button>
        </FormContainer>
    );
};

export default Step16Muslim;
