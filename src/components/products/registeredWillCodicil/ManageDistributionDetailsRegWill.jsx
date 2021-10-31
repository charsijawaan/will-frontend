import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./../willcreation/ScrollToMount";
import FormContainer from "./../willcreation/FormContainer";
import {
  createForm,
  saveDistributionDetails,
  removeLatestWillFromLocalStorage
} from "../../../actions/formActions";
import { v4 as uuidv4 } from "uuid";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
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

const ManageDistributionDetailsRegWill = ({ history }) => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      type: "",
      description: "",
      amount: "",
    },
  ]);

  const form = useSelector((state) => state.form);

  const { wivesDetails, distributionDetails, childrenDetails } = form;

  const [beneficiary, setBeneficiary] = useState(
    distributionDetails.beneficiary
  );
  const [showWives, setShowWives] = useState(false);
  const [wife, setWife] = useState();
  const [child, setChild] = useState();
  const [showChildren, setShowChildren] = useState(false);
  const [showAllFields, setShowFields] = useState(false);
  const [name, setName] = useState();
  const [add, setAdd] = useState();
  const [email, setEmail] = useState();
  const [ph, setPh] = useState();
  const [tenantField, setTenantField] = useState(false);
  const [tenant, setTenant] = useState();

  const [validated, setValidated] = useState(false);
  // childDetail = childrenDetails.inputFields;
  const dispatch = useDispatch();
  const handleChangeInput = (id, event) => {
    if (event.target.value === "Life Tenant of a property") {
      setTenantField(true);
    }
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

  const handleChange = (e) => {
    setBeneficiary(e.target.value);

    if (e.target.value === "Wife") {
      setShowWives(true);
    } else if (e.target.value === "Child") {
      setShowChildren(true);
      setShowWives(false);
    } else {
      setShowChildren(false);
      setShowWives(false);
      setShowFields(true);
    }
  };

  const submitHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      dispatch(
        saveDistributionDetails({
          inputFields,
          wife,
          child,
          name,
          add,
          email,
          ph,
          tenant,
          beneficiary,
        })
      );

      window.location.href = "/managewill/remainder-of-estateregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
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
    
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
    <div className="back-button">
      <Link onClick={history.goBack}><FaArrowLeft /></Link>
    </div>
    <FormContainer>
      <ScrollToMount />

      <h4>Step 7: Distribution Details</h4>

      <Form className="l-form" noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="beneficiary">
          <Form.Label>Beneficiary </Form.Label>
          <Form.Control as="select" value={beneficiary} onChange={handleChange}>
            <option selected disabled value="">
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
            <option value="Family">Family Member</option>
            <option value="Others">Others</option>
          </Form.Control>
        </Form.Group>

        {showWives && (
          <>
            <Form.Label>Select Wife </Form.Label>
            <Form.Group controlId="wife">
              <Form.Control
                as="select"
                value={wife}
                onChange={(e) => setWife(e.target.value)}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                {wivesDetails.map((wives) => (
                  <>
                    <option value={wives.name}>{wives.name}</option>
                  </>
                ))}
              </Form.Control>
            </Form.Group>
          </>
        )}
        {showChildren && (
          <>
            <Form.Label>Select Child </Form.Label>
            <Form.Group controlId="child">
              <Form.Control
                as="select"
                value={child}
                onChange={(e) => setChild(e.target.value)}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                {childrenDetails.map((child) => (
                  <option value={child.name}>{child.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </>
        )}

        {showAllFields && (
          <>
            <Form.Group controlId="name">
              <Form.Label>Full Name of Beneficiary</Form.Label>
              <Form.Control
                type="text"
                required
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
                value={add}
                onChange={(e) => setAdd(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="ph">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="ph"
                required
                value={ph}
                onChange={(e) => setPh(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="type">
              <Form.Label> Asset Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                required
                value={inputField.type}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                <option value="Real estate">Real estate</option>
                <option value="Cash">Cash</option>
                <option value="Investment">Investment</option>
                <option value="Personal Possession">Personal Possession</option>
                <option value="Debt">Debt</option>
                <option value="Insurance Policies">Insurance Policies</option>
                <option value="Pension">Pension</option>
                <option value="Life Tenant of a property">
                  Life Tenant of a property
                </option>
              </Form.Control>
            </Form.Group>
            {tenantField && (
              <>
                <Form.Group controlId="tenant">
                  <Form.Label>
                    Who is the property due to after the death of life tenant?
                  </Form.Label>
                  <Form.Control
                    required
                    name="tenant"
                    type="text"
                    value={tenant}
                    onChange={(event) => setTenant(event.target.value)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please fill the required field.
                  </Form.Control.Feedback>
                </Form.Group>
              </>
            )}
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="description"
                rows={10}
                value={inputField.description}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Value / Amount</Form.Label>
              <Form.Control
                required
                name="amount"
                type="number"
                value={inputField.amount}
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
              window.location = "/managewill/guardianregwill?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </button>
        <button
          className="button"
          type="submit"
        >
          Update & Continue
        </button>

        
      </Form>
    </FormContainer>
    <br />
    </div>
  );
};

export default ManageDistributionDetailsRegWill;
