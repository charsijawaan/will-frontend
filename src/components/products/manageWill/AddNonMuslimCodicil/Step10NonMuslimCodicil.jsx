import React from "react";
import FormContainer from "../../willcreation/FormContainer";
import ScrollToMount from "./../../willcreation/ScrollToMount";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step10NonMuslimCodicil = ({
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
      <h4>Step 10: Other Matters</h4>

      <Form  className="l-form">
        <Form.Group controlId="transferBeneficiary">
          <Form.Label>
            Transfer if a Beneficiary does not survive after 60 days
          </Form.Label>
          <Form.Control
            as="select"
            value={values.transferBeneficiary}
            onChange={(e) => {
              handleChange("transferBeneficiary", e);
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
            value={values.giftMadeTo}
            onChange={(e) => {
              handleChange("giftMadeTo", e);
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

        {values.giftMadeTo === "Name Trustee" && (
          <>
            <Form.Group controlId="trusteeName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Trustee Full Name"
                value={values.trusteeName}
                onChange={(e) => {
                  handleChange("trusteeName", e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="trusteeAdd">
              <Form.Label>Trustee Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={values.trusteeAddress}
                onChange={(e) => {
                  handleChange("trusteeAddress", e);
                }}
              ></Form.Control>
            </Form.Group>
          </>
        )}

        <Form.Label>
          Transfer if no beneificary or their children survives you
        </Form.Label>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={values.name}
            onChange={(e) => {
              handleChange("name", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="relationship">
          <Form.Label>Relationship</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Relationship"
            value={values.relationship}
            onChange={(e) => {
              handleChange("relationship", e);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={values.step10Address}
            onChange={(e) => {
              handleChange("step10Address", e);
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
            value={values.restriction}
            onChange={(e) => {
              handleChange("restriction", e);
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

export default Step10NonMuslimCodicil;
