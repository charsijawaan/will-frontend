import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import * as auth from "../../services/authService";
import * as admin from "../../services/adminService";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
toast.configure();
const ExecWillForm = () => {
  let history = useHistory();
  const [showField, setShowField] = useState();
  const [willRegNo, setRegNo] = useState();
  const [willOwnerName, setWillOwnerName] = useState("");
  const [willOwnerPh, setWillOwnerPh] = useState("");
  const [dob, setDob] = useState();
  const [execName, setExecName] = useState();
  const [execEmail, setExecEmail] = useState();
  const [execPhNo, setExecPhNo] = useState();
  const [rel, setRel] = useState();
  const [reasons, setReasons] = useState();
  const [promotionCode, setCode] = useState();
  const [selfie, setSelfie] = useState();
  const [user, setUser] = useState([]);
  const [price, setPrice] = useState([]);
  const [discount, setDiscount] = useState([]);

  const [commissionEarned, setCommissionEarned] = useState();
  const [commissionBalance, setCommissionBalance] = useState();
  const [amount, setAmount] = useState();
  const [show, setShow] = useState();

  const config = {
    reference: new Date().getTime(),
    email: execEmail,
    amount: amount,
    currency: "ZAR",
    publicKey: "pk_test_6ad7daa084d40f22350038852006a020e49a4428",
  };
  const handlePaystackSuccessAction = async (response) => {
    // Implementation for whatever you want to do with email and after success call.

    if (response.status === "success") {
      const filtercode = user.data.filter((x) => x.code === promotionCode);
      var discountdetail = [];
      if (!filtercode || filtercode.length === 0) {
        discountdetail[0] = 0;
      } else {
        if (filtercode[0].type === "Will Ambassador") {
          discountdetail = discount.data.filter(
            (x) => x.type === "Will Ambassador"
          );
        } else {
          discountdetail = discount.data.filter(
            (x) => x.type === "Organisation User B2B Discount"
          );
        }
      }
      const userID = "";
      const userName = "";
      const willAmbID = filtercode[0]._id;
      const productName = product[0].name;
      const amountPaid = amount;
      const transactionID = response.reference;
      if (discountdetail[0] !== 0) {
        //const discountCode = discountdetail[0].discountCode;
        const discountApplied = discountdetail[0].discountPercentage;

        const id = willRegNo;
        await auth.execWillUpdate(id, discountApplied, amountPaid);
        const sale = await admin.addSale(
          productName,
          amountPaid,
          transactionID,
          filtercode[0].code
        );
        const salesID = sale.data.data.salesID;

        await admin.addCommission(
          userID,
          willAmbID,
          commissionEarned,
          commissionBalance,
          productName,
          userName,
          salesID
        );
      } else {
        const discountApplied = 0;
        const amountPaid = amount;
        const id = willRegNo;
        await auth.execWillUpdate(id, discountApplied, amountPaid);
        await admin.addSale(
          productName,
          amountPaid,
          transactionID,
          filtercode[0].code
        );
      }
    }
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const componentProps = {
    ...config,
    className: "button",
    text: "Payment",
    onSuccess: (email) => handlePaystackSuccessAction(email),
    onClose: handlePaystackCloseAction,
  };

  const handleChange = (e) => {
    if (e.target.value === "Yes") {
      setShowField(e.target.value);
    } else {
      setShowField(null);
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();

    data.append("willRegNo", willRegNo);
    data.append("willOwnerName", willOwnerName);
    data.append("willOwnerPhNo", willOwnerPh);
    data.append("willOwnerDOB", dob);
    data.append("execName", execName);
    data.append("execEmail", execEmail);
    data.append("execPhNo", execPhNo);
    data.append("relationship", rel);
    data.append("reasons", reasons);
    data.append("promotionCode", promotionCode);
    data.append("requesterSelfie", selfie);
    const res = await auth.execForm(data);
    if (res.status === 201) {
      toast.success("Will Owner will be notified of Change");
    }
  };

  // get user data
  const getData = () => {
    admin
      .getUsersList()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  // get base price of product
  const getBasePrice = () => {
    auth
      .getProducts()
      .then((res) => {
        setPrice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getBasePrice, []);

  // get discounts
  // get discount
  const getDiscount = () => {
    admin
      .getDiscounts()
      .then((res) => {
        setDiscount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getDiscount, []);

  if (!user || user.length === 0) return <p></p>;
  if (!discount || discount.length === 0) return <p></p>;
  if (!price || price.length === 0) return <p></p>;

  //base price
  const product = price.data.filter(
    (x) => x.name === "Executor Will Copy request"
  );
  const willPrice = product[0].basePrice;

  const calculateAmount = () => {
    //check ambassador code matches or not
    const filtercode = user.data.filter((x) => x.code === promotionCode);
    console.log(filtercode);
    var discountdetail = [];
    if (!filtercode || filtercode.length === 0) {
      discountdetail[0] = 0;
    } else {
      if (filtercode[0].type === "willAmbassador") {
        discountdetail = discount.data.filter(
          (x) => x.type === "Will Ambassador"
        );
      } else {
        discountdetail = discount.data.filter(
          (x) => x.type === "Organisation User B2B Discount"
        );
      }
    }
    setShow(true);

    if (discountdetail[0] !== 0) {
      // calculate discounted price after promotion
      const d = willPrice * (discountdetail[0].discountPercentage / 100);
      const discountedPrice = willPrice - d;
      setAmount(discountedPrice);

      // calculate comission earned
      // const com = willPrice * (discountdetail[0].commissionPercentage / 100);
      const com = discountdetail[0].commissionPercentage;
      setCommissionEarned(com);

      // set commisision balance
      // const comBal = willPrice - com;
      const commB = willPrice * (discountdetail[0].commissionPercentage / 100);
      const comBal = willPrice - commB;
      setCommissionBalance(comBal);
    } else {
      setAmount(willPrice);
    }
  };
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <div className="container">
      <Form className="l-form">
        <h4>Executor Will Request Form</h4>
        <div >
          <div   >
            <label>Do you have reg no?</label>
          </div>
          <div classname="col">
            <select onChange={handleChange} className="form-control">
              <option>Please Select One</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <br />
        {showField && (
          <div >
            <div   >
              <label>Will Registeration Number</label>
            </div>

            <input
              name="willRegNo"
              className="form-control"
              onChange={(e) => {
                setRegNo(e.target.value);
              }}
            />
          </div>
        )}
        <br />
        {!showField && (
          <div>
            <div >
              <div   >
                <label>Name of Will Owner</label>
              </div>
              <input
                name="willName"
                className="form-control"
                onChange={(e) => {
                  setWillOwnerName(e.target.value);
                }}
              />
            </div>
            <div >
              <div   >
                <label>Phone of Will Owner</label>
              </div>
              <input
                name="ph"
                className="form-control"
                type="number"
                onChange={(e) => {
                  setWillOwnerPh(e.target.value);
                }}
              />
            </div>
            <div >
              <div   >
                <label>DOB of Will Owner</label>
              </div>
              <input
                type="date"
                className="form-control"
                name="dob"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>
          </div>
        )}

        <div >
          <div   >
            <label>Relationship with Will Owner</label>
          </div>
          <input
            name="relationship"
            className="form-control"
            onChange={(e) => {
              setRel(e.target.value);
            }}
          />
        </div>
        <br />
        <div >
          <div   >
            <label>Reasons for Request</label>
          </div>
          <input
            name="reasons"
            className="form-control"
            onChange={(e) => {
              setReasons(e.target.value);
            }}
          />
        </div>
        <br />
        <div >
          <div   >
            <label>Executor Name</label>
          </div>
          <input
            name="execName"
            className="form-control"
            onChange={(e) => {
              setExecName(e.target.value);
            }}
          />
        </div>
        <br />
        <div >
          <div   >
            <label>Executor Email Address</label>
          </div>
          <input
            name="execEmail"
            className="form-control"

            onChange={(e) => {
              setExecEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div >
          <div   >
            <label>Executor Phone Number</label>
          </div>
          <input
            name="execPh"
              className="form-control"
            onChange={(e) => {
              setExecPhNo(e.target.value);
            }}
          />
        </div>
        <br />

        <div >
          <div   >
            <label>Promotion Code</label>
          </div>
          <input
            name="code"
            className="form-control"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
        <br />
        <div >
          <div   >
            <label>Requster Selfie Image</label>
          </div>
          <input
            type="file"
            onChange={(e) => {
              setSelfie(e.target.files[0]);
            }}
            capture
          />
        </div>

        <br />

        <button
          className="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div>
          <button  className="button" onClick={calculateAmount}>
            Checkout
          </button>
        </div>
      </Form>
      {show && (
        <div>
          Your actual amount is: {willPrice}
          <br />
          <br />
          Total amount: {amount}
          <br />
          <PaystackButton {...componentProps} />
          <br />
        </div>
      )}
    </div>
    </div>
  );
};

export default ExecWillForm;
