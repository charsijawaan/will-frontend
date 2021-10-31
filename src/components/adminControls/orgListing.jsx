import React, { useState } from "react";
import { CButton, CDataTable, CCollapse, CCardBody } from "@coreui/react";
import { Button } from "react-bootstrap";
import * as auth from "../../services/adminService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";
toast.configure();

const OrgUserListing = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState([]);
  const getData = () => {
    auth
      .getUsersList()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return users;
  };
  //getData();
  React.useEffect(getData, []);

  if (!users || users.length === 0) return <p>Cannot find any posts</p>;
  const filter = users.data.filter((user) => user.type === "organisationUser");

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "selfie", label: "Selfie" },
    { key: "phoneNo", label: "Contact Number" },

    {
      key: "view_detail",
      label: "",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "edit",
      label: "",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
    {
      key: "deactivate",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const handleDisableUser = async (id) => {
    const response = await auth.DisableUser(id);
    if (response.status === 200) {
      toast.success("User is disabled");
      window.location.reload();
    }
  };
  return (
    <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link to="/adminhome"><FaArrowLeft /></Link>
      </div>
    <div className="container">
      
      <br />
      <h4>Organization Users</h4>
      <br />
      <button
        className="button"
        onClick={() => {
          history.push("/register/orgaisationalUsers");
        }}
      >
        Add Organisation User
      </button>
      <CDataTable
        items={filter}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          view_detail: (item, index) => {
            return (
              <div>
                <td className="py-2">
                  <CButton
                    color="primary"
                    className="button button-b"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(index);
                    }}
                  >
                    {details.includes(index) ? "Hide" : "View "}
                  </CButton>
                </td>
              </div>
            );
          },

          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  
                  <p><b>name:</b>{item.name}</p>
                  <p><b>Email:</b>{item.email}</p>
                  <p><b>Phone Number:</b>{item.phoneNo}</p>
                  <p><b>Address 1:</b>{item.add1}</p>
                  <p><b>Address 2:</b>{item.add2}</p>
                  <p><b>Town:</b>{item.town}</p>
                  <p><b>country:</b>{item.country}</p>
                 
                  <p><b>Type:</b> {item.type}</p>
                  <p><b>Status:</b> {item.status}</p>
                </CCardBody>
              </CCollapse>
            );
          },

          selfie: (item, index) => {
            return (
              <td className="py-2">
                <img src={item.selfie} alt="flyer" />
              </td>
            );
          },
          edit: (item, index) => {
            return (
              <div>
                <td className="py-2">
                  <CButton
                    color="primary"
                    shape="square"
                    size="sm"
                    className="button button-b"
                    onClick={() => {
                      window.location.href = "/editorguser?profile=" + item._id;
                    }}
                  >
                    Edit
                  </CButton>
                </td>
              </div>
            );
          },
          deactivate: (item, index) => {
            return (
              <div>
                <td className="py-2">
                  <CButton
                    color="primary"
                    shape="square"
                    className="button button-b"
                    size="sm"
                    onClick={() => handleDisableUser(item._id)}
                  >
                    Deactivate
                  </CButton>
                </td>
              </div>
            );
          },
        }}
      />
      </div>
    </div>
  );
};

export default OrgUserListing;
