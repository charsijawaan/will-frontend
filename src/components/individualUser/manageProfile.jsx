import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import auth from "../../services/authService";
import Form from "react-bootstrap/Form";
import Webcam from "react-webcam";
import { toast } from "react-toastify";
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


toast.configure();


const ManageProfile = () => {
  let history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [add1, setAdd1] = useState();
  const [add2, setAdd2] = useState();
  const [town, setTown] = useState();
  const [country, setCountry] = useState();
  const [name, setName] = useState();

  const handleSubmit = async () => {

    if(confirmPassword === password) {
      axios.post('users/updateindividualuser', {
        user: {
            userID: localStorage.getItem("id"),
            name: name,
            email: email,
            password: password,
            add1: add1,
            add2: add2,
            town: town,
            phoneNo: phoneNo,
            country: country
        }
      })
      .then((response) => {
          if(response.data.msg === "Success") {
              window.location.href = "/individualuser/manageprofile";
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

    useEffect(() => {
        let userID = localStorage.getItem("id");
        axios.post('users/getindividualuserdetails', {
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
  
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <div className="container col-md-6">
      <h4>Edit Profile</h4>
      <Form className="l-form">
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input    
            type="name"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input        
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Confirm Password</label>
          <input        
            type="password"
            className="form-control"
            name="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Town</label>
          <input
            type="text"
            className="form-control"
            name="text"
            value={town}
            onChange={(e) => {
              setTown(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">AddressLine 1</label>
          <input
            type="text"
            className="form-control"
            name="add1"
            value={add1}
            onChange={(e) => {
              setAdd1(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Address Line 2</label>
          <input
            type="text"
            className="form-control"
            name="add2"
            value={add2}
            onChange={(e) => {
              setAdd2(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            type="number"
            className="form-control"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>

        <div>
          <button className="button" onClick={() => {
              handleSubmit();
          }}>
            Update Profile
          </button>
          <br />
        </div>
      </Form>
      </div></div>
  );
};

export default ManageProfile;
