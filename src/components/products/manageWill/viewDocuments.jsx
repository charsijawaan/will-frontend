import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Popup from "./popup";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {},
        i,
        n,
        v,
        nv;

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

export default class ViewDocuments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [],
            serverURL: null,
        };
    }

    

    componentDidMount() {
        axios
            .post("/managewill/getalldocuments", {
                willID: parseURLParams(window.location.href).will_id[0],
            })
            .then((response) => {
                console.log(response);
                this.setState({ documents: response.data.allDocuments });
                this.setState({ serverURL: response.data.serverURL });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="global-container" style={{backgroundAttachment:"fixed"}}>
              <div className="back-button">
                <Link to="/products/managewill"><FaArrowLeft /></Link>
              </div>
            <div className="container">
                <h4>Will Documents</h4>
                <table className="table table-wills">
                    {/* Header */}
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Reg No.</th>
                        <th>Created From</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Document</th>
                    </tr>

                    {/* Body */}
                    {this.state.documents.map((doc, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {doc.dateCreated
                                        ? doc.dateCreated
                                        : doc.createdAt}
                                </td>
                                <td>{doc._id}</td>
                                <td>{doc.from}</td>
                                <td>{doc.name}</td>
                                <td>{doc.type}</td>
                                <td>{doc.desc}</td>
                                <td>{doc.location}</td>
                                <td>
                                    <a
                                        target="_blank"
                                        className="btn btn-primary"
                                        href={doc.url}
                                    >
                                        Open
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
            </div>
        );
    }
}
