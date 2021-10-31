import React from "react";
import { Form } from "react-bootstrap";

const Step4 = ({
  nextStep,
  prevStep,
  handleChange,
  changeState,
  onFileChange,
  values,
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
    <div  className="container">
      <h4>Step 4</h4>

      <Form  className="l-form">
        {[...Array(values.step4AssetsCount)].map((e, i) => (
          <div>
            {/* Type of Gift */}
            <Form.Group>
              <Form.Label>Type of Gift</Form.Label>
              <select
                className="form-control"
                value={values.step4Assets[i].typeOfGift}
                onChange={(e) => {
                  values.step4Assets[i].typeOfGift = e.target.value;
                  changeState(values.step4Assets[i].typeOfGift);
                }}
              >
                <option value="Real Property">Real Property</option>
                <option value="Personal Possession">Personal Possession</option>
                <option value="Investment">Investment</option>
                <option value="Monetary Gift">Monetary Gift</option>
              </select>
            </Form.Group>

            {(values.step4Assets[i].typeOfGift === "Real Property" ||
              values.step4Assets[i].typeOfGift === "Personal Possession" ||
              values.step4Assets[i].typeOfGift === "Investment") && (
              <div>
                {/* Description of Gift */}
                <Form.Group>
                  <Form.Label>Description of Gift</Form.Label>
                  <Form.Control
                    value={values.step4Assets[i].descriptionOfGift}
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      values.step4Assets[i].descriptionOfGift = e.target.value;
                      changeState(values.step4Assets[i].descriptionOfGift);
                    }}
                  />
                </Form.Group>
              </div>
            )}

            {/* Monetary Value */}
            {values.step4Assets[i].typeOfGift === "Monetary Gift" && (
              <Form.Group>
                <Form.Label>Monetary Value</Form.Label>
                <Form.Control
                  value={values.step4Assets[i].monetaryValue}
                  type="number"
                  onChange={(e) => {
                    values.step4Assets[i].monetaryValue = e.target.value;
                    changeState(values.step4Assets[i].monetaryValue);
                  }}
                ></Form.Control>
              </Form.Group>
            )}

            {/* Purpose and Usage of Gift */}
            <Form.Group>
              <Form.Label>Purpose and Usage of Gift</Form.Label>
              <Form.Control
                value={values.step4Assets[i].purposeOfGift}
                as="textarea"
                rows={3}
                onChange={(e) => {
                  values.step4Assets[i].purposeOfGift = e.target.value;
                  changeState(values.step4Assets[i].purposeOfGift);
                }}
              />
            </Form.Group>

            {/* Possession Time */}
            <Form.Group>
              <Form.Label>When Donee take possession</Form.Label>
              <select
                className="form-control"
                value={values.step4Assets[i].giftPossessionTime}
                onChange={(e) => {
                  values.step4Assets[i].giftPossessionTime = e.target.value;
                  changeState(values.step4Assets[i].giftPossessionTime);
                }}
              >
                <option value="Immediate">Immediate</option>
                <option value="Specific Date">Specific Date</option>
              </select>
            </Form.Group>

            {/* If Date is Selected */}
            {values.step4Assets[i].giftPossessionTime === "Specific Date" && (
              <div>
                {/* Date */}
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    value={values.step4Assets[i].specificDate}
                    type="date"
                    onChange={(e) => {
                      values.step4Assets[i].specificDate = e.target.value;
                      changeState(values.step4Assets[i].specificDate);
                    }}
                  />
                </Form.Group>
              </div>
            )}

            {/* Document Location */}
            <Form.Group>
              <Form.Label>Document Location</Form.Label>
              <Form.Control
                value={values.step4Assets[i].documentLocation}
                type="text"
                onChange={(e) => {
                  values.step4Assets[i].documentLocation = e.target.value;
                  changeState(values.step4Assets[i].documentLocation);
                }}
              ></Form.Control>
            </Form.Group>

            {/* Asset File */}
            <input
              style={{ display: "block", marginBottom: 15 }}
              type="file"
              onChange={(e) => {
                values.step4Assets[i].assetFile = e.target.files[0];
                onFileChange(values.step4Assets[i].assetFile);
              }}
            ></input>
          </div>
        ))}

        <hr
          style={{
            marginBottom: "3rem",
            marginTop: "3rem",
            border: "1px solid #000",
          }}
        ></hr>
      </Form>

      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          changeState("step4AssetsCount", values.step4AssetsCount + 1);
          values.step4Assets.push({
            typeOfGift: "Real Property",
            giftPossessionTime: "Immediate",
            descriptionOfGift: "",
            purposeOfGift: "",
            specificDate: "",
            monetaryValue: 0,
            assetFile: null,
            assetFileName: "",
          });
          changeState("step4Assets", values.step4Assets);
        }}
      >
        Add Another
      </button>

      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          changeState("step4AssetsCount", values.step4AssetsCount - 1);
          values.step4Assets.splice(-1, 1);
          changeState("step4Assets", values.step4Assets);
        }}
      >
        Delete
      </button>

      <br></br>

      <button className="button" onClick={Previous}>
        Prev
      </button>
      <button className="button " onClick={Continue}>
        Next
      </button>
      <br />
    </div>
  );
};

export default Step4;
