import React from "react";
import Button from "@material-ui/core/Button";
import auth from "../../services/adminService";
import * as authuser from "../../services/authService";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";
toast.configure();

const FlyerForm = () => {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImg] = React.useState();
  const [type, setType] = React.useState();

  const handleSubmit = async () => {

    const uploadedBy = authuser.getCurrentUser().name;

    var data = new FormData();
    data.append("img", image);
    data.append("name", name);
    data.append("description", description);
    data.append("type", type);
    data.append("uploadedBy", uploadedBy);

    const response = await auth.uploadFlyer(data);
    //toast.success("Flyer uploaded successfully");
    if (response.status === 201) {
      window.location.href = "/admin/flyer";
    }
  };

  return (
    <div className="global-container">
    <div className="back-button">
      <Link to="/admin/flyer"><FaArrowLeft /></Link>
    </div>
    <div className="container col-md-6">
      <br />
      <h4>Create Flyer</h4>
      <br />
      <Form className="l-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Flyer Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="custom-file">
          <label for="customFile">Flyer Image</label>
          <input
            type="file"
            name="img"
            onChange={(e) => {
              setImg(e.target.files[0]);
              console.log(image);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Flyer Description</label>
          <textarea
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label>Flyer Type</label>
          <select
            for="exampleInputEmail1"
            name="type"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option>[Please select one]</option>
            <option>B2B / Employee Voucher</option>
            <option>Individual</option>
          </select>
        </div>
        <div>
          <button className="button" onClick={handleSubmit}>
            Upload Flyer
          </button>
        </div>
      </Form>
    </div>
    </div>
  );
};

export default FlyerForm;
