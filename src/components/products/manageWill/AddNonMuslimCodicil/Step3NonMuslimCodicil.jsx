import React from "react";
import FormContainer from "../../willcreation/FormContainer";
import ScrollToMount from "./../../willcreation/ScrollToMount";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step3NonMuslimCodicil = ({
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
      <h4 className="mb-5"> Step 3: Executor Details</h4>

      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Who would you like to manage your affairs when you die
      </Form.Label>
      <Form.Label>
        The people who you choose to manage the winding up your affairs after
        your death are known as executors. Executors work jointly together.
      </Form.Label>
      <Form.Label>
        We recommend that you appoint at least two people. The maximum number by
        law that can take up office is four.
      </Form.Label>

      <Form  className="l-form">
        {[...Array(values.step3ExecutorDetails.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label>Full Name of Executor</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.step3ExecutorDetails[i].name}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].name = e.target.value;
                  changeState(values.step3ExecutorDetails[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="relationship">
              <Form.Label>Relationship with Executor</Form.Label>
              <Form.Control
                as="select"
                name="relationship"
                value={values.step3ExecutorDetails[i].relationship}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].relationship = e.target.value;
                  changeState(values.step3ExecutorDetails[i].relationship);
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
                value={values.step3ExecutorDetails[i].address}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].address = e.target.value;
                  changeState(values.step3ExecutorDetails[i].address);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="town">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                name="town"
                value={values.step3ExecutorDetails[i].town}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].town = e.target.value;
                  changeState(values.step3ExecutorDetails[i].town);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={values.step3ExecutorDetails[i].state}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].state = e.target.value;
                  changeState(values.step3ExecutorDetails[i].state);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.step3ExecutorDetails[i].email}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].email = e.target.value;
                  changeState(values.step3ExecutorDetails[i].email);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="ph">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="ph"
                value={values.step3ExecutorDetails[i].phoneNumber}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].phoneNumber = e.target.value;
                  changeState(values.step3ExecutorDetails[i].phoneNumber);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isRenumerated">
              <Form.Label>Will the executor be renumerated?</Form.Label>
              <Form.Control
                as="select"
                name="isRenumerated"
                value={values.step3ExecutorDetails[i].willExecutorBeRenumerated}
                onChange={(e) => {
                  values.step3ExecutorDetails[i].willExecutorBeRenumerated =
                    e.target.value;
                  changeState(
                    values.step3ExecutorDetails[i].willExecutorBeRenumerated
                  );
                }}
              >
                <option value="No" selected>
                  No
                </option>
                <option value="Yes">Yes</option>
              </Form.Control>
            </Form.Group>

            {values.step3ExecutorDetails[i].willExecutorBeRenumerated ===
              "Yes" && (
              <Form.Group controlId="execRenumeration">
                <Form.Label>Executor Renumeration</Form.Label>
                <Form.Control
                  type="text"
                  name="execRenumeration"
                  value={values.step3ExecutorDetails[i].executorRenumeration}
                  onChange={(e) => {
                    values.step3ExecutorDetails[i].executorRenumeration =
                      e.target.value;
                    changeState(
                      values.step3ExecutorDetails[i].executorRenumeration
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

        <Button
          className="mr-3"
          color="primary"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            var temp = [...values.step3ExecutorDetails];
            temp.pop();
            changeState("step3ExecutorDetails", temp);
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
            var temp = [...values.step3ExecutorDetails];
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
            changeState("step3ExecutorDetails", temp);
          }}
        >
          Add More
          <AddIcon />
        </Button>

        <br></br>
        <br></br>
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
      </Form>
      <br />
    </FormContainer>
  );
};

export default Step3NonMuslimCodicil;
