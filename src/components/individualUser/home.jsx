import React from "react";
import { Button, Grid, Paper } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const InHome = () => {
  let history = useHistory();
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
    <div className="container">
      <h5>Hello User!</h5>
      <Link to="/products/managewill"><button className="button">Manage Will</button></Link>
      <Link to="/managewill/viewdeedofgift"><button className="button">View Deed of Gifts</button></Link>
      <Link to="/managewill/viewlivingtrust"><button className="button">View Living Trust</button></Link>
      <Link to="/individualuser/home"><button className="button">Setup Reminder</button></Link>
      <Link to="/individualProducts"><button className="button">Products</button></Link>
     
      
    </div>
    
    <div className="container p-4">
      <Link to="/individualuser/manageprofile"><button className="button">Edit Profile</button></Link>
      <Link to="/logout"><button className="button">Log Out</button></Link>
    </div>
    </div>
  );
};

export default InHome;
