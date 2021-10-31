import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form, FormLabel } from "react-bootstrap";
import { saveSigningDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";
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

const ManageSigningDetailsRegWill = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: "",
    },
    {
      id: uuidv4(),
      name: "",
    },
  ]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveSigningDetails(inputFields));

    axios.post('/managewill/updateWill', {
      willID: parseURLParams(window.location.href).will_id[0],
      executorDetails : localStorage.getItem("executorDetails"),
      distributionDetails : localStorage.getItem("distributionDetails"),
      additionalDetails : localStorage.getItem("additionalDetails"),
      wivesDetails : localStorage.getItem("wivesDetails"),
      childrenDetails : localStorage.getItem("childrenDetails"),
      guardianDetails : localStorage.getItem("guardianDetails"),
      signingDetails : localStorage.getItem("signingDetails"),
      personalDetails : localStorage.getItem("personalDetails"),
      remainderDetails : localStorage.getItem("remainderDetails"),
      otherDetails : localStorage.getItem("otherDetails"),
      petDetails : localStorage.getItem("petDetails"),
      userID: localStorage.getItem("id"),
    })
    .then((response) => {
      console.log("Success");
      removeLatestWillFromLocalStorage();
      window.location.href = "/products/managewill";
    })
    .catch((error) => {
      console.log(error);
    });    
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

  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <FormContainer>
      <h4 className="mb-5"> Signing Details</h4>

      <Form className="l-form" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="name">
              <Form.Label> Witness Name</Form.Label>
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
              disabled={inputFields.length === 2}
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
              window.location.href = "/managewill/additionalregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </button>
        <button
          className="button"
          type="submit"
          onClick={handleSubmit}
        >
          Update & Close
        </button>
      </Form>
      <br />
    </FormContainer>
    </div>

  );
};

export default ManageSigningDetailsRegWill;
