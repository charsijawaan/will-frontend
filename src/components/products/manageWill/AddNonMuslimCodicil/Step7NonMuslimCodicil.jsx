import React from "react";
import FormContainer from "../../willcreation/FormContainer";
import ScrollToMount from "./../../willcreation/ScrollToMount";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";

const Step7NonMuslimCodicil = ({
  values,
  nextStep,
  prevStep,
  handleChange,
  changeState,
  onFileChange,
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
      <h4>Step 7: Asset Details</h4>

      <Form  className="l-form">
        {[...Array(values.step7AssetDetails.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="type">
              <Form.Label>Asset Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={values.step7AssetDetails[i].assetType}
                onChange={(e) => {
                  values.step7AssetDetails[i].assetType = e.target.value;
                  changeState(values.step7AssetDetails[i].assetType);
                }}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                <option value="Real estate">Real estate</option>
                <option value="Cash">Cash</option>
                <option value="Investment">Investment</option>
                <option value="Personal Possession">Personal Possession</option>
                <option value="Debt">Debt</option>
                <option value="Insurance Policies">Insurance Policies</option>
                <option value="Pension">Pension</option>
                <option value="Life Tenant of a property">
                  Life Tenant of a property
                </option>
              </Form.Control>
            </Form.Group>

            {values.step7AssetDetails[i].assetType ===
              "Life Tenant of a property" && (
              <Form.Group controlId="tenant">
                <Form.Label>
                  Who is the property due to after the death of life tenant?
                </Form.Label>
                <Form.Control
                  name="tenant"
                  type="text"
                  value={values.step7AssetDetails[i].tenant}
                  onChange={(e) => {
                    values.step7AssetDetails[i].tenant = e.target.value;
                    changeState(values.step7AssetDetails[i].tenant);
                  }}
                ></Form.Control>
              </Form.Group>
            )}

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={10}
                value={values.step7AssetDetails[i].desc}
                onChange={(e) => {
                  values.step7AssetDetails[i].desc = e.target.value;
                  changeState(values.step7AssetDetails[i].desc);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Value / Amount</Form.Label>
              <Form.Control
                required
                name="amount"
                type="number"
                value={values.step7AssetDetails[i].value}
                onChange={(e) => {
                  values.step7AssetDetails[i].value = e.target.value;
                  changeState(values.step7AssetDetails[i].value);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="doclocation">
              <Form.Label>Document Location</Form.Label>
              <Form.Control
                required
                type="text"
                value={values.step7AssetDetails[i].documentLocation}
                onChange={(e) => {
                  values.step7AssetDetails[i].documentLocation = e.target.value;
                  changeState(values.step7AssetDetails[i].documentLocation);
                }}
              ></Form.Control>
            </Form.Group>

            <input
              style={{ display: "block", marginBottom: 15 }}
              type="file"
              onChange={(e) => {
                values.step7AssetDetails[i].assetFile = e.target.files[0];
                onFileChange(values.step7AssetDetails[i].assetFile);
              }}
            ></input>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.step7AssetDetails.length === 1}
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step7AssetDetails];
                var foo = -1;
                for (var j = 0; j < values.step7AssetDetails.length; j++) {
                  if (i + 1 === values.step7AssetDetails[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("step7AssetDetails", temp);
              }}
            >
              Delete <RemoveIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.step7AssetDetails];
                temp.push({
                  assetID: uuidv4(),
                  index: values.step7AssetDetails.length + 1,
                  assetType: "",
                  desc: "",
                  value: "",
                  tenant: "",
                  documentLocation: "",
                  assetFile: null,
                  assetFileName: "",
                  beneficiaries: [
                    {
                      type: "",
                      name: "",
                      address: "",
                      email: "",
                      phoneNumber: "",
                    },
                  ],
                });
                changeState("step7AssetDetails", temp);
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
      </Form>
    </FormContainer>
  );
};

export default Step7NonMuslimCodicil;
