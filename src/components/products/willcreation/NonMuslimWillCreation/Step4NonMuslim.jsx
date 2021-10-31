import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step4NonMuslim = ({
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
      <h4 className="mb-5"> Step 4: Husbands/Wives/Spouses</h4>

      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Add family members and your relationship with them. Family members must
        include Wife/Husband, Sons, Daughters, Sister, Brothers, Grand Father,
        Grand Mother, Uncles that is entitled to your estate according to
        Islamic law. Please note Will be shared to your family according to
        Islamic right. Please click the “Schedule A” to understand Islamic
        sharing formula.
      </Form.Label>

      <Form className="l-form">
        {[...Array(values.wivesDetails.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.wivesDetails[i].name}
                onChange={(e) => {
                  values.wivesDetails[i].name = e.target.value;
                  changeState(values.wivesDetails[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dob">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="text"
                name="dob"
                value={values.wivesDetails[i].dob}
                onChange={(e) => {
                  values.wivesDetails[i].dob = e.target.value;
                  changeState(values.wivesDetails[i].dob);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={values.wivesDetails[i].city}
                onChange={(e) => {
                  values.wivesDetails[i].city = e.target.value;
                  changeState(values.wivesDetails[i].city);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={values.wivesDetails[i].zipCode}
                onChange={(e) => {
                  values.wivesDetails[i].zipCode = e.target.value;
                  changeState(values.wivesDetails[i].zipCode);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={values.wivesDetails[i].state}
                onChange={(e) => {
                  values.wivesDetails[i].state = e.target.value;
                  changeState(values.wivesDetails[i].state);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={values.wivesDetails[i].address}
                onChange={(e) => {
                  values.wivesDetails[i].address = e.target.value;
                  changeState(values.wivesDetails[i].address);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.wivesDetails.length === 1}
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.wivesDetails];
                var foo = -1;
                for (var j = 0; j < values.wivesDetails.length; j++) {
                  if (i + 1 === values.wivesDetails[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("wivesDetails", temp);
              }}
            >
              Delete
              <RemoveIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.wivesDetails];
                temp.push({
                  index: values.wivesDetails.length + 1,
                  name: "",
                  dob: "",
                  address: "",
                });
                changeState("wivesDetails", temp);
              }}
            >
              Add More
              <AddIcon />
            </Button>

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
        <br />
      </Form>
    </FormContainer>
  );
};

export default Step4NonMuslim;
