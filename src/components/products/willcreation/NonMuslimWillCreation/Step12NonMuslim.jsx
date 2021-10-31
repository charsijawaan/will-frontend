import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step12NonMuslim = ({
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
      <h4>Step 12: Burial Arrangements</h4>

      <Form className="l-form">
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={values.burialDesc}
            onChange={(e) => {
              handleChange("burialDesc", e);
            }}
          ></Form.Control>
        </Form.Group>
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

export default Step12NonMuslim;
