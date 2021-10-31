import React from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Step5 = ({ nextStep, prevStep, handleChange, changeState, values }) => {
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };

    return (
        <div className="container">
            <h4>Step 5</h4>
            <h5>Beneficiary Names</h5>

            <Form className="l-form">
                <p>
                    Name of Beneficiaries (Family, Friends, Charity) who will
                    receive the trust property you pass away. Gift can be (1)
                    General -This are percentage of gift left to beneficiaries
                    after any specific and charitable gifts are given) (2)
                    Specific – gifts assigned to a specific or friend) (3)
                    Charitable – Cash gifts or other items given to charities
                    you would like to make.
                </p>

                {[...Array(values.step4Gifts?.length)].map((e, i) => (
                    <div key={i + 1}>
                        <h5>
                            Add Beneficiaries For Asset:{" "}
                            {values.step4Gifts[i].assetType}
                        </h5>
                        <h5>
                            Identification Description : {values.step4Gifts[i].descForIdentifyingAsset}
                        </h5>
                        {[
                            ...Array(values.step4Gifts[i].beneficiaries.length),
                        ].map((e, j) => (
                            <div key={j + 1}>
                                <Form.Group>
                                    <Form.Label>Beneficiary Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={
                                            values.step4Gifts[i].beneficiaries[
                                                j
                                            ].name
                                        }
                                        onChange={(e) => {
                                            values.step4Gifts[i].beneficiaries[
                                                j
                                            ].name = e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .beneficiaries[j].name
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Beneficiary DOB</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={
                                            values.step4Gifts[i].beneficiaries[
                                                j
                                            ].dob
                                        }
                                        onChange={(e) => {
                                            values.step4Gifts[i].beneficiaries[
                                                j
                                            ].dob = e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .beneficiaries[j].dob
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        ))}

                        <button
                            className="button"
                            onClick={(e) => {
                                e.preventDefault();
                                values.step4Gifts[i].beneficiaries.push({
                                    name: "",
                                    dob: "",
                                });
                                changeState(values.step4Gifts[i].beneficiaries);
                            }}
                        >
                            Add Another
                        </button>
                        <button
                            className="button"
                            onClick={(e) => {
                                e.preventDefault();
                                values.step4Gifts[i].beneficiaries.pop();
                                changeState(values.step4Gifts[i].beneficiaries);
                            }}
                        >
                            Delete
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
            </Form>

            <button className="button" onClick={Previous}>
                Prev
            </button>
            <button className="button" onClick={Continue}>
                Next
            </button>
            <br />
        </div>
    );
};

export default Step5;
