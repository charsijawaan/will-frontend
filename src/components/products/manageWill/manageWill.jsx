import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Popup from "./popup";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class ManageWill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWillID: "",
      wills: [],
      isOpen: false,
      selectedFile: null,
      documents: [],
      serverURL: null,
      registeredWills: [],
    };
  }
  

  componentDidMount() {
    axios
      .post("/managewill/get_active_will_id", {
        userID: localStorage.getItem("id"),
      })
      .then((response) => {
        this.setState({ activeWillID: response.data.willID });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("/managewill", {
        id: localStorage.getItem("id"),
      })
      .then((response) => {
        this.setState({ wills: response.data.userWills });
        console.log(response.data.userWills);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("/managewill/get_registered_wills", {
        userID: localStorage.getItem("id"),
      })
      .then((response) => {
        this.setState({ registeredWills: response.data.registeredWills });
        console.log(this.state.registeredWills);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      
    <div className="global-container" style={{backgroundAttachment:"fixed"}}> 
    <div className="back-button">
      <Link  to="/individualuser/home"><FaArrowLeft /></Link>
    </div>
      <div  className="container">
        <h4>Will's Table</h4>

        <table className="table table-wills">
          <tbody>
            {/* Header */}
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Type</th>
              <th>Reg No.</th>
              <th>View Will</th>
              <th>Add Codicil</th>
              <th>View Codicils</th>
              <th>Add Documents</th>
              <th>View Documents</th>
              <th>Add Deed of Gift</th>
              <th>View Deed of Gift</th>
              <th>Add Living Trust</th>
              <th>View Living Trust</th>
            </tr>

            {/* Body */}
            {this.state.wills.map((will, index) => {
              return (
                <tr>
                  <td>{this.state.wills.length - index}</td>
                  {will.type === "Standard" && (
                    <>
                      <td>
                        {will.firstName} {will.lastName}
                      </td>
                      <td>{will.dateCreated}</td>
                      <td>{will.type}</td>
                      <td>{will._id}</td>
                    </>
                  )}

                  {will.type === "Muslim" && (
                    <>
                      <td>
                        {will.firstName} {will.lastName}
                      </td>
                      <td>{will.dateCreated}</td>
                      <td>{will.type}</td>
                      <td>{will._id}</td>
                    </>
                  )}

                  <td>
                    <a
                      style={{ backgroundColor: "#333" }}
                      className="button button-b"
                      // href={"/managewill/viewwillpdf?will_id=" + will._id}
                    >
                      Download PDF (Disabled)
                    </a>
                  </td>
                  {will._id === this.state.activeWillID && (
                    <td>
                      <button
                        className="button button-b"
                        onClick={(e) => {
                          this.props.history.push({
                            pathname: "/managewill/addcodicil",
                            search: "?will_id=" + will._id,
                          });
                        }}
                      >
                        Add Codicil
                      </button>
                    </td>
                  )}
                  {will._id !== this.state.activeWillID && (
                    <td>
                      <a className="btn btn-danger">Add Codicil</a>
                    </td>
                  )}
                  <td>
                    <a
                      className="button button-b"
                      href={"/managewill/viewcodicils?will_id=" + will._id}
                    >
                      View Codicils
                    </a>
                  </td>
                  {will._id === this.state.activeWillID && (
                    <td>
                      <a
                        className="button button-b"
                        href={"/managewill/adddocuments?will_id=" + will._id}
                      >
                        Add Document
                      </a>
                    </td>
                  )}
                  {will._id !== this.state.activeWillID && (
                    <td>
                      <a className="btn btn-danger">Add Document</a>
                    </td>
                  )}
                  <td>
                    <a
                      className="button button-b"
                      href={"/managewill/viewdocuments?will_id=" + will._id}
                    >
                      View Documents
                    </a>
                  </td>
                  {will._id === this.state.activeWillID && (
                    <td>
                      <a
                        className="button button-b"
                        href={"/managewill/adddeedofgift?will_id=" + will._id}
                      >
                        Add Deed of Gift
                      </a>
                    </td>
                  )}
                  {will._id !== this.state.activeWillID && (
                    <td>
                      <a className="btn btn-danger">Add Deed of Gift</a>
                    </td>
                  )}
                  <td>
                    <a
                      className="button button-b"
                      href={"/managewill/viewdeedofgift?will_id=" + will._id}
                    >
                      View Deed of Gift
                    </a>
                  </td>
                  {will._id === this.state.activeWillID && (
                    <td>
                      <a
                        className="button button-b"
                        href={"/managewill/addlivingtrust?will_id=" + will._id}
                      >
                        Add Living Trust
                      </a>
                    </td>
                  )}
                  {will._id !== this.state.activeWillID && (
                    <td>
                      <a
                        className="btn btn-danger"
                        href={"/managewill/addlivingtrust?will_id=" + will._id}
                      >
                        Add Living Trust
                      </a>
                    </td>
                  )}

                  <td>
                    <a
                      className="button button-b"
                      href={"/managewill/viewlivingtrust?will_id=" + will._id}
                    >
                      View Living Trust
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h4 style={{ marginTop: 150 }}>Registered Will's Table</h4>
        <table className="table">
          <tbody>
            {/* Header */}
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Reg No.</th>
              <th>View Will</th>
              <th>Add Codicil</th>
              <th>View Codicil</th>
              <th>Add Documents</th>
              <th>View Documents</th>
            </tr>

            {/* Body */}
            {this.state.registeredWills.map((will, index) => {
              return (
                <tr>
                  <td>{this.state.registeredWills.length - index}</td>
                  <td>
                    {will.requesterFname} {will.requesterLname}
                  </td>
                  <td>{will.dateCreated}</td>
                  <td>{will._id}</td>
                  <td>
                    <a
                      className="button button-b"
                      href={process.env.REACT_APP_API_URL + "/" + will.willPDF}
                    >
                      View Will
                    </a>
                  </td>
                  {will._id === this.state.activeWillID && (
                    <td>
                      <a
                        className="button button-b"
                        href={
                          "/managewill/addcodicilregwill?will_id=" + will._id
                        }
                      >
                        Add Codicil
                      </a>
                    </td>
                  )}
                  {will._id !== this.state.activeWillID && (
                    <td>
                      <a className="btn btn-danger">Add Codicil</a>
                    </td>
                  )}
                  <td>
                    <a
                      className="button button-b"
                      href={"/managewill/viewcodicils?will_id=" + will._id}
                    >
                      View Codicils
                    </a>
                  </td>
                  {will._id === this.state.activeWillID && (
                    <td>
                      <a
                        className="button button-b"
                        href={"/managewill/adddocuments?will_id=" + will._id}
                      >
                        Add Document
                      </a>
                    </td>
                  )}
                  {will._id !== this.state.activeWillID && (
                    <td>
                      <a className="btn btn-danger">Add Documents</a>
                    </td>
                  )}
                  <td>
                    <a
                      className="button button-b"
                      href={"/managewill/viewdocuments?will_id=" + will._id}
                    >
                      View Documents
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}
