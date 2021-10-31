import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step6NonMuslim = ({
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
      <h4 className="mb-5"> Step 6: Guardian Details</h4>

      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Guardians are the people who you would like to look after your young
        children if there is no one left with parental responsibility.
      </Form.Label>
      <Form.Label>You can nominate up to two people</Form.Label>

      <Form className="l-form">
        {[...Array(values.step6GuardianDetails.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label>Full Name of Guardian</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.step6GuardianDetails[i].name}
                onChange={(e) => {
                  values.step6GuardianDetails[i].name = e.target.value;
                  changeState(values.step6GuardianDetails[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="relationship">
              <Form.Label>Relationship with Executor</Form.Label>
              <Form.Control
                as="select"
                name="relationship"
                value={values.step6GuardianDetails[i].relationship}
                onChange={(e) => {
                  values.step6GuardianDetails[i].relationship = e.target.value;
                  changeState(values.step6GuardianDetails[i].relationship);
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
                value={values.step6GuardianDetails[i].address}
                onChange={(e) => {
                  values.step6GuardianDetails[i].address = e.target.value;
                  changeState(values.step6GuardianDetails[i].address);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="town">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                name="town"
                value={values.step6GuardianDetails[i].town}
                onChange={(e) => {
                  values.step6GuardianDetails[i].town = e.target.value;
                  changeState(values.step6GuardianDetails[i].town);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={values.step6GuardianDetails[i].country}
                onChange={(e) => {
                  values.step6GuardianDetails[i].country = e.target.value;
                  changeState(values.step6GuardianDetails[i].country);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.step6GuardianDetails.length === 1}
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step6GuardianDetails];
                var foo = -1;
                for (var j = 0; j < values.step6GuardianDetails.length; j++) {
                  if (i + 1 === values.step6GuardianDetails[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("step6GuardianDetails", temp);
              }}
            >
              Delete <RemoveIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step6GuardianDetails];
                temp.push({
                  index: values.step6GuardianDetails.length + 1,
                  name: "",
                  relationship: "",
                  address: "",
                  town: "",
                  country: "",
                });
                changeState("step6GuardianDetails", temp);
              }}
            >
              Add More <AddIcon />
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

export default Step6NonMuslim;
