import React, { useState } from "react";
import FormContainer from "../../willcreation/FormContainer";
import { Form } from "react-bootstrap";

const Step13MuslimCodicil = ({
  values,
  nextStep,
  prevStep,
  handleChange,
  changeState,
  updateAndClose,
  onFileChange,
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
      <h4>Step 13: Burial Arrangements</h4>

      <Form  className="l-form">
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={values.burialDescription}
            onChange={(e) => handleChange("burialDescription", e)}
          ></Form.Control>
        </Form.Group>
      </Form>
      <button className="button" onClick={Previous}>
        Prev
      </button>
      <button className="button" onClick={Continue}>
        Next
      </button>
      <br></br>
      <button
        className="button"
        onClick={(e) => {
          updateAndClose(e);
        }}
      >
        Update & Close
      </button>
      <br />
    </FormContainer>
  );
};

export default Step13MuslimCodicil;
