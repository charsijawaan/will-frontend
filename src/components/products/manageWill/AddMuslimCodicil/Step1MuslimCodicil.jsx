import React from "react";
import FormContainer from "../../willcreation/FormContainer";
import { Form } from "react-bootstrap";
import ScrollToMount from "./../../willcreation/ScrollToMount";

const Step1MuslimCodicil = ({
  values,
  nextStep,
  prevStep,
  handleChange,
  changeState,
  updateAndClose,
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
      <h4>Step 1: Personal Details of Person Filling the form</h4>
      <ScrollToMount />
      <Form className="l-form">
        <Form.Group controlId="prefix">
          <Form.Label>Prefix</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Prefix"
            value={values.step1Prefix}
            onChange={(e) => {
              handleChange("step1Prefix", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={values.step1FirstName}
            onChange={(e) => {
              handleChange("step1FirstName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="middleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Middle Name"
            value={values.step1MiddleName}
            onChange={(e) => {
              handleChange("step1MiddleName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={values.step1LastName}
            onChange={(e) => {
              handleChange("step1LastName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="suffix">
          <Form.Label>Suffix</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Suffix"
            value={values.step1Suffix}
            onChange={(e) => {
              handleChange("step1Suffix", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={values.step1Gender}
            onChange={(e) => {
              handleChange("step1Gender", e);
            }}
          >
            <option>[Please select one]</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={values.step1Address}
            onChange={(e) => {
              handleChange("step1Address", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="town">
          <Form.Label>Town</Form.Label>
          <Form.Control
            type="text"
            value={values.step1Town}
            onChange={(e) => {
              handleChange("step1Town", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={values.step1Country}
            onChange={(e) => {
              handleChange("step1Country", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="county">
          <Form.Label>County</Form.Label>
          <Form.Control
            type="text"
            value={values.step1County}
            onChange={(e) => {
              handleChange("step1County", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="telephone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            value={values.step1PhoneNumber}
            onChange={(e) => {
              handleChange("step1PhoneNumber", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={values.step1Email}
            onChange={(e) => {
              handleChange("step1Email", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="maritalStatus">
          <Form.Label>Marital Status</Form.Label>
          <Form.Control
            as="select"
            value={values.step1MaritalStatus}
            onChange={(e) => {
              handleChange("step1MaritalStatus", e);
            }}
          >
            <option disabled selected value="">
              [Please Select One]
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widow">Widow</option>
          </Form.Control>
        </Form.Group>

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
      </Form>
      <br />
    </FormContainer>
  );
};

export default Step1MuslimCodicil;
