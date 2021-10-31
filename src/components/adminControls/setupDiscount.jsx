import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import * as auth from "../../services/adminService";
import * as user from "../../services/authService";
import { CButton, CDataTable } from "@coreui/react";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
const SetupDiscount = ({ history }) => {
  const [type, setType] = React.useState();
  const [fromNoQty, setfromNoQty] = React.useState(null);
  const [toNoQty, settoNoQty] = React.useState(null);
  const [discountPercentage, setDisPercentage] = React.useState();
  const [commissionPercentage, setComPercentage] = React.useState();
  const [showFields, setShowField] = React.useState();
  const [amount, setAmount] = React.useState(null);

  const [discounts, setDis] = React.useState();
  const getData = () => {
    auth
      .getDiscounts()
      .then((res) => {
        setDis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return discounts;
  };
  //getData();
  React.useEffect(getData, []);
  if (!discounts || discounts.length === 0) return <p>Cannot find any posts</p>;
  //converting post data into array
  const arr = [];
  const obj = Object.entries(discounts);
  obj.forEach(([key, value]) => arr.push(value));

  const filter1 = arr[1].filter((x) => x.type === "Employee Voucher");
  const filter2 = arr[1].filter((x) => x.type !== "Employee Voucher");

  const fields = [
    { key: "type", label: "Type" },

    { key: "discountPercentage", label: "Discount %" },
    { key: "commissionPercentage", label: "Commission %" },
    {
      key: "remove",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "edit",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
   
  ];

  const fields1 = [
    { key: "type", label: "Type" },
    { key: "fromNoQty", label: "From No Qty" },
    { key: "toNoQty", label: "To No Qty" },
    { key: "amount", label: "Amount" },
    {
      key: "remove",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "edit",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
   
  ];

  const handleSubmit = async () => {
    const updatedBy = user.getCurrentUser().name;

    const response = await auth.setupDiscount(
      type,
      fromNoQty,
      toNoQty,
      discountPercentage,
      commissionPercentage,
      amount,
      updatedBy
    );
    if (response.status === 200) {
      toast.success("Discount Setup Successfully");
    }
  };
  const handleChange = (e) => {
    if (e.target.value === "Yes") {
      setShowField(e.target.value);
      setType("Employee Voucher");
    } else {
      setShowField(null);
      setType(e.target.value);
    }
  };

  return (
    <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
      <div className="back-button">
        <Link to="/adminhome"><FaArrowLeft /></Link>
      </div>
    <div className="container">
      <br />
      <h4>Setup Discount</h4>
      <br />
      <div className="l-form">
      {/* <div className="row">
        <div className="col-md-6">
          <label>Type</label>
        </div>
        <div className="col">
          <select onChange={handleChange}>
            <option>Please Select One</option>
            <option value="Yes" defaultValue >Employee Voucher</option>
            {/* <option value="Will Ambassador">Will Ambassador</option>
            <option value="Will Ambassador B2B Discount">
              Will Ambassador B2B Discount
            </option>
            <option value="Organisation User B2B Discount">
              Organisation User B2B Discount
            </option>
          </select>
        </div>
      </div> */}
      <br />
        <div>
              <label>From No Quantity</label>
            <input
              name="fromNoQty"
              className="login__input form-control"
              type="number"
              onChange={(e) => {
                setfromNoQty(e.target.value);
              }}
            />
            <br />
          <br />
              <label>To No Quantity</label>
            <input
              name="fromNoQty"
              className="login__input form-control"
              type="number"
              onChange={(e) => {
                settoNoQty(e.target.value);
              }}
            />
          <br />
          <br />
              <label>Amount</label>
            <input
              name="amount"
              className="login__input form-control"
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
        </div>
      <br />

        {/* {!showFields && (
          <>
            <div className="row">
              <div className="col-md-6">
                <label>Discount Percentage</label>
              </div>
              <input
                type="number"
                onChange={(e) => {
                  setDisPercentage(e.target.value);
                }}
              />
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <label>Commission Percentage</label>
              </div>
              <input
                type="number"
                onChange={(e) => {
                  setComPercentage(e.target.value);
                }}
              />
            </div>
          </>
        )} */}

        <br />

        <button
          className="button button-b"
          onClick={handleSubmit}
        >
          Add price for Voucher
        </button>
      </div>

      <br />
      <h4 className="text-center mb-5">Already Setup Discounts</h4>
      <h4 className="mb-3">Discount Table</h4>
      <CDataTable
        items={filter2}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          remove: (item, index) => {
            return (
              <td className="py-2">
                {/* <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={(e) => {
                    auth.removeDiscount(item._id);
                    window.location.reload();
                  }}
                >
                  Delete
                </CButton> */}
              </td>
            );
          },
          edit: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  shape="square"
                  className="button button-b"
                  size="sm"
                  onClick={() => {
                    history.push("/edit-discount/" + item.discountCode);
                  }}
                >
                  Edit
                </CButton>
              </td>
            );
          },
        
        }}
      />
      <h4 className="mb-3" style={{ marginTop: "30px" }}>
        Employees Voucher Pricing
      </h4>
      <CDataTable
        items={filter1}
        fields={fields1}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          remove: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  shape="square"
                  size="sm"
                  className="button button-b"
                  onClick={(e) => {
                    auth.removeDiscount(item._id);
                    window.location.reload();
                  }}
                >
                  Delete
                </CButton>
              </td>
            );
          },
          edit: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  shape="square"
                  size="sm"
                  className="button button-b"
                  onClick={() => {
                    history.push("/edit-discount/" + item.discountCode);
                  }}
                >
                  Edit
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

export default SetupDiscount;
