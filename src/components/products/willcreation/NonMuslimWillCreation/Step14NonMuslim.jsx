import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step14NonMuslim = ({
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
      <h4 className="mb-5">Step 14: Signing Details</h4>

      <Form className="l-form"> 
        {[...Array(values.step14Witness.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label> Witness Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.step14Witness[i].name}
                onChange={(e) => {
                  values.step14Witness[i].name = e.target.value;
                  changeState(values.step14Witness[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.step14Witness.length === 1}
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step14Witness];
                var foo = -1;
                for (var j = 0; j < values.step14Witness.length; j++) {
                  if (i + 1 === values.step14Witness[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("step14Witness", temp);
              }}
            >
              Delete <RemoveIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step14Witness];
                temp.push({
                  index: values.step14Witness.length + 1,
                  name: "",
                });
                changeState("step14Witness", temp);
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

export default Step14NonMuslim;
