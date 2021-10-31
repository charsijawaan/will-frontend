import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step9Muslim = ({
  nextStep,
  prevStep,
  handleChange,
  changeState,
  values,
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
      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Only ONE-THIRD of the total asset can be distributed for Charitable
        Giving and Distributions.
      </Form.Label>
      <h4>Step 9: Distribution Details</h4>
      <Form className="l-form">
        {[...Array(values.step7AssetDetails?.length)].map((e, i) => (
          <div key={i + 1}>
            <h5>
              Add Beneficiaries For Asset:{" "}
              {values.step7AssetDetails[i].assetType}
            </h5>
            {[...Array(values.step7AssetDetails[i].beneficiaries.length)].map(
              (e, j) => (
                <div key={j + 1}>
                  <Form.Group controlId="beneficiary">
                    <Form.Label>Beneficiary</Form.Label>
                    <Form.Control
                      as="select"
                      value={values.step7AssetDetails[i].beneficiaries[j].type}
                      onChange={(e) => {
                        values.step7AssetDetails[i].beneficiaries[j].type =
                          e.target.value;
                        changeState(
                          values.step7AssetDetails[i].beneficiaries[j].type
                        );
                      }}
                    >
                      <option selected disabled value="">
                        [Please select one]
                      </option>
                      <option value="Sister">Sister</option>
                      <option value="Friends">Friends</option>
                      <option value="Family">Family Member</option>
                      <option value="Pet">Pet</option>
                      <option value="Others">Others</option>
                    </Form.Control>
                  </Form.Group>

                  {values.step7AssetDetails[i].beneficiaries[j].type !==
                    "Wife" &&
                    values.step7AssetDetails[i].beneficiaries[j].type !==
                      "Child" && (
                      <>
                        <Form.Group controlId="name">
                          <Form.Label>Full Name of Beneficiary</Form.Label>
                          <Form.Control
                            type="text"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j].name
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].name = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .name
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="address">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j]
                                .address
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].address = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .address
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j].email
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].email = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .email
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="ph">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="number"
                            name="ph"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j]
                                .phoneNumber
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].phoneNumber = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .phoneNumber
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>
                      </>
                    )}
                </div>
              )
            )}
            <button
              className="button"
              disabled={values.step7AssetDetails[i].beneficiaries.length === 1}
              onClick={(e) => {
                e.preventDefault();
                values.step7AssetDetails[i].beneficiaries.pop();
                changeState(values.step7AssetDetails[i].beneficiaries);
              }}
            >
              Delete <RemoveIcon />
            </button>

            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                values.step7AssetDetails[i].beneficiaries.push({
                  type: "",
                  name: "",
                  address: "",
                  email: "",
                  phoneNumber: "",
                });
                changeState(values.step7AssetDetails[i].beneficiaries);
              }}
            >
              Add More <AddIcon />
            </button>

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

export default Step9Muslim;
