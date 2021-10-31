import React from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";
import ScrollToMount from "./../ScrollToMount";

const Step2NonMuslim = ({
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
      <h4>Step 2: Personal Details</h4>
      <ScrollToMount />
      <Form className="l-form">
        <Form.Group controlId="prefix">
          <Form.Label>Prefix</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Prefix"
            value={values.prefix}
            onChange={(e) => {
              handleChange("prefix", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={values.firstName}
            onChange={(e) => {
              handleChange("firstName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="middleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Middle Name"
            value={values.middleName}
            onChange={(e) => {
              handleChange("middleName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={(e) => {
              handleChange("lastName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="suffix">
          <Form.Label>Suffix</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Suffix"
            value={values.suffix}
            onChange={(e) => {
              handleChange("suffix", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={values.gender}
            onChange={(e) => {
              handleChange("gender", e);
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
            value={values.address}
            onChange={(e) => {
              handleChange("address", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="town">
          <Form.Label>Town</Form.Label>
          <Form.Control
            type="text"
            value={values.town}
            onChange={(e) => {
              handleChange("town", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={values.country}
            onChange={(e) => {
              handleChange("country", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="county">
          <Form.Label>County</Form.Label>
          <Form.Control
            type="text"
            value={values.county}
            onChange={(e) => {
              handleChange("county", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="telephone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            value={values.phoneNumber}
            onChange={(e) => {
              handleChange("phoneNumber", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={values.email}
            onChange={(e) => {
              handleChange("email", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="maritalStatus">
          <Form.Label>Marital Status</Form.Label>
          <Form.Control
            as="select"
            value={values.maritalStatus}
            onChange={(e) => {
              handleChange("maritalStatus", e);
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

        {values.makingFor === "Yes" && (
          <button className="button" onClick={Previous}>
            Prev
          </button>
        )}
        <button className="button " onClick={Continue}>
          Next
        </button>
        <br />
      </Form>
    </FormContainer>
  );
};

export default Step2NonMuslim;
