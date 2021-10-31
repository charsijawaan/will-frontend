import React from "react";
import Button from "@material-ui/core/Button";
import auth from "../../services/adminService";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Styling/table.css"
import { FaArrowLeft } from "react-icons/fa";
toast.configure();

const EditFlyer = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const flyer_id = URLParams.get("id");

  const [type, setType] = React.useState();
  const [description, setDesc] = React.useState();
  const [name, setName] = React.useState();
  const [flyer, setFlyer] = React.useState();

  const getData = () => {
    auth
      .getFlyers()
      .then((res) => {
        setFlyer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  if (!flyer || flyer.length === 0) return <p></p>;
  const filter = flyer.data.filter((flyers) => flyers._id === flyer_id);

  const handleUpdate = async () => {
    const data = new FormData();
    if (name === null) {
      setName(filter[0].name);
    }
    if (type == null) {
      setType(filter[0].type);
    }
    if (description === null) {
      setDesc(filter[0].description);
    }

    const id = flyer_id;

    const response = await auth.editFlyer(id, name, type, description);
    if (response.status === 200) {
      toast.success("Profile Updated");
      window.location.href = "/admin/flyer";
    }
  };
  return (
    <div className="global-container">
    <div className="back-button">
      <Link to="/admin/flyer"><FaArrowLeft /></Link>
    </div>
    <div className="container">
      <br />
      <h4>Edit Flyer</h4>
      <br />
      <Form className="l-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            defaultValue={filter[0].name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label>Flyer Type</label>
          <select
            name="type"
            class="form-control"
            defaultValue={filter[0].type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option>[Please select one]</option>
            <option>B2B / Employee Voucher</option>
            <option>Individual</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>
          <textarea
            type="text"
            class="form-control"
            name="description"
            defaultValue={filter[0].description}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="button"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </Form>
    </div>
    </div>
  );
};

export default EditFlyer;
