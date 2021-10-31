import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <div class="row mb-2">
          <div class="col-md-6">
            <label>{label}</label>
          </div>
          <div class="col">
            <input type={type} {...otherProps} className="form-control" />
          </div>
        </div>
      </>
    ) : (
      <>
        <div class="row mb-2">
          <div class="col-md-6">
            <label>{label}</label>
          </div>
          <div class="col">
            <input type={type} {...otherProps} className="form-control"/>
          </div>
        </div>
      </>
    )}
  </div>
);

export default ItemForm;
