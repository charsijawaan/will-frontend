import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step9NonMuslim = ({
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
            <h4>Step 9: Remainder of the Estate</h4>
            <Form.Label>
                The person that should inherit the estate after specific gifts
                had been distributed
            </Form.Label>
            <Form className="l-form">
                <Form.Group>
                    <Form.Label>Do You Want to Distribute equally?</Form.Label>
                    <Form.Control
                        as="select"
                        value={values.doYouWantToDistributeEqually}
                        onChange={(e) => {
                            handleChange("doYouWantToDistributeEqually", e);
                        }}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>

                {values.doYouWantToDistributeEqually === "Yes" && (
                    <Form.Group controlId="distribute">
                        <Form.Label>Distribute equally to </Form.Label>
                        <Form.Control as="select">
                            <option disabled selected value="">
                                [Please select one]
                            </option>
                            <option value="Wife">Wife</option>
                            <option value="Children">Children</option>
                            <option value="Wives">Wives</option>
                            <option value="wives and Children">
                                wives and Children
                            </option>
                        </Form.Control>
                    </Form.Group>
                )}

                {values.doYouWantToDistributeEqually === "No" && (
                    <>
                        {[...Array(values.step9specificIndividuals.length)].map(
                            (e, i) => (
                                <div key={i + 1}>
                                    <Form.Group controlId="leaveTo">
                                        <Form.Label>
                                            Leave to Specific Individual{" "}
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={
                                                values.step9specificIndividuals[
                                                    i
                                                ].type
                                            }
                                            onChange={(e) => {
                                                values.step9specificIndividuals[
                                                    i
                                                ].type = e.target.value;
                                                changeState(
                                                    values
                                                        .step9specificIndividuals[
                                                        i
                                                    ].type
                                                );
                                            }}
                                        >
                                            <option disabled selected value="">
                                                [Please select one]
                                            </option>
                                            <option value="Wife">Wife</option>
                                            <option value="Husband">
                                                Husband
                                            </option>
                                            <option value="Child">Child</option>
                                            <option value="Dad">Dad</option>
                                            <option value="Mum">Mum</option>
                                            <option value="Sister">
                                                Sister
                                            </option>
                                            <option value="Brother">
                                                Brother
                                            </option>
                                            <option value="Grandchild">
                                                Grandchild
                                            </option>
                                            <option value="Friends">
                                                Friends
                                            </option>
                                            <option value="Family Members">
                                                Family Members
                                            </option>
                                            <option value="Charity">
                                                Charity
                                            </option>
                                            <option value="Others">
                                                Others
                                            </option>
                                        </Form.Control>
                                    </Form.Group>

                                    {values.step9specificIndividuals[i].type ===
                                        "Wife" && (
                                            <>
                                        <select
                                            value={
                                                values.step9specificIndividuals[
                                                    i
                                                ].name
                                            }
                                            className="form-control"
                                            onChange={(e) => {
                                                values.step9specificIndividuals[
                                                    i
                                                ].name = e.target.value;
                                                changeState(
                                                    values
                                                        .step9specificIndividuals[
                                                        i
                                                    ].name
                                                );
                                            }}
                                        >
                                            <option
                                                disabled={true}
                                                selected={true}
                                            >
                                                [Please select one]
                                            </option>
                                            ;
                                            {values.wivesDetails.map((wife) => {
                                                return (
                                                    <option value={wife.name}>
                                                        {wife.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <Form.Group>
                                            <Form.Label>
                                                Percentage To Distribute
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Percentage To Distribute"
                                                value={
                                                    values.step9specificIndividuals[i].percentage
                                                }
                                                onChange={(e) => {
                                                    values.step9specificIndividuals[i].percentage = e.target.value;
                                                    changeState(
                                                        values.step9specificIndividuals[i].percentage
                                                    );
                                                }}
                                            ></Form.Control>
                                        </Form.Group>
                                        </>
                                    )}
                                    {values.step9specificIndividuals[i].type ===
                                        "Child" && (
                                            <>
                                        <select
                                            value={
                                                values.step9specificIndividuals[
                                                    i
                                                ].name
                                            }
                                            className="form-control"
                                            onChange={(e) => {
                                                values.step9specificIndividuals[
                                                    i
                                                ].name = e.target.value;
                                                changeState(
                                                    values
                                                        .step9specificIndividuals[
                                                        i
                                                    ].name
                                                );
                                            }}
                                        >
                                            <option
                                                disabled={true}
                                                selected={true}
                                            >
                                                [Please select one]
                                            </option>
                                            ;
                                            {values.step5Children.map(
                                                (child) => {
                                                    return (
                                                        <option
                                                            value={child.name}
                                                        >
                                                            {child.name}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>
                                        <Form.Group>
                                            <Form.Label>
                                                Percentage To Distribute
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Percentage To Distribute"
                                                value={
                                                    values.step9specificIndividuals[i].percentage
                                                }
                                                onChange={(e) => {
                                                    values.step9specificIndividuals[i].percentage = e.target.value;
                                                    changeState(
                                                        values.step9specificIndividuals[i].percentage
                                                    );
                                                }}
                                            ></Form.Control>
                                        </Form.Group>
                                        </>
                                    )}

                                    {values.step9specificIndividuals[i].type !==
                                        "Child" &&
                                        values.step9specificIndividuals[i]
                                            .type !== "Wife" && (
                                            <>
                                                <Form.Group controlId="name">
                                                    <Form.Label>
                                                        Full Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Full Name"
                                                        value={
                                                            values
                                                                .step9specificIndividuals[
                                                                i
                                                            ].name
                                                        }
                                                        onChange={(e) => {
                                                            values.step9specificIndividuals[
                                                                i
                                                            ].name =
                                                                e.target.value;
                                                            changeState(
                                                                values
                                                                    .step9specificIndividuals[
                                                                    i
                                                                ].name
                                                            );
                                                        }}
                                                    ></Form.Control>
                                                </Form.Group>

                                                <Form.Group controlId="address">
                                                    <Form.Label>
                                                        Address
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Address"
                                                        value={
                                                            values
                                                                .step9specificIndividuals[
                                                                i
                                                            ].address
                                                        }
                                                        onChange={(e) => {
                                                            values.step9specificIndividuals[
                                                                i
                                                            ].address =
                                                                e.target.value;
                                                            changeState(
                                                                values
                                                                    .step9specificIndividuals[
                                                                    i
                                                                ].address
                                                            );
                                                        }}
                                                    ></Form.Control>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>
                                                        Percentage To Distribute
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Percentage To Distribute"
                                                        value={
                                                            values
                                                                .step9specificIndividuals[
                                                                i
                                                            ].percentage
                                                        }
                                                        onChange={(e) => {
                                                            values.step9specificIndividuals[
                                                                i
                                                            ].percentage =
                                                                e.target.value;
                                                            changeState(
                                                                values
                                                                    .step9specificIndividuals[
                                                                    i
                                                                ].percentage
                                                            );
                                                        }}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </>
                                        )}

                                    <Button
                                        className="mr-3"
                                        color="primary"
                                        variant="contained"
                                        disabled={
                                            values.step9specificIndividuals
                                                .length === 1
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            var temp = [
                                                ...values.step9specificIndividuals,
                                            ];
                                            var foo = -1;
                                            for (
                                                var j = 0;
                                                j <
                                                values.step9specificIndividuals
                                                    .length;
                                                j++
                                            ) {
                                                if (
                                                    i + 1 ===
                                                    values
                                                        .step9specificIndividuals[
                                                        j
                                                    ].index
                                                ) {
                                                    foo = i;
                                                    break;
                                                }
                                            }
                                            temp.splice(foo, 1);
                                            changeState(
                                                "step9specificIndividuals",
                                                temp
                                            );
                                        }}
                                    >
                                        Delete <RemoveIcon />
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            var temp = [
                                                ...values.step9specificIndividuals,
                                            ];
                                            temp.push({
                                                index:
                                                    values
                                                        .step9specificIndividuals
                                                        .length + 1,
                                                name: "",
                                                address: "",
                                                percentage: "",
                                                type: "",
                                            });
                                            changeState(
                                                "step9specificIndividuals",
                                                temp
                                            );
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
                            )
                        )}
                    </>
                )}
            </Form>
            <button className="button" onClick={Previous}>
                Prev
            </button>
            <button
                className="button"
                onClick={(e) => {
                    if (values.doYouWantToDistributeEqually === "No") {
                        let percentage = 0;
                        for (
                            let i = 0;
                            i < values.step9specificIndividuals.length;
                            i++
                        ) {
                            percentage += Number(
                                values.step9specificIndividuals[i].percentage
                            );
                        }
                        if (percentage === 100) {
                            Continue(e);
                        } else {
                            e.preventDefault();
                            alert("Percentage Should add up to 100");
                        }
                    } else {
                        Continue(e);
                    }
                }}
            >
                Next
            </button>
            <br />
        </FormContainer>
    );
};

export default Step9NonMuslim;
