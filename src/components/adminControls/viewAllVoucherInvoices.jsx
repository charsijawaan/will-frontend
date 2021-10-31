import React from "react";
import * as auth from "../../services/adminService";
import { CButton, CDataTable } from "@coreui/react";    
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const ViewAllVoucherInvoices = ({ user }) => {  
    let history = useHistory();

    const [vouchers, setVouchers] = React.useState([]);

    const [commision, setCommision] = useState();
    const [discount, setDiscount] = useState();

    const isFirstRender = useRef(true)

    React.useEffect(() => {
        auth.getTransactionList()
        .then((res) => {
            setVouchers(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return;
        }
        vouchers.forEach((v) => {
            if(v.processedBy === "") {
                v.name = "No Name Available"
            }
            else {
                axios.post(process.env.REACT_APP_API_URL + "/users/get_user_email_by_id", {
                    userID: v.processedBy
                }).then((response) => {
                    v.name = response.data.name;
                }).catch((error2) => {
                    console.log(error2);
                })                
            }
        })
    }, [vouchers])

    const fields = [
        { key: "date", label: "Date" },    
        { key: "quantity", label: "Quantity" },
        { key: "paymentNumber", label: "Payment Number" },
        { key: "amount", label: "Amount Paid" },
        { key: "b2bClient", label: "Client Name" },
        { key: "name", label: "Processed By" },
        {
          key: "view",
          label: "",
          _style: { width: "30%" },
          sorter: false,
          filter: false,
        },
    ];

    function assignPaymentNumber(item, paymentNumber) {
        if(paymentNumber.length !== 0) {
            axios.post('/users/add_payment_number_to_transaction', {
                transactionID: item._id,
                paymentNumber: paymentNumber.value,
                processedBy: localStorage.getItem("id"),
            })
            .then((response) => {                
                let salesID = response.data.salesID;
                if(localStorage.getItem('type') === "organisationUser") {
                    axios.post('/users/get_discount_commision_of_organisational_user', {

                    })
                    .then((response) => {
                        let commisionPer = response.data.discountAndCommision.commissionPercentage;
                        let discountPer = Number(response.data.discountAndCommision.discountPercentage);                        
                        
                        axios.post("/users/generate-commission", {
                            willAmbID: localStorage.getItem("id"),
                            userID: "",
                            commissionEarned: commisionPer,
                            commissionBalance: (item.amount / (1 - (discountPer / 100)) * (commisionPer / 100)),
                            productName: "Employee Voucher",
                            userName: "",
                            salesID: salesID,
                        })
                        .then((response) => {
                            window.location.href = "/viewallvoucherinvoices";
                        })
                        .catch((error) => {
                            console.log(error);
                        })

                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }        
    }

    return (
        <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
          <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
          </div>
        <div className="container"><h4 className="mb-5">Showing Transaction List </h4>
            <Link to="/admin/create-invoice" ><button className="button">Generate B2B voucher invoice</button></Link>
            
            <CDataTable
                items={vouchers}
                fields={fields}
                columnFilter
                tableFilter
                itemsPerPage={10}
                sorter
                pagination
                scopedSlots={{
                    view: (item, index) => {
                        return (
                            <div>
                                {item.paymentNumber.length > 0 && 
                                <td className="py-2">
                                    <CButton color="primary" className="button button-b" shape="square" size="sm" href={"view_transaction_pdf?t_id=" + item._id}>View Invoice PDF</CButton>
                                </td>
                                }
                                {item.paymentNumber.length < 1 &&                                 
                                <div style={{display: "flex"}}>
                                    <td className="py-2">
                                        <CButton color="primary"  className="button button-b" shape="square" size="sm">View Invoice PDF</CButton>
                                    </td>
                                    <input type="number" id={"p_input_id" + index} />
                                    <td className="py-2">
                                        <CButton color="primary"  className="button button-b" shape="square" size="sm" 
                                            onClick={() => {
                                                assignPaymentNumber(item, document.getElementById("p_input_id"+index));
                                            }}>
                                            Add Payment Number
                                        </CButton>
                                    </td>
                                </div>                                
                                }                                
                            </div>
                        );
                    },
                }}
            />
            </div>
        </div>
    );
};

export default ViewAllVoucherInvoices;
