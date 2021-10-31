import React ,{useState} from "react";
import * as auth from "../../services/adminService";
import * as autherize from "../../services/authService";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";

toast.configure();
const EmployeeVoucherInvoiceCreation = () => {
  const [users, setUser] = useState([]);
  const [b2bClient, setName] = useState();
  const [noOfVoucher, setQuantity] = useState();
  const [products, setProducts] = useState();
  const [amount, SetAmount] = useState();
  const [show, setShow] = useState()
  const [usersList, setUsersList]= useState()
  const [discount, setDiscount]= useState()
  const [discountID, setDiscountID] = useState();
  const [selectValue, setSelectValue] = useState();
  const [commissionEarned, setCommissionEarned] = useState();
  const [commissionBalance, setCommissionBalance] = useState();

  const userType = localStorage.getItem('type')
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
  const getData = () => {
    auth
      .getUsersList()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(users);
    return users;
  };
  //getData();
  React.useEffect(getData, []);
  
    const getUser = () => {
      auth.getUsersList()
        .then((res) => {
          // console.log(res.data)
          setUsersList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(usersList);
      return usersList;
    };
    //getData();
    React.useEffect(getUser, []);

    const getDiscount = () => {
      auth.getDiscounts()
        .then((res) => {
          setDiscount(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //getData();
    React.useEffect(getDiscount, []);
  
  if (!users || users.length === 0) return <p>No Users to show</p>;
  if (!products || products.length === 0) return <p>Cannot find any posts</p>;
  if(!usersList || usersList.products===0) return <p></p>
  if (!discount || discount.length === 0) return <p></p>;

  const f = usersList.data.filter(x=>x._id===localStorage.getItem('id'))
  const filtered = users.data.filter(
    (x) => x.type === "B2B" && (x.status === "Activate" || x.status === "Active")
  );
  
  const filteredProduct = discount.data.filter( (x) => x.type === "Employee Voucher")

  const handleSubmit = async () => {
    axios.post('/users/transaction', {
      userID: selectValue,
      discountID: discountID,
      paymentNumber: "",
      quantity: noOfVoucher,
      b2bClient: b2bClient,
      processedBy: "",
      amount: amount
    })
    .then((response) => {
      window.location.href = "/viewallvoucherinvoices";      
    })
    .catch((error) => {
      console.log(error);
    });
    
    // if(userType==='organisationUser') {
    //   await auth.addCommission( "", localStorage.getItem('id'), commissionEarned, commissionBalance, 'voucher', localStorage.getItem('name') );
    //   await auth.addSale( 'voucher', amount, '', f[0].code );
    // }
   /* await auth.addSale(
      "voucher",
      amount,
      response.reference,
      filtercode[0].code
    );*/

   // window.location.href = "/admin/invoice-listing";
    // window.location.href = "/b2bvouchers";
    // if (response.status === 200) {
    //   toast.success("Successfully created");
    // }
  };
 

  const handleCalAmount=()=>{      

      setShow(true);

      var price = filteredProduct.filter(x=> x.fromNoQty <= noOfVoucher && x.toNoQty>=noOfVoucher);
      
      if(price.length){
        var index = price.length-1
        price = price[index]
      }
      else if(noOfVoucher < filteredProduct[0].fromNoQty) {
        price = filteredProduct[0]
      }
      else if(noOfVoucher > filteredProduct[filteredProduct.length - 1].toNoQty) {
        price = filteredProduct[filteredProduct.length - 1]
      }

      console.log(price);
      setDiscountID(price._id);

      var discountdetail = []
      if(userType==='organisationUser') {
        discountdetail = discount.data.filter(
          (x) => x.type === "Organisation User B2B Discount"
        );
        const discountApplied = discountdetail[0].discountPercentage;
        const com = discountdetail[0].commissionPercentage;
        // console.log("ASDASD = " + com)
        setCommissionEarned(com);
        
        const actualPrice = noOfVoucher * price.amount
        // console.log(actualPrice);

        const dis = actualPrice * (discountApplied/100)
        const discountedPrice = actualPrice - dis
        // console.log(discountedPrice);
        SetAmount(discountedPrice)

        const commB = actualPrice * (discountdetail[0].commissionPercentage / 100);
        // console.log(commB);
         const comBal = actualPrice - commB;
         console.log(comBal);
        setCommissionBalance(comBal);
       }
      else{
        SetAmount(noOfVoucher * price.amount);
      }
    
  }
  return (
    <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link to="/adminhome"><FaArrowLeft /></Link>
      </div>
    <div className="container">
      
    <br />
      <h4>Create Invoice</h4>
      <br />
      <Form className="l-form">
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>B2B Client Name</label>
            </div>
            <div className="col">
              <select
                for="exampleInputEmail1"
                name="b2bClient"
                class="form-control login__form"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setName(e.target.value);
                  setSelectValue(e.target[e.target.selectedIndex].getAttribute("data-id"));
                }}
              >
                <option>[Please select one]</option>
                {filtered.map((post) => {
                  return <option data-id={post._id}>{post.name}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>Enter Quantity Field</label>
            </div>
            <div className="col-md-6">
              <input
                name="noOfVoucher"
                type="number"
                className="form-control"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {userType==="organisationUser" && (
          <>
           <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>promoCode</label>
            </div>
            <div className="col-md-6">
              <input
                
                disabled
                className="form-control"
                defaultValue={f[0].code}
              />
            </div>
          </div>
        </div>
          </>
        )}
        <div className="form-group container">
          <div className="row">
            <div className="col"><h4>Amount</h4></div>
            <div className="col">
              {show && <div><h4>{amount}</h4></div>}

            </div>
          </div>
          
          <button
                className="button"
                onClick={handleCalAmount}
              >
                Calculate Amount
              </button>
              
        <button className="button" onClick={handleSubmit}>
          Complete
        </button>
        </div>
      </Form>
    </div>
    </div>
  );
};

export default EmployeeVoucherInvoiceCreation;
