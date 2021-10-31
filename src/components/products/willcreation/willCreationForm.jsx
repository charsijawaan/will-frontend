import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const WillCreationForm = ({ history }) => {
  const [condition1, setCondition1] = useState();
  const [condition2, setCondition2] = useState();
  const [condition3, setCondition3] = useState();
  const [makingFor, setMakingFor] = useState();
  const [validated, setValidated] = useState(false);

  const [areYouMuslim, setAreYouMuslim] = useState(false);
  const [makeMuslimWill, setMakeMuslimWill] = useState(false);

  const submitHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      if (areYouMuslim === false || makeMuslimWill === false) {
        if (makingFor === "Yes") {
          history.push({
            pathname: "/willcreation/personal_will_creation",
            search: "?makingFor=Yes",
          });
        } else {
          history.push("/willcreation/personal_will_creation");
        }
      } else if (areYouMuslim === true && makeMuslimWill === true) {
        if (makingFor === "Yes") {
          history.push({
            pathname: "/willcreation/muslim_will_creation",
            search: "?makingFor=Yes",
          });
        } else {
          history.push("/willcreation/muslim_will_creation");
        }
      }
    }

    setValidated(true);
  };

  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <FormContainer>
      <h4>Step 1</h4>

      <Form noValidate validated={validated} onSubmit={submitHandler} className="l-form" >
        <Form.Group controlId="conditions">
          <Form.Label>
            <h5>In order for the will to be legally binding, the conditions below
            must be met. Confirm the following</h5>
          </Form.Label>
          <Form.Check
            value={condition1}
            onChange={(e) => setCondition1(e.target.value)}
            required
            label="Above 18"
            feedback="You must agree before submitting."
          />
          <Form.Check
            value={condition2}
            onChange={(e) => setCondition2(e.target.value)}
            required
            label="Of Sound Mind"
            feedback="You must agree before submitting."
          />
          <Form.Check
            value={condition3}
            onChange={(e) => setCondition3(e.target.value)}
            required
            label="Making the will voluntarily"
            feedback="You must agree before submitting."
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Are you making for someone else?</Form.Label>
          <Form.Control
            as="select"
            required
            value={makingFor}
            onChange={(e) => setMakingFor(e.target.value)}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Are you a Muslim */}
        <Form.Group>
          <Form.Label>Are you a Muslim?</Form.Label>
          <select
            className="form-control"
            onChange={(e) => {
              setAreYouMuslim(!areYouMuslim);
            }}
          >
            <option selected value="No">
              No
            </option>
            <option value="Yes">Yes</option>
          </select>
        </Form.Group>

        {areYouMuslim && (
          <Form.Group>
            <Form.Label>
              Would you like to create the Will in accordance to Muslim Will
              (Wassiyah)
            </Form.Label>
            <select
              className="form-control"
              onChange={(e) => {
                setMakeMuslimWill(!makeMuslimWill);
              }}
            >
              <option selected value="No">
                No
              </option>
              <option value="Yes">Yes</option>
            </select>
          </Form.Group>
        )}

        <button className="button">
          Save Progress & Continue
        </button>
      </Form>
    </FormContainer>
    </div>
  );
};

export default WillCreationForm;
