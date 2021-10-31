import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  createForm,
  saveAdditionalDetails,
  removeLatestWillFromLocalStorage
} from "../../../actions/formActions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import FormContainer from "./../willcreation/FormContainer";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

const ManageAdditionDetailsRegWill = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const { additionalDetails } = form;
  const [isLiterate, setIsLiterate] = useState(additionalDetails.isLiterate);
  const [name, setName] = useState(additionalDetails.name);
  const [address, setAddress] = useState(additionalDetails.address);
  const [showFields, setShowFields] = useState();

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),

      description: "",
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

    dispatch(
      saveAdditionalDetails({
        inputFields,
        isLiterate,
        name,
        address,
      })
    );
    window.location = "/managewill/signingregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
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
        description: "",
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

  const handleChange = (e) => {
    setIsLiterate(e.target.value);

    if (e.target.value === "No") {
      setShowFields(true);
    } else {
      setShowFields(false);
    }
  };


  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <FormContainer>
      <h4 className="mb-5"> Additional Instructions</h4>

      <Form className="l-form" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div className="mb-5" key={inputField.id}>
            <Form.Group controlId="description">
              <Form.Label> Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                as="textarea"
                row={8}
                description="description"
                required
                value={inputField.description}
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
        <Form.Group controlId="isLiterate">
          <Form.Label>Is the Tester Literate? </Form.Label>
          <Form.Control
            as="select"
            value={isLiterate}
            required
            onChange={handleChange}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {showFields && (
          <>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
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
                required
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

          <button
          className="button"
            onClick={() => {
              window.location.href = "/managewill/burialregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
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
    </FormContainer> </div>
  );
};

export default ManageAdditionDetailsRegWill;
