import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
    <div  className="container">
      <h4>Step 5</h4>

      <Form className="l-form" >
        {[...Array(values.clausesCount)].map((e, i) => (
          <div>
            <Form.Group key={i}>
              <Form.Label>Additional Clause</Form.Label>
              <Form.Control
                value={values.additionalClauses[i]}
                as="textarea"
                rows={3}
                onChange={(e) => {
                  values.additionalClauses[i] = e.target.value;
                  changeState(values.additionalClauses[i]);
                }}
              ></Form.Control>
            </Form.Group>

            <hr
              style={{
                marginBottom: "3rem",
                marginTop: "3rem",
                border: "1px solid #000",
              }}
            ></hr>
          </div>
        ))}

        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            changeState("clausesCount", values.clausesCount + 1);
            values.additionalClauses.push("");
            changeState("additionalClauses", values.additionalClauses);
          }}
        >
          Add Another
        </button>

        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            changeState("clausesCount", values.clausesCount - 1);
            values.additionalClauses.splice(-1, 1);
            changeState("additionalClauses", values.additionalClauses);
          }}
        >
          Delete
        </button>
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
