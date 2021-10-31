import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Step12Muslim = ({
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
      <h4>Step 12: Pet Care Takers</h4>

      <Form className="l-form">
        <Form.Group controlId="caretaker">
          <Form.Label>
            Do you want executor to appoint a pet caretaker?
          </Form.Label>
          <Form.Control
            as="select"
            value={values.petCaretaker}
            onChange={(e) => handleChange("petCaretaker", e)}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {values.petCaretaker === "Yes" && (
          <div>
            <Form.Group controlId="careTakerName">
              <Form.Label>CareTaker Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CareTaker Name"
                value={values.petCareTakerName}
                onChange={(e) => handleChange("petCareTakerName", e)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={values.petAddress}
                onChange={(e) => handleChange("petAddress", e)}
              ></Form.Control>
            </Form.Group>
          </div>
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

export default Step12Muslim;
