import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../../services/adminService";
import * as author from "../../../services/authService";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");

  const [promotionCode, setCode] = React.useState();
  const [amount, setAmount] = React.useState();
  const [user, setUser] = useState([]);
  const [discount, setDiscount] = React.useState();
  const [price, setPrice] = React.useState();
  const [show, setShow] = React.useState();
  const [commissionEarned, setComissionEarned] = React.useState();
  const [commissionBalance, setCommissionBalance] = React.useState();

  const loginuser = author.getCurrentUser();

  const config = {
    reference: new Date().getTime(),
    email: loginuser.email,
    amount: amount,
    currency: "ZAR",
    publicKey: "pk_test_6ad7daa084d40f22350038852006a020e49a4428",
  };
  const handlePaystackSuccessAction = async (response) => {
    // Implementation for whatever you want to do with email and after success call.
    if (response.status === "success") {
      const userID = loginuser.id;
      const userName = loginuser.name;
      const willAmbID = filtercode[0]._id;
      const productName = product[0].name;
      await auth.addCommission(
        userID,
        willAmbID,
        commissionEarned,
        commissionBalance,
        productName,
        userName
      );
      const discountCode = discountdetail[0].discountCode;
      const discountAmount = amount;
      await author.updateBasicWill(
        id,
        promotionCode,
        discountCode,
        discountAmount
      );
      await auth.addSale(product[0].name, amount, response.reference);
    }
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Payment",
    onSuccess: (response) => handlePaystackSuccessAction(response),
    onClose: handlePaystackCloseAction,
  };

  useEffect(() => {
    const getData = () => {
      auth
        .getUsersList()
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      //return user;
    };
    getData();
  }, []);

  // get discount
  useEffect(() => {
    function getDiscount() {
      auth
        .getDiscounts()
        .then((res) => {
          setDiscount(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      //return discount;
    }
    getDiscount();
  }, []);

  // get base price of product
  useEffect(() => {
    function getBasePrice() {
      author
        .getProducts()
        .then((res) => {
          setPrice(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      //return price;
    }
    getBasePrice();
  }, []);

  if (!user || user.length === 0) return <p></p>;
  if (!discount || discount.length === 0) return <p></p>;
  if (!price || price.length === 0) return <p></p>;

  //base price
  const product = price.data.filter(
    (x) => x.name === "Basic Will and Will Documents Registeration"
  );
  const willPrice = product[0].basePrice;

  //check ambassador code matches or not
  const filtercode = user.data.filter((x) => x.code === promotionCode);
  var discountdetail = [];
  if (filtercode[0].type === "willAmbassador") {
    discountdetail = discount.data.filter((x) => x.type === "Will Ambassador");
  } else {
    discountdetail = discount.data.filter(
      (x) => x.type === "Organisation User B2B Discount"
    );
  }

  const calculateAmount = () => {
    setShow(true);

    // calculate discounted price after promotion
    const d = willPrice * (discountdetail[0].discountPercentage / 100);
    const discountedPrice = willPrice - d;
    setAmount(discountedPrice);

    // calculate comission earned
    // const com = willPrice * (discountdetail[0].commissionPercentage / 100);
    const com = discountdetail[0].commissionPercentage;
    setComissionEarned(com);

    // set commisision balance
    // const comBal = willPrice - com;
    const commB = willPrice * (discountdetail[0].commissionPercentage / 100);
    const comBal = willPrice - commB;
    setCommissionBalance(comBal);
  };
  return (
    <div className="container">
      <h4>CheckOut Page</h4>

      <div >
        <div>
          <label>Enter promotion Code</label>
        </div>
        <div>
          <input
            name="promotionCode"
            className="form-control"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button className="button" onClick={calculateAmount}>Checkout</button>
      </div>
      {show && (
        <div>
          Your actual amount is: {willPrice}
          <br />
          Discount applied is: {discountdetail[0].discountPercentage}%
          <br />
          Total amount: {amount}
          <br />
          <PaystackButton {...componentProps} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
