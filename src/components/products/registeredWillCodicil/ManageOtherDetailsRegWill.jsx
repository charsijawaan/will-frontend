import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./../willcreation/ScrollToMount";
import FormContainer from "./../willcreation/FormContainer";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { createForm, saveOtherDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";

import axios from "axios";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

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

const ManageOtherDetailsRegWill = ({ history }) => {
  const form = useSelector((state) => state.form);

  const { otherDetails } = form;

  const [transferBeneficiary, setBeneficiary] = useState(
    otherDetails.transferBeneficiary
  );
  const [giftMadeTo, setGift] = useState(otherDetails.giftMadeTo);
  const [trusteeName, setTrusteeName] = useState(otherDetails.trusteeName);
  const [trusteeAdd, setTrusteeAdd] = useState(otherDetails.trusteeAdd);
  const [name, setName] = useState(otherDetails.name);
  const [relationship, setRelationship] = useState(otherDetails.relationship);
  const [address, setAddress] = useState(otherDetails.address);
  const [contest, setContest] = useState(otherDetails.contest);

  const [validated, setValidated] = useState(false);
  const [showFields, setShowFields] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    console.log("submit");
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      dispatch(
        saveOtherDetails({
          transferBeneficiary,
          giftMadeTo,
          trusteeAdd,
          trusteeName,
          name,
          address,
          relationship,
          contest,
        })
      );
      window.location.href = "/managewill/petregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setGift(e.target.value);

    if (e.target.value === "Name Trustee") {
      setShowFields(true);
    } else {
      setShowFields(false);
    }
  };

  useEffect(() => {
    axios.post('/managewill/getWill', {
        willID: parseURLParams(window.location.href).will_id[0]
    })
    .then((response) => {        
    })
    .catch((error) => {
        console.log(error);
    });
    }, []);

  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <FormContainer>
      <ScrollToMount />

      <h4>Step 11: Other Matters</h4>

      <Form className="l-form" noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="transferBeneficiary">
          <Form.Label>
            Transfer if a Beneficiary does not survive after 60 days{" "}
          </Form.Label>
          <Form.Control
            required
            as="select"
            value={transferBeneficiary}
            onChange={(e) => setBeneficiary(e.target.value)}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="To their children (if any)">
              To their children (if any)
            </option>
            <option value="Added to estate">Added to estate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="giftMadeTo">
          <Form.Label>Gift made to Minor </Form.Label>
          <Form.Control
            required
            as="select"
            value={giftMadeTo}
            onChange={handleChange}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Pass on to their parents until 18">
              Pass on to their parents until 18
            </option>
            <option value="Name Trustee">Name Trustee</option>
          </Form.Control>
        </Form.Group>

        {showFields && (
          <>
            <Form.Group controlId="trusteeName">
              <Form.Label>Full Name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Trustee Full Name"
                value={trusteeName}
                onChange={(e) => setTrusteeName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="trusteeAdd">
              <Form.Label>Trustee Address</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter Address"
                value={trusteeAdd}
                onChange={(e) => setTrusteeAdd(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        <Form.Label>
          Transfer if no beneificary or their children survives you{" "}
        </Form.Label>

        <Form.Group controlId="name">
          <Form.Label>Name </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="relationship">
          <Form.Label>Relationship </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="contest">
          <Form.Label>
            Restriction to contest - If any one contest what is given in the
            court, they should loose the will
          </Form.Label>
          <Form.Control
            required
            as="select"
            value={contest}
            onChange={(e) => setContest(e.target.value)}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>
          
        <button className="button"
            onClick={() => {
              window.location.href = "/managewill/remainder-of-estateregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </button>
        <button type="submit" className="button">
          Update & Continue
        </button>

        
      </Form>
    </FormContainer>
    </div>
  );
};

export default ManageOtherDetailsRegWill;
