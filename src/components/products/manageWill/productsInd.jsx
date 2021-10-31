import React from "react";
import { Button, Grid, Paper } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const productsInd = () => {
//   let history = useHistory();
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link to="/individualuser/home"><FaArrowLeft /></Link>
      </div>
    <div className="container">
      <h4>Products</h4>
      <Link to="/products/willcreation"><button className="button">Create Will</button></Link>
      <Link to="/form"><button className="button">Basic Will Registration</button></Link>
      <Link to="/managewill/adddeedofgift"><button className="button">Add Deed of Gift</button></Link>
      <Link to="/managewill/addlivingtrust"><button className="button">Add Living Trust</button></Link>
      <Link to="/execform"><button className="button">Executor Will Copy Request</button></Link>
      <Link to="/probateform"><button className="button">Probate Registry Will Copy Request</button></Link>
      
    </div>
    </div>
  );
};

export default productsInd;
