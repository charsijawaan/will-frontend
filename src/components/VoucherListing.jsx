import React from "react";
import * as auth from "../services/authService";
import * as admin from "../services/adminService";
import { CButton, CDataTable } from "@coreui/react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const VoucherListing = () => {
  let history = useHistory();

  const [voucher, setVoucher] = React.useState();
  const [popIsOpen, setPopIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailName, setName] = React.useState("");
  const [code, setCode] = React.useState("");

  const sendEmail = () => {    
    if(email === "" || !email.includes("@")) {
      return;
    }
    else {
      axios.post(process.env.REACT_APP_API_URL + "/users/send_voucher_code" , {
        email: email,
        code: code
      })
      .then((response) => {
        if(response.status === 200) {
          axios.post(process.env.REACT_APP_API_URL + "/users/change_voucher_status" , {
            code: code,
            status: "Emailed",
            name: emailName,
            email: email,
          })  
          .then((res2) => {
            if(res2.status === 200) {
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const getData = () => {
    auth
      .getVouchersList()
      .then((res) => {
        setVoucher(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return voucher;
  };
  //getData();
  React.useEffect(getData, []);

  const user = admin.getCurrentUser();
  const id = user.id;
  const name = user.name;
  
  if (!voucher || voucher.length === 0) return <p>Cannot find any posts</p>;
  const filtered = voucher.data.filter(
    (x) => x.userID === id || x.b2bClient === name
  );
  if (!filtered || filtered.length === 0) return <p>Cannot find any posts</p>;

  const arr = [];
  const obj = Object.entries(filtered);
  obj.forEach(([key, value]) => arr.push(value));

  console.log("arr", arr);
  const fields = [
    { key: "date", label: "Date" },
    { key: "voucherCode", label: "Code" },
    { key: "status", label: "Status" },

    { key: "name", label: "Name" },
    { key: "emailedTo", label: "Emailed To" },
    { key: "updateDate", label: "Last Updated" },

    {
      key: "email",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "print",
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
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <div className="container">
      {popIsOpen && 
        <div style={{position:"absolute", top:"50%", left:"40%", width:400, height:50, backgroundColor: "#fff", zIndex: 100}}>
          <div>

            <div style={{display: "flex"}}>
              <h3>Enter Email</h3>
              <input placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>

            <div style={{display: "flex"}}>
              <h3>Enter Name</h3>
              <input placeholder="Email" onChange={(e) => {setName(e.target.value)}}></input>
            </div>        

            <div style={{display: "flex", marginTop: 10}}>
              <button className="btn btn-primary" onClick={() => {setPopIsOpen(false);setEmail("");setName("")}}>Close</button>
              <button className="btn btn-primary" onClick={() => {sendEmail()}}>Send</button>
            </div>

          </div>
        </div>
      }
      <Link to="/voucherpage"><button className="button">Generate Voucher</button></Link>
      <CDataTable
        items={arr}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          email: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  className="button button-b"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    setPopIsOpen(true);
                    setCode(item.voucherCode)
                  }}
                >
                  Email
                </CButton>
              </td>
            );
          },
          print: (item, index) => {
            return (
              <div>
                <td className="py-2">
                  <CButton
                    color="primary"
                    className="button button-b"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      axios.post(process.env.REACT_APP_API_URL + "/users/change_voucher_status" , {
                        code: item.voucherCode,
                        status: "Printed"
                      })
                      .then((response) => {
                        if(response.status === 200) {
                          window.location.href = "/voucherdetail/?code=" + item._id;      
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                    }}
                  >
                    Print
                  </CButton>
                </td>
              </div>
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
                  onClick={(e) => {
                    window.location.href = "/voucherdetail/?code=" + item._id;
                  }}
                >
                  View
                </CButton>
              </td>
            );
          },
        }}
      />
    </div>
    </div>
  );
};

export default VoucherListing;
