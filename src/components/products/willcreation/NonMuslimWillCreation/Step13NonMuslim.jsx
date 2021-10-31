import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step13NonMuslim = ({
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
      <h4 className="mb-5">Step 13: Additional Instructions</h4>

      <Form className="l-form">
        {[...Array(values.step13Desc.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="description">
              <Form.Label> Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                as="textarea"
                row={8}
                description="description"
                value={values.step13Desc[i].desc}
                onChange={(e) => {
                  values.step13Desc[i].desc = e.target.value;
                  changeState(values.step13Desc[i].desc);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.step13Desc.length === 1}
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step13Desc];
                var foo = -1;
                for (var j = 0; j < values.step13Desc.length; j++) {
                  if (i + 1 === values.step13Desc[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("step13Desc", temp);
              }}
            >
              Delete <RemoveIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step13Desc];
                temp.push({
                  index: values.step13Desc.length + 1,
                  desc: "",
                });
                changeState("step13Desc", temp);
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

        <Form.Group controlId="isLiterate">
          <Form.Label>Is the Tester Literate?</Form.Label>
          <Form.Control
            as="select"
            value={values.step13IsLiterate}
            onChange={(e) => {
              handleChange("step13IsLiterate", e);
            }}
          >
            <option value="Yes" selected={true}>
              Yes
            </option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {values.step13IsLiterate === "No" && (
          <>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={values.step13LiterateName}
                onChange={(e) => {
                  handleChange("step13LiterateName", e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                value={values.step13LiterateAddress}
                onChange={(e) => {
                  handleChange("step13LiterateAddress", e);
                }}
              ></Form.Control>
            </Form.Group>
          </>
        )}
      </Form>

      <button className="button" onClick={Previous}>
        Prev
      </button>
      <button className="button" onClick={Continue}>
        Next
      </button>
      <br />
    </FormContainer>
  );
};

export default Step13NonMuslim;
