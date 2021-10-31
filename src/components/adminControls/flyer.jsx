import React, { useState } from "react";
import * as admin from "../../services/adminService";
import { CButton, CDataTable } from "@coreui/react";
import Button from "@material-ui/core/Button";
import "../Styling/table.css"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Flyer = () => {
  
  let history = useHistory();
  const [flyers, setflyers] = useState([]);

  const getData = () => {
    admin
      .getFlyers()
      .then((res) => {
        setflyers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return flyers;
  };
  //getData();
  React.useEffect(getData, []);
  if (!flyers || flyers.length === 0) return <p></p>;
  const arr = [];
  //converting post data into array
  const obj = Object.entries(flyers);
  obj.forEach(([key, value]) => arr.push(value));
  const fields = [
    { key: "name", label: "Flyer Name" },
    { key: "img", label: "Flyer Image"},
    { key: "type", label: "Flyer Type" },
    { key: "description", label: "Flyer Description" },
    { key: "createdOn", label: "Date Uploaded" },
    { key: "uploadedBy", label: "Uploaded By" },
    {
      key: "remove",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "edit",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "view",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <div className="global-container">
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <div className="container">
    <br />
    <h4>Manage Flyers</h4>
    <br />
      <div>
        <Link to="/admin/create-flyer">
        <button className="button">Upload Flyer </button>
        </Link>
    <br />
      </div>
      <CDataTable
        items={arr[1]}
        fields={fields}
        columnFilter
        responsive
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          remove: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  className="button button-b"
                  shape="square"
                  size="sm"
                  onClick={(e) => {
                    const result = admin.removeFlyer(item._id);
                    window.location.reload();
                  }}
                >
                  Remove
                </CButton>
              </td>
            );
          },
          edit: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  className="button button-b"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    window.location.href = "/admin/edit-flyer/?id=" + item._id;
                  }}
                >
                  Edit
                </CButton>
              </td>
            );
          },
          view: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  className="button button-b"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    window.open(item.img)
                  }}
                >
                  View
                </CButton>
              </td>
            );
          },

          img: (item, index) => {
            return (
              <td className="py-2">
                <img src={item.img} alt="flyer" />
              </td>
            );
          },
        }}
      />
    </div>
    </div>
  );
};

export default Flyer;
