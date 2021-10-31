import React from "react";
import * as auth from "../../services/adminService";
import { CDataTable } from "@coreui/react";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";

const Sales = () => {
  const [sales, setSales] = React.useState();
  const getData = () => {
    auth
      .getSales()
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return sales;
  };
  //getData();
  React.useEffect(getData, []);

  if (!sales || sales.length === 0) return <p>No sales to show</p>;
  const arr = [];
  const obj = Object.entries(sales);
  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "salesID", label: "ID" },
    { key: "date", label: "date" },
    { key: "productName", label: "Product" },
    { key: "amount", label: "Price" },
    { key: "transactionID", label: "Tran" },
  ];
  return (
    <div className="global-container" style={{backgroundAttachment:"fixed"}}>
    <div className="back-button">
      <Link to="/adminhome"><FaArrowLeft /></Link>
    </div>
    <div className="container">
    <br />
    <h4>Sales</h4>
    <br />
      <CDataTable
        items={arr[1]}
        fields={fields}
        columnFilter
        tableFilter
        responsive
        itemsPerPage={10}
        sorter
        pagination
      />
      </div>
    </div>
  );
};

export default Sales;
