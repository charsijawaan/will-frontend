import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/adminService";
import * as autherize from "../../services/authService";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

toast.configure();

const EmployeeVoucherPopPage = () => {
  let history = useHistory();

  const [quantity, setQuantity] = React.useState();
  const [amount, setAmount] = React.useState(null);
  const [discount, setDiscount] = React.useState();
  const [actualPrice, setActualPrice] = React.useState();
  const [products, setProducts] = React.useState();
  const [promoCode, setPromoCode] = React.useState("");

  const [commisionEarned, setCommisionEarned] = React.useState();
  const [commisionBalance, setCommisionBalance] = React.useState();
  const [willAMBID, setWillAMBID] = React.useState();

  const [finalDiscount, setFinalDiscount] = React.useState(0);

  const getData = () => {
    // console.log(localStorage.getItem("id"));
    auth.getDiscounts()
      .then((res) => {
        // console.log(res.data);
        setDiscount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(discount);
    return discount;
  };

  // const filteredProduct = discount.data.filter( (x) => x.type === "Employee Voucher");
  // console.log(filteredProduct);


  //getData();
  React.useEffect(getData, []);

  //get products
  const getProducts = () => {
    autherize
      .getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(products);
    return products;
  };

  //getData();
  React.useEffect(getProducts, []);
  if (!discount || discount.length === 0) return <p>Cannot find any posts</p>;
  if (!products || products.length === 0) return <p>Cannot find any posts</p>;

  // implementing discount of employee coucher/ b2b
  const filter = discount.data.filter((x) => x.type === "Employee Voucher");
  const discountFilter = discount.data.filter((x) => x.type === "Will Ambassador B2B Discount" || x.type === "Organisation User B2B Discount");

  const calAmount = () => {

    setWillAMBID("");
    setCommisionEarned();
    setCommisionBalance();
    
    var price = filter.filter(x=> x.fromNoQty <= quantity && x.toNoQty>=quantity);

    if(price.length){
      var index = price.length-1
      price = price[index]
    }
    else if(quantity < filter[0].fromNoQty) {
      price = filter[0]
    }
    else if(quantity > filter[filter.length - 1].toNoQty) {
      price = filter[filter.length - 1]
    }

    setActualPrice(price.amount * quantity);
    
    if(promoCode === "") {
      setAmount(actualPrice);
    }
    else {
      axios.post(process.env.REACT_APP_API_URL + "/users/match_promo_code", {
        promoCode: promoCode
      })
      .then((response) => {
        if(response.data.user) {
          if(response.data.user.type === "willAmbassdor") {
            setWillAMBID(response.data.user._id);
            for(let i = 0; i < discountFilter.length; i++) {
              if(discountFilter[i].type === "Will Ambassador B2B Discount") {
                let amountToMinus = (actualPrice * discountFilter[i].discountPercentage) / 100;
                setCommisionEarned(discountFilter[i].commissionPercentage);
                setCommisionBalance((discountFilter[i].commissionPercentage / 100) * actualPrice);
                setAmount(actualPrice - amountToMinus);
                setFinalDiscount(discountFilter[i].discountPercentage);
              }
            }
          }
          else if(response.data.user.type === "organisationUser") {
            setWillAMBID(response.data.user._id);
            for(let i = 0; i < discountFilter.length; i++) {
              if(discountFilter[i].type === "Organisation User B2B Discount") {
                let amountToMinus = (actualPrice * discountFilter[i].discountPercentage) / 100;
                setCommisionEarned(discountFilter[i].commissionPercentage);
                setCommisionBalance((discountFilter[i].commissionPercentage / 100) * actualPrice);
                setAmount(actualPrice - amountToMinus);
                setFinalDiscount(discountFilter[i].discountPercentage);
              }
            }
          }
        }
        else {
          alert("Incorrect Promo Code");
        }
      })
      .catch((error) => {
        console.log(error);
      })
        // if(promoCode === discountFilter[i].discountCode) {
        //   promoCodeFound = true;
        //   let amountToMinus = (actualPrice * discountFilter[i].discountPercentage) / 100
        //   setAmount(actualPrice - amountToMinus);
        //   break;
        // }
    }
  
  };
  
  const user = auth.getCurrentUser();

  const config = {
    reference: new Date().getTime(),
    email: user.email,
    amount: amount,
    currency: "ZAR",
    publicKey: "pk_test_6ad7daa084d40f22350038852006a020e49a4428",
  };
  
  const handlePaystackSuccessAction = async (response) => {
    // Implementation for whatever you want to do with email and after success call.    
    if (response.status === "success") {
      const userid = user.id;
      // console.log(userid);
      const discountID = filter[0]._id;
      //const paymentNumber = 0;
      const b2bClient = user.name;
      const processedBy = "";
      const paymentNumber = response.reference;
      const transaction = await auth.transaction(
        userid,
        discountID,
        paymentNumber,
        quantity,
        b2bClient,
        processedBy,
        amount
      );
      const paymentID = response.reference;
      if (transaction.status === 200) {
        const invoiceID = transaction.data.data.invoiceID;
        var i = 0;
        for (i = 0; i < quantity; i++) {
          await autherize.generateVoucher(
            userid,
            paymentNumber,
            b2bClient,
            invoiceID
          );
        }

        const id = transaction.data.data.invoiceID;
        const result = await auth.updateInvoice(id, paymentID);

        axios.post(process.env.REACT_APP_API_URL + "/users/record_sale_of_b2b_client_voucher", {
          transactionID: paymentID,
          amount: amount,
          userID: localStorage.getItem("id")
        })
        .then((res) => {
          let salesID = res.data.salesID;
          console.log("SALES ID = " + salesID);
          
          axios.post(process.env.REACT_APP_API_URL + "/users/generate-commission", {
            willAmbID: willAMBID,
            userID: "",
            commissionEarned: commisionEarned,
            commissionBalance: commisionBalance,
            productName: "Employee Voucher",
            userName: "",
            salesID: salesID,
          })
          .then((res3) => {
            window.location.href = "/voucherlisting";
          })
          .catch((err) => {
            console.log(err);
          })
        })
        .catch((err) => {
          console.log(err);
        })
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
    text: "Checkout",
    className:"button button-b",
    onSuccess: (email) => handlePaystackSuccessAction(email),
    onClose: handlePaystackCloseAction,
  };

  const handleSubmit = async () => {
    const userid = user.id;
    const discountID = filter[0]._id;
    const paymentNumber = 0;
    const b2bClient = "";
    const processedBy = "";
    const response = await autherize.generateVoucher(
      userid,
      discountID,
      paymentNumber,
      quantity,
      b2bClient,
      processedBy,
      amount
    );
    if (response.status === 200) {
      toast.success("vouchers created");
    }
  };
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
      </div>
    <div className="container">
      <h4>Employee Voucher Pop Page for B2B Client</h4>
      <br />
      <div className="form-group">
        <div className="row">
          <div className="col-md-4">
            <label>Enter Quantity Field</label>
          </div>
          <div className="col-md-4">
            <input
              name="quantity"
              type="number"
              className="form-control"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label>Enter Promotion Code</label>
          </div>
          <div className="col-md-4">
            <input
              name="quantity"
              type="text"
              className="form-control"
              onChange={(e) => {
                setPromoCode(e.target.value);
              }}
            />
          </div>
        </div>


      </div>
      <div>Double click to calculate amount</div>
      <button className="button button-b" onClick={calAmount}>
        Calculate Amount
      </button>
      <br />
      <br />
      {amount && (
        <div>
          <label>Your actual amount is: {actualPrice}</label>
          <br />
          <label>Discount % applied : {finalDiscount}</label>
          <br />
          <label>Final Amount : {amount}</label>
          <br />
        </div>
      )}

      <PaystackButton {...componentProps} />
    </div>
    </div>
  );
};

export default EmployeeVoucherPopPage;
