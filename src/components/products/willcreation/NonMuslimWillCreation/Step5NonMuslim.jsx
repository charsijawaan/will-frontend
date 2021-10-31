import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step5NonMuslim = ({
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
      <h4 className="mb-5"> Step 5: Children</h4>

      <Form className="l-form">
        {[...Array(values.step5Children.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.step5Children[i].name}
                onChange={(e) => {
                  values.step5Children[i].name = e.target.value;
                  changeState(values.step5Children[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dob">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={values.step5Children[i].dob}
                onChange={(e) => {
                  values.step5Children[i].dob = e.target.value;
                  changeState(values.step5Children[i].dob);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.step5Children.length == 1}
              onClick={(e) => {
                var temp = [...values.step5Children];
                var foo = -1;
                for (var j = 0; j < values.step5Children.length; j++) {
                  if (i + 1 === values.step5Children[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("step5Children", temp);
              }}
            >
              {" "}
              Delete <RemoveIcon />{" "}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step5Children];
                temp.push({
                  index: values.step5Children.length + 1,
                  name: "",
                  dob: "",
                });
                changeState("step5Children", temp);
              }}
            >
              {" "}
              Add More <AddIcon />{" "}
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

export default Step5NonMuslim;
