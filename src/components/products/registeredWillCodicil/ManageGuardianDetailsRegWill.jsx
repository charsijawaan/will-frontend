import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form } from "react-bootstrap";
import { saveGuardianDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import FormContainer from "../willcreation/FormContainer";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ManageGuardianDetailsRegWill = () => {
  const dispatch = useDispatch();

  let history = useHistory();
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: "",
      relationship: "",
      address: "",
      town: "",
      country: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveGuardianDetails(inputFields));

    window.location = "/managewill/distributionregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        name: "",
        relationship: "",
        address: "",
        town: "",
        country: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  useEffect(() => {
    axios.post('/managewill/getWill', {
        willID: parseURLParams(window.location.href).will_id[0]
    })
    .then((response) => {
        console.log(response.data.will.guardianDetails);
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
      <h4 className="mb-5"> Step 6: Guardian Details</h4>

      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Guardians are the people who you would like to look after your young
        children if there is no one left with parental responsibility.
      </Form.Label>
      <Form.Label>You can nominate up to two people</Form.Label>

      <Form className="l-form" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="name">
              <Form.Label>Full Name of Guardian</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={inputField.name}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="relationship">
              <Form.Label>Relationship with Executor</Form.Label>
              <Form.Control
                as="select"
                name="relationship"
                required
                value={inputField.relationship}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                <option value="husband">Husband</option>
                <option value="Wife">Wife</option>
                <option value="Partner">Partner</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Grandson">Grandson</option>
                <option value="Granddaughter">Granddaughter</option>
                <option value="Friend">Friend</option>
                <option value="Business Partner">Business Partner</option>
                <option value="Other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                required
                value={inputField.address}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="town">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                name="town"
                required
                value={inputField.town}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                required
                value={inputField.country}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <button
          className="button"
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              Delete <RemoveIcon />
            </button>
            <button
          className="button"
              disabled={inputFields.length === 2}
              onClick={handleAddFields}
            >
              Add More <AddIcon />
            </button>
          </div>
        ))}

          <button
          className="button"
            onClick={() => {
              window.location = "/managewill/childrenregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </button>
        <button
          className="button"
          type="submit"
          onClick={handleSubmit}
        >
          Update & Continue
        </button>

        
      </Form>
    </FormContainer>
    <br />
    </div>
  );
};

export default ManageGuardianDetailsRegWill;
