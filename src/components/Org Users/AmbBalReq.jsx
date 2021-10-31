import React, { useState } from "react";
import * as auth from "../../services/adminService";
import { CButton, CDataTable , CCollapse, CCardBody} from "@coreui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'
import { Modal, Button , Row, Col} from "react-bootstrap";
toast.configure()

const AmbBalanceRequests = () => {
  let history = useHistory();
  const [list, setList] = useState();
  const [show, setShow] = useState();
  const [item, setItem] = useState();
  const [ref, setRefNo] = useState();
  const [details, setDetails] = useState([]);


  const getData = () => {
    auth
      .getBalanceRequests()
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // eslint-disable-next-line
  React.useEffect(getData, []);
  if (!list || list.length === 0)
    return <p>No Balance requests at the moment</p>;

    const filter= list.data.filter(x=>x.userType==="will Ambassador")
   

  const fields = [
    { key: "reqDate", label: "Request Date" },
    { key: "userName", label: "User Name" },
    { key: "userType", label: "User Type" },
    { key: "reqStatus", label: "Status" },

    {
      key: "clear",
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
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setItem(item);
  };

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

  const handlePayments = async (id, ref) => {
    await auth.clearCommissionStatus(id);
    const clearedBy = localStorage.getItem('name')
    const res = await auth.clearPayment(id, ref, clearedBy);
    if (res.status === 200) {
      toast.success("Payment Cleared");
      window.location.reload();
    }
  };
  return (
    <>   
    <div className="global-container">
    <div className="back-button">
      <Link onClick={history.goBack}><FaArrowLeft /></Link>
    </div>
    <div className="container">
    <h4>Will Ambassadors Balance Requests</h4>
     
      <CDataTable
        items={filter}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          clear: (item, index) => {
            console.log(item)
            return (              
              <td className="py-2">
                {item.reqStatus !== "Paid" &&
                  <CButton
                  color="primary"
                  className="button button-b"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    handleShow(item.balanceReqID);
                  }}
                >
                  Clear Payment
                </CButton>
                }
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
                    toggleDetails(index);
                  }}
                >
                  {details.includes(index) ? "Hide" : "View Details "}
                </CButton>
              </td>
            );
          },
          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                <p><b>User Name:</b>{item.userName}</p>
                  <p><b>User Type:</b>{item.userType}</p>
                  <p><b>Request Date:</b>{item.reqDate}</p>
                  <p><b>Bank Name:</b>{item.bankName}</p>
                  <p><b>Bank Account Number:</b>{item.bankAccNo}</p>
                  <p><b>bank Account Name:</b>{item.bankAccountName}</p>
                  <p><b>Payment Cleared By:</b>{item.clearedBy}</p>
                 
                  <p><b>Status:</b> {item.reqStatus}</p>
                  
                </CCardBody>
              </CCollapse>
            );
          },
         
        }}
      />
     </div>
    {show && (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reference Number</Modal.Title>
          </Modal.Header>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label>Enter Payment Reference Number</label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="email"
                  onChange={(e) => {
                    setRefNo(e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
          </div>
          <Modal.Footer>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handlePayments(item, ref)}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )}
    </div>
    </>
  );
};

export default AmbBalanceRequests;
