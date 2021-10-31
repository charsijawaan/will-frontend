import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

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

export default class ViewDeedofGift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deedOfGifts: [],
        };
    }
    componentDidMount() {
        if (parseURLParams(window.location.href) === undefined) {
            axios
                .post(
                    process.env.REACT_APP_API_URL +
                        "/managewill/get_deed_of_gifts",
                    {
                        willID: "",
                        userID: localStorage.getItem("id"),
                    }
                )
                .then((response) => {
                    this.setState({ deedOfGifts: response.data.deedOfGifts });
                    console.log(response.data.deedOfGifts);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .post(
                    process.env.REACT_APP_API_URL +
                        "/managewill/get_deed_of_gifts",
                    {
                        willID: parseURLParams(window.location.href).will_id[0],
                        userID: localStorage.getItem("id"),
                    }
                )
                .then((response) => {
                    this.setState({ deedOfGifts: response.data.deedOfGifts });
                    console.log(response.data.deedOfGifts);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            
    <div className="global-container" style={{backgroundAttachment:"fixed"}}> 
    <div className="back-button">
      <Link  to="/individualuser/home"><FaArrowLeft /></Link>
    </div>
            <div className="container">
                <h4>Deed of Gifts Table</h4>
                <table className="table">
                    {/* Header */}
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Reg No.</th>
                        <th>Name of Gift</th>
                        <th>Print</th>
                    </tr>

                    {this.state.deedOfGifts.map((deed, index) => {
                        return (
                            <tr>
                                <td>{this.state.deedOfGifts.length - index}</td>
                                <td>{deed.dateCreated}</td>
                                <td>{deed._id}</td>
                                <td>{deed.nameOfGift}</td>
                                <td>
                                    <a
                                        className="btn btn-primary"
                                        href="#"
                                        style={{ backgroundColor: "#333" }}
                                    >
                                        Print(Currently Disabled)
                                    </a>
                                </td>
                                {/* <td><a className="btn btn-primary" href={"print_deed_of_gift?deed_id=" + deed._id}>Print</a></td> */}
                            </tr>
                        );
                    })}
                </table>
            </div>
            </div>
        );
    }
}
