import React, { useState } from "react";
import FormContainer from "../../willcreation/FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Step11MuslimCodicil = ({
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
      <h4>Step 11: Other Matters</h4>

      <Form  className="l-form">
        <Form.Group controlId="transferBeneficiary">
          <Form.Label>
            Transfer if a Beneficiary does not survive after 60 days{" "}
          </Form.Label>
          <Form.Control
            as="select"
            value={values.otherTransferBeneficiary}
            onChange={(e) => {
              handleChange("otherTransferBeneficiary", e);
            }}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="To their children (if any)">
              To their children (if any)
            </option>
            <option value="Added to estate">Added to estate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="giftMadeTo">
          <Form.Label>Gift made to Minor </Form.Label>
          <Form.Control
            as="select"
            value={values.otherGiftMadeTo}
            onChange={(e) => {
              handleChange("otherGiftMadeTo", e);
            }}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Pass on to their parents until 18">
              Pass on to their parents until 18
            </option>
            <option value="Name Trustee">Name Trustee</option>
          </Form.Control>
        </Form.Group>

        {values.otherGiftMadeTo === "Name Trustee" && (
          <div>
            <Form.Group controlId="trusteeName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Trustee Full Name"
                value={values.otherTrusteeName}
                onChange={(e) => {
                  handleChange("otherTrusteeName", e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="trusteeAdd">
              <Form.Label>Trustee Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={values.otherTrusteeAdd}
                onChange={(e) => {
                  handleChange("otherTrusteeAdd", e);
                }}
              ></Form.Control>
            </Form.Group>
          </div>
        )}

        <Form.Label>
          Transfer if no beneificary or their children survives you{" "}
        </Form.Label>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={values.otherName}
            onChange={(e) => {
              handleChange("otherName", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="relationship">
          <Form.Label>Relationship</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Relationship"
            value={values.otherRelationship}
            onChange={(e) => {
              handleChange("otherRelationship", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={values.otherAddress}
            onChange={(e) => {
              handleChange("otherAddress", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="contest">
          <Form.Label>
            Restriction to contest - If any one contest what is given in the
            court, they should loose the will
          </Form.Label>
          <Form.Control
            as="select"
            value={values.otherContest}
            onChange={(e) => {
              handleChange("otherContest", e);
            }}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
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

export default Step11MuslimCodicil;
