import React, { useState } from "react";
import * as auth from "../services/authService";
import { CDataTable } from "@coreui/react";
import Modal from "react-bootstrap/Modal";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
toast.configure();
const CommissionListing = () => {
  let history = useHistory();
  const [commission, setCommission] = React.useState();
  const user = auth.getCurrentUser();
  const [show, setShow] = useState(false);
  const [bankAccNo, setAccNo] = useState();
  const [bankName, setBankName] = useState();
  const [bankAccName, setAccName] = useState();
  const [commissionBalance, setCommissionBalance] = React.useState();
  var balance = 0;

  const handleClose = () => setShow(false);
  const handleShow = (item) => {    
    if(balance===0){
      alert('Could not generate Balance as it is 0.')
      
    }
    else{
    setShow(true);
    setCommissionBalance(item);
    }
  };
  const handleSubmit = async () => {
    const user = await auth.getCurrentUser();
    const userID = user.id;
    const commissionBalance = balance;
    
    const res = await auth.generateBalanceReq(
      userID,
      bankName,
      bankAccName,
      bankAccNo,
      parseInt(commissionBalance)
    );
    console.log(res);
    if (res.status === 200) {
      toast.success("Req generated");
      await auth.updateCommissionStatus(user.id, res.data.data.balanceReqID);
      window.location.reload();
    }
  };
  const getData = () => {
    auth
      .getCommissionList(user.id)
      .then((res) => {
        setCommission(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  // eslint-disable-next-line
  React.useEffect(getData, []);

  if (!commission || commission.length === 0)
    return <p>No commissions to show</p>;
  const filter = commission.data.filter(
    (list) => list.commissionStatus === "Unpaid"
  );
  if (!filter || filter.length === 0) {
    balance = 0;
  } else {
    for (let i = 0; i < filter.length; i++) {
      balance += parseInt(filter[i].commissionBalance);
    }
  }

  const arr = [];
  const obj = Object.entries(commission);
  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "date", label: "Date" },
    { key: "productName", label: "Product Name" },
    { key: "commissionEarned", label: "Commission Earned in %" },
    { key: "commissionBalance", label: "commission Balance" },
    { key: "commissionStatus", label: "Status" },
  ];

  return (
    <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
    <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
    </div>
    <div className="container">
      <button
        className="button"
        onClick={() => handleShow(balance)}
      >
        {" "}
        Generate Balance
      </button>
      <br />
      <h5 className="mb-5">Unpaid Total Balance: {balance}</h5>
      <CDataTable
        items={arr[1]}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
      />
      {!show && (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Bank Details</Modal.Title>
            </Modal.Header>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Bank Account Name</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="accName"
                    onChange={(e) => {
                      setAccName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Bank Name</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="bankName"
                    onChange={(e) => {
                      setBankName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Bank Account Number</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="accNo"
                    onChange={(e) => {
                      setAccNo(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />

            <Modal.Footer>
              <Button variant="contained" color="primary" className="button" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="button"
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
      {show && (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Bank Details</Modal.Title>
            </Modal.Header>
            <h5>balance to be withdrawn: {balance}</h5>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Bank Account Name</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="accName"
                    onChange={(e) => {
                      setAccName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Bank Name</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="bankName"
                    onChange={(e) => {
                      setBankName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Bank Account Number</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="accNo"
                    onChange={(e) => {
                      setAccNo(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <br />

            <Modal.Footer>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
      </div>
    </div>
  );
};

export default CommissionListing;
