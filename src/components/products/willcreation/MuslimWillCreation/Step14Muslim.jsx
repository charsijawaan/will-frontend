import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step14Muslim = ({
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
      <h4 className="mb-5">Step 14: Additional Instructions</h4>

      <Form className="l-form">
        {[...Array(values.additionalInstructions.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                as="textarea"
                row={8}
                description="description"
                value={values.additionalInstructions[i].desc}
                onChange={(e) => {
                  values.additionalInstructions[i].desc = e.target.value;
                  changeState(values.additionalInstructions[i].desc);
                }}
              ></Form.Control>
            </Form.Group>

            <button
              className="button"
              disabled={values.additionalInstructions.length === 1}
              onClick={(e) => {
                var temp = [...values.additionalInstructions];
                var foo = -1;
                for (var j = 0; j < values.additionalInstructions.length; j++) {
                  if (i + 1 === values.additionalInstructions[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("additionalInstructions", temp);
              }}
            >
              Delete
              <RemoveIcon />
            </button>

            <button
              disabled={values.additionalInstructions.length === 4}
              className="button"
              onClick={(e) => {
                console.log(values.additionalInstructions);
                e.preventDefault();
                var temp = [...values.additionalInstructions];
                temp.push({
                  index: values.additionalInstructions.length + 1,
                  assetType: "",
                  desc: "",
                  value: "",
                  tenant: "",
                });
                changeState("additionalInstructions", temp);
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

        <Form.Group controlId="isLiterate">
          <Form.Label>Is the Tester Literate? </Form.Label>
          <Form.Control
            as="select"
            value={values.isLiterate}
            onChange={(e) => {
              handleChange("isLiterate", e);
            }}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {values.isLiterate === "No" && (
          <div>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={values.additionalName}
                onChange={(e) => {
                  handleChange("additionalName", e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={values.additionalAddress}
                onChange={(e) => {
                  handleChange("additionalAddress", e);
                }}
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

export default Step14Muslim;
