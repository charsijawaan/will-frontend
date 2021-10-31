import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/adminService";
import ProductListing from "./ProductsListing";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";
toast.configure();

const ProductsPrice = () => {

  const [product, setProduct] = useState();
  const [amount, setAmount] = useState();

  const user = auth.getCurrentUser();
  const updatedBy = user.name;

  const handleSubmit = async () => {
    const response = await auth.updatePrice(product, amount, updatedBy);
    if (response.status === 200) {
      toast.success("Price updated successfully");
      window.location.href = "/productsprice";
    }
  };

  return (
    <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link to="/adminhome"><FaArrowLeft /></Link>
      </div>
    <div className="container">
      <h4>Set Products Price</h4>
      <br />
      <Form >
        <div class="form-group container">
          <div className="row">
            <div className="col-md-6">
              <label>Product</label>
            </div>
            <div classname="col">
              <select
              className="form-control"
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
              >
                <option>Please Select One</option>
                <option value="Will Creation">Will Creation</option>
                <option value="Codicil Creation">Codicil Creation</option>
                <option value="Basic Will and Will Documents Registeration">
                  Basic Will and Will Documents Registeration
                </option>
                <option value="Basic Will Search">Basic Will Search</option>
                <option value="Executor Will Copy request">
                  Executor Will Copy request
                </option>
                <option value="Probate Registry Will">
                  Probate Registry Will
                </option>
                <option value="Deed of Gift">
                  Deed of Gift
                </option>
                <option value="Living Trust">
                  Living Trust
                </option>
              </select>
            </div>
          </div>
          
                <br />
        <div>
            <label>Enter Price</label>
          <div>
            <input
              type="number"
              className="form-control"
              placeholder="enter amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
        </div>
        </div>
        <button className="button" onClick={handleSubmit}>
          Update price
        </button>
        <br />
        <br />
        <ProductListing />
      </Form>
    </div>
    </div>
  );
};

export default ProductsPrice;
