import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Popup from "./popup";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

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

export default class ViewCodicils extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			codicils: [],
		};
	}
	componentDidMount() {
		axios.post('/managewill/getcodicils', {
			willID: parseURLParams(window.location.href).will_id[0]
		})
		.then((response) => {			
			this.setState( {codicils: response.data.codicils} );
			console.log(response.data.codicils);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
	    return (
    		<div>
    			<h3>Codicil's Table</h3>
				<table className="table">

				{/* Header */}
				<tr>
					<th>#</th>
					<th>Date</th>
					<th>Reg No.</th>
					<th>View Codicil</th>
				</tr>

				{/* Body */}	
				{this.state.codicils.map((codicil, index) => {
					return(
						<tr>
							<td>{this.state.codicils.length - index}</td>
							<td>{codicil.dateCreated}</td>
							<td>{codicil._id}</td>
							<td><a className="btn btn-primary" href={"/managewill/codicil?codicil_id=" + codicil._id}>View</a></td>
						</tr>
					);
				})}			
			</table>
    	</div>          
  	);
	};
}