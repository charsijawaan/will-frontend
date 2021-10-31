import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";

const Step11NonMuslim = ({
    values,
    nextStep,
    prevStep,
    handleChange,
    changeState,
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
            <h4>Step 11: Pets</h4>

            <Form className="l-form">
                {/* <Form.Group controlId="giftToPet">
          <Form.Label>Any gift to Pet?</Form.Label>
          <Form.Control
            as="select"
            value={values.step11AnyGiftToPet}
            onChange={(e) => {
              handleChange("step11AnyGiftToPet", e);
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No" selected={true}>
              No
            </option>
          </Form.Control>
        </Form.Group> */}

                {/* {values.step11AnyGiftToPet === "Yes" && (
          <>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  Name"
                value={values.step11Name}
                onChange={(e) => {
                  handleChange("step11Name", e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={5}
                placeholder="Enter Description"
                value={values.step11Desc}
                onChange={(e) => {
                  handleChange("step11Desc", e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                value={values.step11Amount}
                onChange={(e) => {
                  handleChange("step11Amount", e);
                }}
              ></Form.Control>
            </Form.Group>
          </>
        )} */}

                <Form.Group controlId="caretaker">
                    <Form.Label>
                        Do you want executor to appoint a pet caretaker?
                    </Form.Label>
                    <Form.Control
                        as="select"
                        value={values.step11AppointCareTaker}
                        onChange={(e) => {
                            handleChange("step11AppointCareTaker", e);
                        }}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No" selected={true}>
                            No
                        </option>
                    </Form.Control>
                </Form.Group>

                {values.step11AppointCareTaker === "Yes" && (
                    <>
                        <Form.Group controlId="careTakerName">
                            <Form.Label>CareTaker Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter CareTaker Name"
                                value={values.step11CareTakerName}
                                onChange={(e) => {
                                    handleChange("step11CareTakerName", e);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                value={values.step11CareTakerAddress}
                                onChange={(e) => {
                                    handleChange("step11CareTakerAddress", e);
                                }}
                            ></Form.Control>
                        </Form.Group>
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
        </FormContainer>
    );
};

export default Step11NonMuslim;
