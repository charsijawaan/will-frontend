import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import auth from "../../services/adminService";
import Form from "react-bootstrap/Form";
import{Row, Col, Container} from 'react-bootstrap'
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";
toast.configure();

const EditDiscount = ({match}) => {
   
  const [type, setType] = React.useState();
  const [fromNoQty, setfromNoQty] = React.useState(null);
  const [toNoQty, settoNoQty] = React.useState(null);
  const [discountPercentage, setDisPercentage] = React.useState();
  const [commissionPercentage, setComPercentage] = React.useState();
  const [showFields, setShowField] = React.useState(false);
  const [amount, setAmount] = React.useState(null);
    const [discount, setDiscount] = useState()
    const getData = () => {
        auth
          .getDiscounts()
          .then((res) => {
            setDiscount(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      //getData();
      React.useEffect(getData, []);

     
      if (!discount || discount.length === 0) return <p></p>;
      const filter = discount.data.filter((discounts) => discounts.discountCode === match.params.id);

      const handleUpdate=async()=>{
        const code = match.params.id
        if (type === undefined) {
          setType(filter[0].type);
        }
        if (fromNoQty == null) {
          setfromNoQty(filter[0].fromNoQty);
        }
        if (toNoQty === null) {
          settoNoQty(filter[0].toNoQty);
        }
        if (discountPercentage === undefined) {
          setDisPercentage(filter[0].discountPercentage);
        }
        if (commissionPercentage === undefined) {
          setComPercentage(filter[0].commissionPercentage);
        }
        if (amount === null) {
          setAmount(filter[0].amount);
        }
        const discountCode=code
        const updatedBy=auth.getCurrentUser().name
         const response = await auth.editDiscount(code,type,fromNoQty,toNoQty,discountPercentage,
        commissionPercentage,amount,discountCode,updatedBy);
         if (response.status === 200) {
           toast.success("Discount Updated");
         }
      }
     
      return (    
      <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link to="/admin/setup-discount"><FaArrowLeft /></Link>
      </div>
        <Container>
          <h4 className="mb-5">Edit Discount</h4>
          <Form className="l-form">
          <Form.Label>Type</Form.Label>
          <select className="login__input form-control" selected={filter[0].type} onChange={(e)=>{
            setType(e.target.value)
          }}>
          
            <option >Please Select One</option>
            <option value="type" selected>{filter[0].type}</option>
            <option value="Yes">Employee Voucher</option>
            <option value="Will Ambassador">Will Ambassador</option>
            <option value="Will Ambassador B2B Discount">
              Will Ambassador B2B Discount
            </option>
            <option value="Organisation User B2B Discount">
              Organisation User B2B Discount
            </option>
          </select>
      {filter[0].type==="Employee Voucher" && (
        <div>
              <Form.Label>From No Quantity</Form.Label>
            <input
              name="fromNoQty"
               className="login__input form-control"
              defaultValue={filter[0].fromNoQty}
              onChange={(e) => {
                setfromNoQty(e.target.value);
              }}
            />
          <br />
              <label>To No Quantity</label>

            <input
              name="toNoQty" 
              className="login__input form-control"
              defaultValue={filter[0].toNoQty}
              onChange={(e) => {
                settoNoQty(e.target.value);
              }}
            />
          <br />
              <label>Amount</label>
            <input
              name="amount" 
              className="login__input form-control"
              defaultValue={filter[0].amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
        </div>
      )}
      {filter[0].type!=="Employee Voucher" && (
         <>
             <label>Discount Percentage</label>
           <input
             type="number" 
             className="login__input form-control"
             defaultValue={filter[0].discountPercentage}
             onChange={(e) => {
               setDisPercentage(e.target.value);
             }}
           />
         <br />
         <br />
             <label>Commission Percentage</label>
           <input
             type="number"
              className="login__input form-control"
             defaultValue={filter[0].commissionPercentage}
             onChange={(e) => {
               setComPercentage(e.target.value);
             }}
           />
       </>
      )}
      <br />
             </Form>
             <button  className="button button-b" onClick={handleUpdate}>Update Discount</button>
        </Container>
        </div>
      );
};

export default EditDiscount;
