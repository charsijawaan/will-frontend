import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const OrgUserHomePage = ({ user }) => {
  if (!user || user.length === 0) return <p></p>;
  const p="/editorguser?profile="+localStorage.getItem('id')
  return (    
  <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>

    <div className="container">
      <h4>Welcome {user.name}</h4>
      <h6 className="text-left">Code: {user.code}</h6>
      <br />
      <br />
      <Link to="/will-ambassador/flyer-listing"><button className="button">Download Flyer</button></Link>
      <Link to="/commission-listing"><button className="button">Generate Balance Request</button></Link>
      <Link to="/admin/flyer"><button className="button">Manage PDF Flyer</button></Link>
      <Link to="/will/balance-request"><button className="button">Manage Will Ambassador Balance Request</button></Link>
      <Link to="/admin/manageusers"><button className="button">Manage B2B/Ambassador Account</button></Link>
      <Link to="/viewallvoucherinvoices"><button className="button">Generate B2B Employee Voucher Invoice</button></Link>
      <Link to="/ambassador/sales"><button className="button">View Sales</button></Link>
      <br />
    </div>
    <div className="container p-4">
       <Link to={p}><button className="button">Update profile</button></Link>
        <Link to="/logout"><button className="button">Log Out</button></Link>
    </div>
    </div>
  );
};

export default OrgUserHomePage;
