import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step5Muslim = ({
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
      <h4 className="mb-5"> Step 5: Other Family Members</h4>

      <Form className="l-form">
        {[...Array(values.otherFamilyMembers.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.otherFamilyMembers[i].name}
                onChange={(e) => {
                  values.otherFamilyMembers[i].name = e.target.value;
                  changeState(values.otherFamilyMembers[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={values.otherFamilyMembers[i].city}
                onChange={(e) => {
                  values.otherFamilyMembers[i].city = e.target.value;
                  changeState(values.otherFamilyMembers[i].city);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                value={values.otherFamilyMembers[i].zipCode}
                onChange={(e) => {
                  values.otherFamilyMembers[i].zipCode = e.target.value;
                  changeState(values.otherFamilyMembers[i].zipCode);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={values.otherFamilyMembers[i].state}
                onChange={(e) => {
                  values.otherFamilyMembers[i].state = e.target.value;
                  changeState(values.otherFamilyMembers[i].state);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={values.otherFamilyMembers[i].address}
                onChange={(e) => {
                  values.otherFamilyMembers[i].address = e.target.value;
                  changeState(values.otherFamilyMembers[i].address);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="relationship">
              <Form.Label>Relationship</Form.Label>
              <select
                className="form-control"
                value={values.otherFamilyMembers[i].relationship}
                onChange={(e) => {
                  values.otherFamilyMembers[i].relationship = e.target.value;
                  changeState(values.otherFamilyMembers[i].relationship);
                }}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Grand Father">Grand Father</option>
                <option value="Grand Mother">Grand Mother</option>
                <option value="Uncle">Uncle</option>
              </select>
            </Form.Group>

            <button
              className="button"
              disabled={values.otherFamilyMembers.length === 1}
              onClick={(e) => {
                var temp = [...values.otherFamilyMembers];
                var foo = -1;
                for (var j = 0; j < values.otherFamilyMembers.length; j++) {
                  if (i + 1 === values.otherFamilyMembers[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("otherFamilyMembers", temp);
              }}
            >
              Delete
              <RemoveIcon />
            </button>

            <button
            className="button"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.otherFamilyMembers];
                temp.push({
                  index: values.otherFamilyMembers.length + 1,
                  name: "",
                  city: "",
                  zipCode: "",
                  state: "",
                  address: "",
                  relationship: "",
                });
                changeState("otherFamilyMembers", temp);
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

export default Step5Muslim;
