import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step3Muslim = ({
    nextStep,
    prevStep,
    handleChange,
    changeState,
    values,
}) => {
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };

    return (
        <FormContainer>
            <h4>Wives and Family Members for Wasiyah</h4>
            <Form.Label
                as="legend"
                className="text-center mb-5 mt-5"
                style={{ backgroundColor: "beige" }}
            >
                Add family members and your relationship with them. Family
                members must include Husbands/Wives/Spouses, Sons, Daughters,
                Sister, Brothers, Grand Father, Grand Mother, Uncles that is
                entitled to your estate according to Islamic law. Please note
                Will be shared to your family according to Islamic right. Please
                click the{" "}
                <span style={{ cursor: "pointer", color: "blue" }}>
                    “Schedule A”
                </span>{" "}
                to understand Islamic sharing formula.
            </Form.Label>
            <h4 className="mb-5"> Step 3: Wives/Husbands/Spouses Details</h4>

            <Form  className="l-form">
                {[...Array(values.wivesDetails.length)].map((e, i) => (
                    <div key={i + 1}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={values.wivesDetails[i].name}
                                onChange={(e) => {
                                    values.wivesDetails[i].name =
                                        e.target.value;
                                    changeState(values.wivesDetails[i].name);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="dob">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={values.wivesDetails[i].dob}
                                onChange={(e) => {
                                    values.wivesDetails[i].dob = e.target.value;
                                    changeState(values.wivesDetails[i].dob);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={values.wivesDetails[i].city}
                                onChange={(e) => {
                                    values.wivesDetails[i].city =
                                        e.target.value;
                                    changeState(values.wivesDetails[i].city);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="zipcode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="zipCode"
                                value={values.wivesDetails[i].zipCode}
                                onChange={(e) => {
                                    values.wivesDetails[i].zipCode =
                                        e.target.value;
                                    changeState(values.wivesDetails[i].zipCode);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={values.wivesDetails[i].state}
                                onChange={(e) => {
                                    values.wivesDetails[i].state =
                                        e.target.value;
                                    changeState(values.wivesDetails[i].state);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={values.wivesDetails[i].address}
                                onChange={(e) => {
                                    values.wivesDetails[i].address =
                                        e.target.value;
                                    changeState(values.wivesDetails[i].address);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <button
                            className="button"
                            disabled={values.wivesDetails.length === 1}
                            onClick={(e) => {
                                var temp = [...values.wivesDetails];
                                var foo = -1;
                                for (
                                    var j = 0;
                                    j < values.wivesDetails.length;
                                    j++
                                ) {
                                    if (
                                        i + 1 ===
                                        values.wivesDetails[j].index
                                    ) {
                                        foo = i;
                                        break;
                                    }
                                }
                                temp.splice(foo, 1);
                                changeState("wivesDetails", temp);
                            }}
                        >
                            Delete
                            <RemoveIcon />
                        </button>

                        <button
                        className="button"
                            onClick={(e) => {
                                e.preventDefault();
                                var temp = [...values.wivesDetails];
                                temp.push({
                                    index: values.wivesDetails.length + 1,
                                    name: "",
                                    dob: "",
                                    city: "",
                                    zipCode: "",
                                    state: "",
                                    address: "",
                                });
                                changeState("wivesDetails", temp);
                            }}
                        >
                            Add More
                            <AddIcon />
                        </button>

                        <hr
                            style={{
                                marginBottom: "3rem",
                                marginTop: "3rem",
                                border: "1px solid #000",
                            }}
                        ></hr>
                    </div>
                ))}
                <button className="button" onClick={Previous}>
                    Prev
                </button>
                <button className="button" onClick={Continue}>
                    Next
                </button>
            </Form>
            <br />
        </FormContainer>
    );
};

export default Step3Muslim;
