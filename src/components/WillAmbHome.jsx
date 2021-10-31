import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const WillAHomePage = ({ user }) => {
  let history = useHistory();
  if (!user || user.length == 0) return <p></p>;
  const p="/editorguser?profile="+localStorage.getItem('id')
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
    <div className="container"> <h4>Welcome {user.name}</h4>
      <h6 className="text-left">Code: {user.code}</h6><br />
      <br />
      <Link to="/will-ambassador/flyer-listing"><button className="button">Download Flyer</button></Link>
      <Link to="/commission-listing"><button className="button">Generate Balance</button></Link>

      <div className="container p-4">
       <Link to={p}><button className="button">Update profile</button></Link>
        <Link to="/logout"><button className="button">Log Out</button></Link>
    </div>
     
    </div>
    </div>
  );
};

export default WillAHomePage;
