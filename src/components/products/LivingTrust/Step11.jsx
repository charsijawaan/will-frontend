import React from "react";
import { Form } from "react-bootstrap";

const Step11 = ({ nextStep, prevStep, handleChange, values }) => {
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
            <h4>Step 11</h4>
            <h5>Trustee Remuneration</h5>

            <Form className="l-form">
                {/* Should the Trustee be renumirated for taking on the trust */}
                <Form.Group>
                    <Form.Label>
                        Should the Trustee be renumirated for taking on the
                        trust
                    </Form.Label>
                    <select
                        className="form-control"
                        value={values.remunerationQuestion}
                        onChange={(e) => {
                            handleChange("remunerationQuestion", e);
                        }}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>

                {values.remunerationQuestion === "Yes" && (
                    <div>
                        {/* Instruction */}
                        <Form.Group>
                            <Form.Label>Remuneration Instructions</Form.Label>
                            <Form.Control
                                value={values.remunerationInstruction}
                                as="textarea"
                                rows={3}
                                onChange={(e) => {
                                    handleChange("remunerationInstruction", e);
                                }}
                            />
                        </Form.Group>

                        {/* Amount */}
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                value={values.remunerationAmount}
                                type="number"
                                onChange={(e) => {
                                    handleChange("remunerationAmount", e);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        {/* Period */}
                        <Form.Group>
                            <Form.Label>Period</Form.Label>
                            <select
                                className="form-control"
                                value={values.remunerationPeriod}
                                onChange={(e) => {
                                    handleChange("remunerationPeriod", e);
                                }}
                            >
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </Form.Group>
                    </div>
                )}

                {values.doYouWantCotrustee === "Yes" && (
                    <>
                        <Form.Group>
                            <Form.Label>Do you want to Co Trustee</Form.Label>
                            <select
                                className="form-control"
                                value={values.step11DoYouWantCoTrustee}
                                onChange={(e) => {
                                    handleChange("step11DoYouWantCoTrustee", e);
                                }}
                            >
                                <option value="No" selected={true}>
                                    No
                                </option>
                                <option value="Yes">Yes</option>
                            </select>
                        </Form.Group>
                        {values.step11DoYouWantCoTrustee === "Yes" && (
                            <>
                                <Form.Group>
                                    <Form.Label>
                                        Remuneration Instructions
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step11RemunerationInstructions
                                        }
                                        as="textarea"
                                        rows={3}
                                        onChange={(e) => {
                                            handleChange(
                                                "step11RemunerationInstructions",
                                                e
                                            );
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control
                                        value={values.step11Amount}
                                        type="number"
                                        onChange={(e) => {
                                            handleChange("step11Amount", e);
                                        }}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Period</Form.Label>
                                    <select
                                        className="form-control"
                                        value={values.step11Period}
                                        onChange={(e) => {
                                            handleChange("step11Period", e);
                                        }}
                                    >
                                        <option value="Monthly">Monthly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </Form.Group>
                            </>
                        )}
                    </>
                )}
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

export default Step11;
