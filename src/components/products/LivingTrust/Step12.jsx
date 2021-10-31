import React, { useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import { PaystackButton } from "react-paystack";
import { v4 as uuidv4 } from "uuid";
import SignatureCanvas from "react-signature-canvas";
import * as auth from "../../../services/adminService";
import axios from "axios";
import "./../../../App.css";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {},
        i,
        n,
        v,
        nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

const Step12 = ({
    nextStep,
    prevStep,
    handleChange,
    changeState,
    onFileChange,
    values,
}) => {
    const sigCanvas = useRef({});

    // const sigCanvasGrantor = useRef({});
    // const sigCanvasTrustee = useRef({});
    // const sigCanvasSuccessor = useRef({});

    const [willAMBID, setWillAMBID] = React.useState();
    const [promoCode, setPromoCode] = React.useState("");
    const [basePrice, setBasePrice] = React.useState();
    const [actualPrice, setActualPrice] = React.useState();
    const [finalPrice, setFinalPrice] = React.useState();
    const [discount, setDiscount] = React.useState();
    const [commision, setCommision] = React.useState();
    const [commisionEarned, setCommisionEarned] = React.useState();

    useEffect(() => {
        axios
            .post("/managewill/get_living_trust_base_price", {})
            .then((response) => {
                setBasePrice(response.data.basePrice);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };

    function save(canvas, stateName) {
        var imageURI = canvas.current.getTrimmedCanvas().toDataURL("image/png");
        var fileName = uuidv4() + ".png";
        urltoFile(imageURI, fileName, "image/png").then(function (file) {
            changeState(stateName, file);
        });
    }

    function clear(canvas) {
        canvas.current.clear();
    }

    function urltoFile(url, filename, mimeType) {
        return fetch(url)
            .then(function (res) {
                return res.arrayBuffer();
            })
            .then(function (buf) {
                return new File([buf], filename, { type: mimeType });
            });
    }

    const config = {
        reference: new Date().getTime(),
        email: auth.getCurrentUser().email,
        amount: finalPrice,
        currency: "NGN",
        publicKey: "pk_test_64a3e97358821b9efd501438daaf4147e793ebc4",
        // publicKey: "pk_test_6ad7daa084d40f22350038852006a020e49a4428",
    };

    const componentProps = {
        ...config,
        className: "button",
        text: "Checkout",
        onSuccess: (email) => handlePaystackSuccessAction(email),
    };

    const handlePaystackSuccessAction = async (response) => {
        if (response.status === "success") {
            var formData = new FormData();

            // step 1
            formData.append("areYouOver18", values.areYouOver18);
            formData.append("areYouOfSaneMind", values.areYouOfSaneMind);
            formData.append(
                "doYouOwnThePropertyVested",
                values.doYouOwnThePropertyVested
            );
            formData.append(
                "areYouCreatingARevocableOrIrrevocable",
                values.areYouCreatingARevocableOrIrrevocable
            );

            // step 2
            formData.append("name", values.name);
            formData.append("city", values.city);
            formData.append("zipCode", values.zipCode);
            formData.append("state", values.state);
            formData.append("address", values.address);
            formData.append("phone", values.phone);
            formData.append("email", values.email);

            // step 3
            formData.append(
                "isTheGrantorNotTheTrustee",
                values.isTheGrantorNotTheTrustee
            );
            formData.append("trusteeType", values.trusteeType);
            formData.append(
                "organisationConfirmation",
                values.organisationConfirmation
            );
            formData.append(
                "individuaConfirmation",
                values.individuaConfirmation
            );
            formData.append("trusteeName", values.trusteeName);
            formData.append("trusteeCity", values.trusteeCity);
            formData.append("trusteeZipCode", values.trusteeZipCode);
            formData.append("trusteeState", values.trusteeState);
            formData.append("trusteeAddress", values.trusteeAddress);
            formData.append("doYouWantCotrustee", values.doYouWantCotrustee);
            formData.append("CotrusteeName", values.CotrusteeName);
            formData.append("CotrusteeCity", values.CotrusteeCity);
            formData.append("CotrusteeZipCode", values.CotrusteeZipCode);
            formData.append("CotrusteeState", values.CotrusteeState);
            formData.append("CotrusteeAddress", values.CotrusteeAddress);
            formData.append(
                "wouldYouLikeToNameTheTrust",
                values.wouldYouLikeToNameTheTrust
            );
            formData.append("trustName", values.trustName);

            // step 4 & 5
            for (let i = 0; i < values.step4Gifts.length; i++) {
                if (
                    values.step4Gifts[i].assetFile !== undefined &&
                    values.step4Gifts[i].assetFile !== null
                ) {
                    let fileEXT = values.step4Gifts[i].assetFile.name
                        .split(".")
                        .pop();
                    let filename =
                        values.step4Gifts[i].assetType +
                        " " +
                        values.step4Gifts[i].documentLocation +
                        "." +
                        fileEXT;
                    values.step4Gifts[i].assetFileName = filename;
                    formData.append(filename, values.step4Gifts[i].assetFile);
                }
            }
            formData.append("step4Gifts", JSON.stringify(values.step4Gifts));
            formData.append("step4GiftsCount", values.step4GiftsCount);

            // step 7
            formData.append(
                "step5Charities",
                JSON.stringify(values.step5Charities)
            );
            formData.append("step5CharityCount", values.step5CharityCount);

            // step 8
            formData.append("subtrustQuestion", values.subtrustQuestion);
            formData.append("subtrustName", values.subtrustName);
            formData.append("subtrustAge", values.subtrustAge);

            // step 9
            formData.append(
                "pourOverWillQuestion",
                values.pourOverWillQuestion
            );

            // step 10
            formData.append(
                "additionalInstructionOne",
                values.additionalInstructionOne
            );
            formData.append(
                "additionalInstructionTwo",
                values.additionalInstructionTwo
            );

            // step 11
            formData.append(
                "remunerationQuestion",
                values.remunerationQuestion
            );
            formData.append(
                "remunerationInstruction",
                values.remunerationInstruction
            );
            formData.append("remunerationAmount", values.remunerationAmount);
            formData.append("remunerationPeriod", values.remunerationPeriod);
            formData.append(
                "step11DoYouWantCoTrustee",
                values.step11DoYouWantCoTrustee
            );
            formData.append(
                "step11RemunerationInstructions",
                values.step11RemunerationInstructions
            );
            formData.append("step11Amount", values.step11Amount);
            formData.append("step11Period", values.step11Period);

            // step 12
            formData.append("signature", values.signature);
            formData.append("selfie", values.selfie);
            formData.append("signatureGrantor", values.signatureGrantor);
            formData.append("signatureTrustee", values.signatureTrustee);
            formData.append("signatureSuccessor", values.signatureSuccessor);
            formData.append("date", values.date);
            formData.append("place", values.place);
            formData.append("time", values.time);

            formData.append("userID", localStorage.getItem("id"));
            if (parseURLParams(window.location.href) === undefined) {
                formData.append("willID", "");
            } else {
                formData.append(
                    "willID",
                    parseURLParams(window.location.href).will_id[0]
                );
            }

            axios
                .post(
                    process.env.REACT_APP_API_URL +
                        "/managewill/add_living_trust_to_sale",
                    {
                        productName: "Living Trust",
                        transactionID: response.reference,
                        amount: actualPrice,
                        userID: localStorage.getItem("id"),
                    }
                )
                .then((response2) => {
                    if (response2.data.msg === "success") {
                        var salesID = response2.data.salesID;

                        if (willAMBID !== "") {
                            axios
                                .post(
                                    process.env.REACT_APP_API_URL +
                                        "/managewill/add_living_trust_commision",
                                    {
                                        salesID: salesID,
                                        willAmbID: willAMBID,
                                        commissionEarned: commision,
                                        commissionBalance: commisionEarned,
                                        userID: localStorage.getItem("id"),
                                        userName: localStorage.getItem("name"),
                                    }
                                )
                                .then((response) => {
                                    if (response.data.msg === "success") {
                                        axios
                                            .post(
                                                process.env.REACT_APP_API_URL +
                                                    "/managewill/add_living_trust",
                                                formData
                                            )
                                            .then((response3) => {
                                                if (
                                                    parseURLParams(
                                                        window.location.href
                                                    ) === undefined
                                                ) {
                                                    window.location.href =
                                                        "/home";
                                                } else {
                                                    window.location.href =
                                                        "/products/managewill";
                                                }
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        } else {
                            axios
                                .post(
                                    process.env.REACT_APP_API_URL +
                                        "/managewill/add_living_trust",
                                    formData
                                )
                                .then((response3) => {
                                    if (
                                        parseURLParams(window.location.href) ===
                                        undefined
                                    ) {
                                        window.location.href = "/home";
                                    } else {
                                        window.location.href =
                                            "/products/managewill";
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const calAmount = () => {
        setWillAMBID("");
        setActualPrice(basePrice);
        if (promoCode === "") {
            setFinalPrice(basePrice);
        } else {
            axios
                .post(
                    process.env.REACT_APP_API_URL + "/users/match_promo_code",
                    {
                        promoCode: promoCode,
                    }
                )
                .then((response) => {
                    if (response.data.user) {
                        if (response.data.user.type === "willAmbassdor") {
                            setWillAMBID(response.data.user._id);
                            axios
                                .post(
                                    process.env.REACT_APP_API_URL +
                                        "/managewill/get_discount_amount_by_type",
                                    {
                                        type: "Will Ambassador",
                                    }
                                )
                                .then((response) => {
                                    setDiscount(
                                        response.data.discount
                                            .discountPercentage
                                    );
                                    setCommision(
                                        response.data.discount
                                            .commissionPercentage
                                    );
                                    setCommisionEarned(
                                        (commision / 100) * basePrice
                                    );
                                    let amountToMinus =
                                        (basePrice *
                                            response.data.discount
                                                .discountPercentage) /
                                        100;
                                    setFinalPrice(basePrice - amountToMinus);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        } else if (
                            response.data.user.type === "organisationUser"
                        ) {
                            setWillAMBID(response.data.user._id);
                            axios
                                .post(
                                    process.env.REACT_APP_API_URL +
                                        "/managewill/get_discount_amount_by_type",
                                    {
                                        type: "Organisation User",
                                    }
                                )
                                .then((response) => {
                                    setDiscount(
                                        response.data.discount
                                            .discountPercentage
                                    );
                                    setCommision(
                                        response.data.discount
                                            .commissionPercentage
                                    );
                                    setCommisionEarned(
                                        (commision / 100) * basePrice
                                    );
                                    let amountToMinus =
                                        (basePrice *
                                            response.data.discount
                                                .discountPercentage) /
                                        100;
                                    setFinalPrice(basePrice - amountToMinus);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }
                    } else {
                        alert("Incorrect Promo Code");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="container">
            <h4>Step 12</h4>
            <h5>Signature and Selfie</h5>

            <div style={{}}>
                <SignatureCanvas
                    ref={sigCanvas}
                    penColor="green"
                    canvasProps={{
                        width: 300,
                        height: 200,
                        className: "sigCanvas",
                    }}
                />
                <div style={{display: "flex"}}>
                <button
                    className="button"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                        clear(sigCanvas);
                    }}
                >
                    Clear
                </button>
                <button
                    className="button"
                    onClick={() => {
                        save(sigCanvas, "signature");
                    }}
                >
                    Save
                </button>
                </div>
                <br />
            </div>

            <h5>Selfie</h5>
            <input
                style={{ display: "block", marginBottom: 15 }}
                type="file"
                onChange={(e) => {
                    values.selfie = e.target.files[0];
                    onFileChange(values.selfie);
                }}
            ></input>

            <h6>Signature of Grantor</h6>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    style={{ display: "block", marginBottom: 15 }}
                    type="file"
                    onChange={(e) => {
                        values.signatureGrantor = e.target.files[0];
                        onFileChange(values.signatureGrantor);
                    }}
                ></input>
            </div>

            <h6>Signature of Trustee</h6>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    style={{ display: "block", marginBottom: 15 }}
                    type="file"
                    onChange={(e) => {
                        values.signatureTrustee = e.target.files[0];
                        onFileChange(values.signatureTrustee);
                    }}
                ></input>
            </div>

            <h6>Signature of Successor</h6>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    style={{ display: "block", marginBottom: 15 }}
                    type="file"
                    onChange={(e) => {
                        values.signatureSuccessor = e.target.files[0];
                        onFileChange(values.signatureSuccessor);
                    }}
                ></input>
            </div>

            <Form>
                {/* Date */}
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        value={values.date}
                        type="text"
                        onChange={(e) => {
                            handleChange("date", e);
                        }}
                    ></Form.Control>
                </Form.Group>
                {/* Place */}
                <Form.Group>
                    <Form.Label>Place</Form.Label>
                    <Form.Control
                        value={values.place}
                        type="text"
                        onChange={(e) => {
                            handleChange("place", e);
                        }}
                    ></Form.Control>
                </Form.Group>
                {/* Time */}
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                        value={values.time}
                        type="text"
                        onChange={(e) => {
                            handleChange("time", e);
                        }}
                    ></Form.Control>
                </Form.Group>
            </Form>

            <div >
                <p >Enter Promotion Code</p>
                <input
                    value={promoCode}
                    className="form-control"
                    onChange={(e) => {
                        setPromoCode(e.target.value);
                    }}
                ></input>
            </div>

            <div className="mb-2">
                <button className="button" onClick={calAmount}>
                    Calculate
                </button>
                <br />
                <input
                    type="numer"
                    disabled
                    className="form-control"
                    value={actualPrice}
                ></input>
            </div>

            <div>
                <label>Your actual amount is: {actualPrice}</label>
                <br />
                <label>Discount % applied : {discount}</label>
                <br />
                <label>Final Amount : {finalPrice}</label>
                <br />
            </div>

            <button className="button" onClick={Previous}>
                Prev
            </button>
            <PaystackButton {...componentProps} />
            <br />
        </div>
    );
};

export default Step12;
