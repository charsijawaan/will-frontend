import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./../willcreation/ScrollToMount";
import FormContainer from "./../willcreation/FormContainer";
import { saveRemainderDetails, createForm, removeLatestWillFromLocalStorage } from "../../../actions/formActions";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
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

const ManageRemainderDetailsRegWill = ({ history }) => {
  const form = useSelector((state) => state.form);

  const { remainderDetails } = form;

  const [distribute, setDistribute] = useState(remainderDetails.distribute);
  const [leaveTo, setLeaveTo] = useState(remainderDetails.leaveTo);
  const [name, setName] = useState(remainderDetails.name);
  const [address, setAdd] = useState(remainderDetails.address);

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
      dispatch(saveRemainderDetails({ distribute, leaveTo, name, address }));

      window.location.href = "/managewill/othersregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setLeaveTo(e.target.value);

    if (e.target.value === "Others") {
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

      <h4>Step 10: Remainder of the Estate</h4>
      <Form.Label>
        The person that should inherit the estate after specific gifts had been
        distributed
      </Form.Label>
      <Form className="l-form" noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="distribute">
          <Form.Label>Distribute equally to </Form.Label>
          <Form.Control
            required
            as="select"
            value={distribute}
            onChange={(e) => setDistribute(e.target.value)}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Wife">Wife</option>
            <option value="Children">Children</option>
            <option value="Wives">Wives</option>
            <option value="wives and Children">wives and Children</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="leaveTo">
          <Form.Label>Leave to Specific Individual </Form.Label>
          <Form.Control
            required
            as="select"
            value={leaveTo}
            onChange={handleChange}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Wife">Wife</option>
            <option value="Husband">Husband</option>
            <option value="Child">Child</option>
            <option value="Dad">Dad</option>
            <option value="Mum">Mum</option>
            <option value="Sister">Sister</option>
            <option value="Brother">Brother</option>
            <option value="Grandchild">Grandchild</option>
            <option value="Friends">Friends</option>
            <option value="Family Members">Family Members</option>
            <option value="Others">Others</option>
          </Form.Control>
        </Form.Group>

        {showFields && (
          <>
            <Form.Group controlId="name">
              <Form.Label>Full Name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAdd(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}
          <button className="button"
            onClick={() => {
              window.location = "/managewill/distributionregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </button>
        <button className="button" type="submit" variant="primary">
          Update & Continue
        </button>

       
      </Form>
    </FormContainer>
    </div>
  );
};

export default ManageRemainderDetailsRegWill;
