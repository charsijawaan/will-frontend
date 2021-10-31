import React from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

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
        <div className="container">
            <h4>Step 4</h4>
            <h5>Gift and Asset</h5>

            <Form className="l-form">
                {[...Array(values.step4GiftsCount)].map((e, i) => (
                    <div>
                        {/* What Type of Asset */}
                        <Form.Group>
                            <Form.Label>What Type of Asset</Form.Label>
                            <select
                                className="form-control"
                                value={values.step4Gifts[i].assetType}
                                onChange={(e) => {
                                    values.step4Gifts[i].assetType =
                                        e.target.value;
                                    changeState(values.step4Gifts[i].assetType);
                                }}
                            >
                                <option value="Real Estate">Real Estate</option>
                                <option value="Financial Account">
                                    Financial Account
                                </option>
                                <option value="Stock and Bond Certificate">
                                    Stock and Bond Certificate
                                </option>
                                <option value="Business Interest">
                                    Business Interest
                                </option>
                                <option value="Contractual Interest">
                                    Contractual Interest
                                </option>
                                <option value="Life Assurance Proceed">
                                    Life Assurance Proceed
                                </option>
                                <option value="Retirement Proceed">
                                    Retirement Proceed
                                </option>
                                <option value="Personal Possession">
                                    Personal Possession
                                </option>
                            </select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description for identifying this Asset</Form.Label>
                            <Form.Control
                                type="text"
                                value={values.step4Gifts[i].descForIdentifyingAsset}
                                onChange={(e) => {
                                    values.step4Gifts[i].descForIdentifyingAsset = e.target.value;
                                    changeState(
                                        values.step4Gifts[i].descForIdentifyingAsset
                                    );
                                }}
                            >

                            </Form.Control>
                        </Form.Group>

                        {values.step4Gifts[i].assetType === "Real Estate" && (
                            <div>
                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        value={values.step4Gifts[i].realEstateAddress}
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[i].realEstateAddress = e.target.value;
                                            changeState(
                                                values.step4Gifts[i].realEstateAddress
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i].realEstateType
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].realEstateType = e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .realEstateType
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Financial Account" && (
                            <div>
                                {/* Name */}
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .financialAccountName
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].financialAccountName =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .financialAccountName
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Type of Account */}
                                <Form.Group>
                                    <Form.Label>Type of Account</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .financialAccountType
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].financialAccountType =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .financialAccountType
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Account Number */}
                                <Form.Group>
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .financialAccountNumber
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].financialAccountNumber =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .financialAccountNumber
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Stock and Bond Certificate" && (
                            <div>
                                {/* Stock - Name of Issuer */}
                                <Form.Group>
                                    <Form.Label>
                                        Stock - Name of Issuer
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondStockName
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondStockName =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondStockName
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Stock - Number of Shares */}
                                <Form.Group>
                                    <Form.Label>
                                        Stock - Number of Shares
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondStockNumberOfShares
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondStockNumberOfShares =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondStockNumberOfShares
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Stock - Certificate Number */}
                                <Form.Group>
                                    <Form.Label>
                                        Stock - Certificate Number
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondStockCertificateNumber
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondStockCertificateNumber =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondStockCertificateNumber
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Stock - Description */}
                                <Form.Group>
                                    <Form.Label>Stock - Description</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondStockDescription
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondStockDescription =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondStockDescription
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>

                                {/* Bond - Name of Issuer */}
                                <Form.Group>
                                    <Form.Label>
                                        Bond - Name of Issuer
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondBondName
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondBondName =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondBondName
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Bond - Face Value of Bond */}
                                <Form.Group>
                                    <Form.Label>
                                        Bond - Face Value of Bond
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondBondValue
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondBondValue =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondBondValue
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Bond - Certificate Number */}
                                <Form.Group>
                                    <Form.Label>
                                        Bond - Certificate Number
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondBondCertificateNumber
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondBondCertificateNumber =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondBondCertificateNumber
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Bond - Description */}
                                <Form.Group>
                                    <Form.Label>Bond - Description</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .stockAndBondBondDescription
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].stockAndBondBondDescription =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .stockAndBondBondDescription
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Business Interest" && (
                            <div>
                                {/* Business Name */}
                                <Form.Group>
                                    <Form.Label>Business Name</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i].businessName
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[i].businessName =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .businessName
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Description of Interest */}
                                <Form.Group>
                                    <Form.Label>
                                        Description of Interest
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .businessDescription
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].businessDescription =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .businessDescription
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Contractual Interest" && (
                            <div>
                                {/* Title of Contract */}
                                <Form.Group>
                                    <Form.Label>Title of Contract</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i].titleOfContract
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].titleOfContract = e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .titleOfContract
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Name of Other Party */}
                                <Form.Group>
                                    <Form.Label>Name of Other Party</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .nameOfOtherParty
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].nameOfOtherParty = e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .nameOfOtherParty
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Date of Contract */}
                                <Form.Group>
                                    <Form.Label>Date of Contract</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i].dateOfContract
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].dateOfContract = e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .dateOfContract
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Description */}
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .contarctDescription
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].contarctDescription =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .contarctDescription
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Life Assurance Proceed" && (
                            <div>
                                {/* Name of Issuer */}
                                <Form.Group>
                                    <Form.Label>Name of Issuer</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .lifeAssuranceName
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].lifeAssuranceName =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .lifeAssuranceName
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Description of Policy */}
                                <Form.Group>
                                    <Form.Label>
                                        Description of Policy
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .lifeAssuranceDescription
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].lifeAssuranceDescription =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .lifeAssuranceDescription
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Policy Number */}
                                <Form.Group>
                                    <Form.Label>Policy Number</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .lifeAssuranceNumber
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].lifeAssuranceNumber =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .lifeAssuranceNumber
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Retirement Proceed" && (
                            <div>
                                {/* Name of Issuer */}
                                <Form.Group>
                                    <Form.Label>Name of Issuer</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .retirementProceedName
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].retirementProceedName =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .retirementProceedName
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Description of Policy */}
                                <Form.Group>
                                    <Form.Label>
                                        Description of Policy
                                    </Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .retirementProceedDescription
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].retirementProceedDescription =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .retirementProceedDescription
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Policy Number */}
                                <Form.Group>
                                    <Form.Label>Policy Number</Form.Label>
                                    <Form.Control
                                        value={
                                            values.step4Gifts[i]
                                                .retirementProceedNumber
                                        }
                                        type="text"
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].retirementProceedNumber =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .retirementProceedNumber
                                            );
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                        )}

                        {values.step4Gifts[i].assetType ===
                            "Personal Possession" && (
                            <div>
                                {/* Do you want to place all your Personal Possession in the Trust */}
                                <Form.Group>
                                    <Form.Label>
                                        Do you want to place all your Personal
                                        Possession in the Trust ?
                                    </Form.Label>
                                    <select
                                        className="form-control"
                                        value={
                                            values.step4Gifts[i]
                                                .personalPropertyQuestion
                                        }
                                        onChange={(e) => {
                                            values.step4Gifts[
                                                i
                                            ].personalPropertyQuestion =
                                                e.target.value;
                                            changeState(
                                                values.step4Gifts[i]
                                                    .personalPropertyQuestion
                                            );
                                        }}
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </Form.Group>
                                {values.step4Gifts[i]
                                    .personalPropertyQuestion === "No" && (
                                    <Form.Group>
                                        <Form.Label>
                                            Description of Property
                                        </Form.Label>
                                        <Form.Control
                                            value={
                                                values.step4Gifts[i]
                                                    .personalPropertyDescription
                                            }
                                            type="text"
                                            onChange={(e) => {
                                                values.step4Gifts[
                                                    i
                                                ].personalPropertyDescription =
                                                    e.target.value;
                                                changeState(
                                                    values.step4Gifts[i]
                                                        .personalPropertyDescription
                                                );
                                            }}
                                        ></Form.Control>
                                    </Form.Group>
                                )}
                            </div>
                        )}

                        {/* Document Location */}
                        <Form.Group>
                            <Form.Label>Document Location</Form.Label>
                            <Form.Control
                                value={values.step4Gifts[i].documentLocation}
                                type="text"
                                onChange={(e) => {
                                    values.step4Gifts[i].documentLocation =
                                        e.target.value;
                                    changeState(
                                        values.step4Gifts[i].documentLocation
                                    );
                                }}
                            ></Form.Control>
                        </Form.Group>

                        {/* Asset File */}
                        <input
                            style={{ display: "block", marginBottom: 15 }}
                            type="file"
                            onChange={(e) => {
                                values.step4Gifts[i].assetFile =
                                    e.target.files[0];
                                onFileChange(values.step4Gifts[i].assetFile);
                            }}
                        ></input>

                        <hr
                            style={{
                                marginBottom: "3rem",
                                marginTop: "3rem",
                                border: "1px solid #000",
                            }}
                        ></hr>
                    </div>
                ))}

                <button
                    className="button"
                    onClick={(e) => {
                        e.preventDefault();
                        changeState(
                            "step4GiftsCount",
                            values.step4GiftsCount + 1
                        );
                        values.step4Gifts.push({
                            giftID: uuidv4(),
                            assetType: "Real Estate",
                            descForIdentifyingAsset: "",
                            realEstateAddress: "",
                            realEstateType: "",
                            financialAccountName: "",
                            financialAccountType: "",
                            financialAccountNumber: "",
                            stockAndBondStockName: "",
                            stockAndBondStockNumberOfShares: "",
                            stockAndBondStockCertificateNumber: "",
                            stockAndBondStockDescription: "",
                            stockAndBondBondName: "",
                            stockAndBondBondValue: "",
                            stockAndBondBondCertificateNumber: "",
                            stockAndBondBondDescription: "",
                            businessName: "",
                            businessDescription: "",
                            titleOfContract: "",
                            nameOfOtherParty: "",
                            dateOfContract: "",
                            contarctDescription: "",
                            lifeAssuranceName: "",
                            lifeAssuranceDescription: "",
                            lifeAssuranceNumber: "",
                            retirementProceedName: "",
                            retirementProceedDescription: "",
                            retirementProceedNumber: "",
                            personalPropertyQuestion: "Yes",
                            personalPropertyDescription: "",
                            documentLocation: "",
                            assetFile: null,
                            assetFileName: "",
                            beneficiaries: [
                                {
                                    name: "",
                                    dob: "",
                                },
                            ],
                        });
                        changeState("step4Gifts", values.step4Gifts);
                    }}
                >
                    Add Another
                </button>

                <button
                    className="button"
                    onClick={(e) => {
                        e.preventDefault();
                        changeState(
                            "step4GiftsCount",
                            values.step4GiftsCount - 1
                        );
                        values.step4Gifts.splice(-1, 1);
                        changeState("step4Gifts", values.step4Gifts);
                    }}
                >
                    Delete
                </button>
            </Form>

            <button className="button" onClick={Previous}>
                Prev
            </button>
            <button className="button" onClick={Continue}>
                Next
            </button>
            <br />
        </div>
    );
};

export default Step4;
