import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./../willcreation/ScrollToMount";
import FormContainer from "./../willcreation/FormContainer";
import { saveBurialDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";

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

const ManageBurialDetailsRegWill = ({ history }) => {
  const form = useSelector((state) => state.form);

  const { burialDetails } = form;

  const [description, setDescription] = useState(burialDetails.description);
  const [validated, setValidated] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      dispatch(saveBurialDetails(description));

      window.location.href = "/managewill/additionalregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
    }

    setValidated(true);
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
    <FormContainer>
      <ScrollToMount />

      <h3>Burial Arrangements</h3>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
            className="mt-5 mb-5 mr-5"
            variant="contained"
            color="primary"
            onClick={() => {
              window.location.href = "/managewill/petregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </Button>
        <Button type="submit" variant="primary">
          Update & Continue
        </Button>

       
      </Form>
    </FormContainer>
  );
};

export default ManageBurialDetailsRegWill;
