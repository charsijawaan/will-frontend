import React, { useState } from "react";
import { CButton, CDataTable } from "@coreui/react";
import Modal from "react-bootstrap/Modal";
import * as auth from "../services/authService";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import axios from 'axios';

toast.configure();

const Formdata = (props) => {
  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [item, setItem] = useState();
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Cannot find any posts</p>;
  const arr = [];

  const obj = Object.entries(posts.data);

  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "name", _style: { width: "30%" } },
    "img",
    "description",

    {
      key: "buttons",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    {
      key: "button1",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    
  ];

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setItem(item);
  };

  const handleEmail = async () => {
    const id = item;
    console.log(id);
    const res = await auth.emailVoucher(id, email);
    if (res.status === 200) {
      toast.success("Email Sent");
    }
  };

  return (
    <div className="container">
      <CDataTable
        items={arr}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={10}
        sorter
        pagination
        scopedSlots={{
          buttons: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  className="button button-b"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => handleShow(item._id)}
                >
                  Email
                </CButton>
              </td>
            );
          },
          button1: (item, index) => {
            return (
              <td className="py-2">
                <CButton color="primary" className="button button-b" variant="outline" shape="square" size="sm">
                  <a onClick={() => {
                      axios.post('/getimg', {
                        imgURL: item.img,
                        code: props.user.code
                      })
                      .then((response) => {
                        setTimeout(() => {
                          window.open(response.data.imgURL);
                        }, 1000)                        
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}>
                    Download
                  </a>
                  <br/>
                </CButton>
              </td>
            );
          },
         
          img: (item, index) => {
            return (
              <td className="py-2">
                <img src={item.img} alt="flyer" />
              </td>
            );
          },
          
         
        }}
      />
      {show && (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Email to</Modal.Title>
            </Modal.Header>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Email Address</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
            </div>
            <Modal.Footer>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="contained" color="primary" onClick={handleEmail}>
                Email
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Formdata;
