import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step8Muslim = ({
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
      <h4 className="mb-5"> Step 8</h4>
      <Form className="l-form">
        <Form.Group>
          <Form.Label>
            Do you wish to leave gift for someone outside your family (Please
            note that maximum one-third of the total value of the estate can be
            shared outside of the Islamic law. Any Will now follow up normal
            Will probate process)
          </Form.Label>
          <Form.Control
            as="select"
            value={values.step8Question}
            onChange={(e) => {
              values.step8Question = e.target.value;
              handleChange("step8Question", e);
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {values.step8Question === "Yes" && (
          <>
            {[...Array(values.step8ExecutorDetails.length)].map((e, i) => (
              <div key={i + 1}>
                <Form.Group controlId="name">
                  <Form.Label>Full Name of Executor</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.step8ExecutorDetails[i].name}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].name = e.target.value;
                      changeState(values.step8ExecutorDetails[i].name);
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="relationship">
                  <Form.Label>Relationship with Executor</Form.Label>
                  <Form.Control
                    as="select"
                    name="relationship"
                    value={values.step8ExecutorDetails[i].relationship}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].relationship =
                        e.target.value;
                      changeState(values.step8ExecutorDetails[i].relationship);
                    }}
                  >
                    <option selected disabled value="">
                      [Please select one]
                    </option>
                    <option value="husband">Husband</option>
                    <option value="Wife">Wife</option>
                    <option value="Partner">Partner</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Grandson">Grandson</option>
                    <option value="Granddaughter">Granddaughter</option>
                    <option value="Friend">Friend</option>
                    <option value="Business Partner">Business Partner</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={values.step8ExecutorDetails[i].address}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].address = e.target.value;
                      changeState(values.step8ExecutorDetails[i].address);
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="town">
                  <Form.Label>Town</Form.Label>
                  <Form.Control
                    type="text"
                    name="town"
                    value={values.step8ExecutorDetails[i].town}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].town = e.target.value;
                      changeState(values.step8ExecutorDetails[i].town);
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={values.step8ExecutorDetails[i].state}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].state = e.target.value;
                      changeState(values.step8ExecutorDetails[i].state);
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.step8ExecutorDetails[i].email}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].email = e.target.value;
                      changeState(values.step8ExecutorDetails[i].email);
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="ph">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="ph"
                    value={values.step8ExecutorDetails[i].phoneNumber}
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].phoneNumber =
                        e.target.value;
                      changeState(values.step8ExecutorDetails[i].phoneNumber);
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="isRenumerated">
                  <Form.Label>Will the executor be renumerated?</Form.Label>
                  <Form.Control
                    as="select"
                    name="isRenumerated"
                    value={
                      values.step8ExecutorDetails[i].willExecutorBeRenumerated
                    }
                    onChange={(e) => {
                      values.step8ExecutorDetails[i].willExecutorBeRenumerated =
                        e.target.value;
                      changeState(
                        values.step8ExecutorDetails[i].willExecutorBeRenumerated
                      );
                    }}
                  >
                    <option value="No" selected>
                      No
                    </option>
                    <option value="Yes">Yes</option>
                  </Form.Control>
                </Form.Group>

                {values.step8ExecutorDetails[i].willExecutorBeRenumerated ===
                  "Yes" && (
                  <Form.Group controlId="execRenumeration">
                    <Form.Label>Executor Renumeration</Form.Label>
                    <Form.Control
                      type="text"
                      name="execRenumeration"
                      value={
                        values.step8ExecutorDetails[i].executorRenumeration
                      }
                      onChange={(e) => {
                        values.step8ExecutorDetails[i].executorRenumeration =
                          e.target.value;
                        changeState(
                          values.step8ExecutorDetails[i].executorRenumeration
                        );
                      }}
                    ></Form.Control>
                  </Form.Group>
                )}

                <hr
                  style={{
                    marginBottom: "3rem",
                    marginTop: "3rem",
                    border: "1px solid #000",
                  }}
                ></hr>
              </div>
            ))}
          </>
        )}

        <button
          className="button"
          disabled={values.step8ExecutorDetails.length === 1}
          onClick={(e) => {
            e.preventDefault();
            var temp = [...values.step8ExecutorDetails];
            temp.pop();
            changeState("step8ExecutorDetails", temp);
          }}
        >
          Delete
          <RemoveIcon />
        </button>

        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            var temp = [...values.step8ExecutorDetails];
            temp.push({
              name: "",
              relationship: "",
              address: "",
              town: "",
              state: "",
              email: "",
              phoneNumber: "",
              willExecutorBeRenumerated: "No",
              executorRenumeration: "",
            });
            changeState("step8ExecutorDetails", temp);
          }}
        >
          Add More
          <AddIcon />
        </button>

        <br></br>
        <br></br>

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

export default Step8Muslim;
