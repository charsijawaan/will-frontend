import React from "react";
import Button from "@material-ui/core/Button";
import auth from "../../services/adminService";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import axios from "axios";

toast.configure();
const EditOrgUser = () => {

  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [phoneNo, setPhoneNo] = React.useState();
  const [add1, setAdd1] = React.useState();
  const [add2, setAdd2] = React.useState();
  const [town, setTown] = React.useState();
  const [country, setCountry] = React.useState();
  const [name, setName] = React.useState();

  React.useEffect(() => {
    let userID = localStorage.getItem("id");
    axios.post('users/getuserdetails', {
        userID: userID
    })
    .then((response) => {
        console.log(response.data.userDetails);
        setName(response.data.userDetails.name);
        setEmail(response.data.userDetails.email);
        setPassword(response.data.userDetails.password);
        setPhoneNo(response.data.userDetails.phoneNo);
        setAdd1(response.data.userDetails.add1);
        setAdd2(response.data.userDetails.add2);
        setTown(response.data.userDetails.town);
        setCountry(response.data.userDetails.country);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

  let userType = localStorage.getItem("type");

  const handleUpdate = async () => {
    if(confirmPassword === password) {
      axios.post('users/updateuser', {
          userID: localStorage.getItem("id"),
          name: name,
          email: email,
          password: password,
          add1: add1,
          add2: add2,
          town: town,
          phoneNo: phoneNo,
          country: country
      })
      .then((response) => {
          if(response.status === 200) {
              window.location.href = "/editorguser/";
          }
          else {
              toast.error("Error submitting form");   
          }
      })
      .catch((error) => {
          console.log(error);
      });
    }
    else {
      alert("Password Does not match");
      return;
    }    
  };
  return (
    <div className="container">
      <h5 className="mb-5">Edit Profile</h5>
      <Form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          {userType === "organisationUser" &&
            <input
            disabled
            type="name"
            class="form-control"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          }
          {userType !== "organisationUser" &&
            <input            
            type="name"
            class="form-control"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          }
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          {userType === "organisationUser" &&
            <input
            disabled
            type="email"
            class="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          } 
          {userType !== "organisationUser" &&
            <input
            type="email"
            class="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          }          
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Town</label>
          {userType === "organisationUser" &&
            <input
            disabled
              type="text"
              class="form-control"
              name="text"
              value={town}
              onChange={(e) => {
                setTown(e.target.value);
              }}
            />
          }
          {userType !== "organisationUser" &&
            <input
              type="text"
              class="form-control"
              name="text"
              value={town}
              onChange={(e) => {
                setTown(e.target.value);
              }}
            />
          }
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">AddressLine 1</label>
          {userType === "organisationUser" &&
            <input
            disabled
              type="text"
              class="form-control"
              name="add1"
              value={add1}
              onChange={(e) => {
                setAdd1(e.target.value);
              }}
            />
          }
          {userType !== "organisationUser" &&
            <input
              type="text"
              class="form-control"
              name="add1"
              value={add1}
              onChange={(e) => {
                setAdd1(e.target.value);
              }}
            />
          }
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Address Line 2</label>
          {userType === "organisationUser" &&
            <input
            disabled
            type="text"
            class="form-control"
            name="add2"
            value={add2}
            onChange={(e) => {
              setAdd2(e.target.value);
            }}
          />
          }
          {userType !== "organisationUser" &&
            <input            
            type="text"
            class="form-control"
            name="add2"
            value={add2}
            onChange={(e) => {
              setAdd2(e.target.value);
            }}
          />
          }
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          {userType === "organisationUser" &&
            <input
            disabled
            type="number"
            class="form-control"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />          
          }
          {userType !== "organisationUser" &&
            <input
            type="number"
            class="form-control"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />          
          }
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Country</label>
          {userType === "organisationUser" &&
            <input
            disabled
            type="text"
            class="form-control"
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          }
          {userType !== "organisationUser" &&
            <input
            type="text"
            class="form-control"
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          }
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            className="mb-5"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditOrgUser;
