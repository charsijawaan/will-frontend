import React from "react";
import * as auth from "../services/adminService";
import * as authenticate from "../services/authService";

import { CButton, CDataTable } from "@coreui/react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const ViewSales = () => {
  
  let history = useHistory();
  const [sales, setSales] = React.useState();
  const getData = () => {
    auth
      .getSales()
      .then((res) => {
        setSales(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return sales;
  };
  //getData();
  React.useEffect(getData, []);

  if (!sales || sales.length === 0) return <p>Cannot find any posts</p>;

  const filtered = sales.data.filter(
    (x) => x.userID === localStorage.getItem("id")
  );
  if (!filtered || filtered.length === 0) return <p>Cannot find any posts</p>;

  const arr = [];
  const obj = Object.entries(filtered);
  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "salesID", label: "ID" },
    { key: "date", label: "Date" },
    { key: "productName", label: "Product" },
    { key: "amount", label: "Amount" },
    { key: "transactionID", label: "Transaction ID" },
    // {
    //   key: "details",
    //   label: "",
    //   _style: { width: "1%" },
    //   sorter: false,
    //   filter: false,
    // },
  ];

  return (    
  <div className="global-container">
  <div className="back-button">
    <Link onClick={history.goBack}><FaArrowLeft /></Link>
  </div>
    <div className="container">
      <h4>All Sales</h4>
      <br />
      <CDataTable
        items={arr}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          // 'details':(item, index) => {
          //   return(
          //     <td className="py-2">
          //       <CButton
          //         color="primary"
          //         variant="outline"
          //         shape="square"
          //         size="sm"
          //         onClick={() => {
          //           console.log("SSSS")
          //         }}
          //       >
          //       Details
          //       </CButton>
          //     </td>
          //   )
          // }
        }}
      />
      </div>
    </div>
  );
};

export default ViewSales;
