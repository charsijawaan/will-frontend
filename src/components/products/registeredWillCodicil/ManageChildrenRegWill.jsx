import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form } from "react-bootstrap";
import { saveChildrenDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import FormContainer from "./../willcreation/FormContainer";

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

const ManageChildrenRegWill = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveChildrenDetails(inputFields));

    window.location = "/managewill/guardianregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
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
      <h4 className="mb-5"> Step5: Children</h4>

      <Form className="l-form" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="name">
              <Form.Label> Full Name</Form.Label>
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

            <button
              className="button"
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              Delete <RemoveIcon />
            </button>
            <button
          className="button"
              disabled={inputFields.length === 4}
              onClick={handleAddFields}
            >
              Add More <AddIcon />
            </button>
          </div>
        ))}

          <button
          className="button"
            onClick={() => {
              window.location = "/managewill/executorregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
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
      <br />
    </FormContainer>
    </div>
  );
};

export default ManageChildrenRegWill;
