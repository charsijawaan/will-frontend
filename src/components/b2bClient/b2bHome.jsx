import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const B2BHome = () => {
  let history = useHistory();
  const p ="/editorguser?profile="+localStorage.getItem('id')
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="container">
        <Link to="/voucherlisting"><button className="button"> Generate Employee Voucher</button></Link>
        <Link to="/transactionlis"><button className="button">View Transaction List</button></Link>
      </div>

      <div className="container p-4">
        <Link to="/logout"><button className="button">Log Out</button></Link>
        <Link to={p}><button className="button">Update Profile</button></Link>
    </div>  
    </div>
  );
};

export default B2BHome;
