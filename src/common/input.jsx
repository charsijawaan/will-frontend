import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col-md-8">
          <input {...rest} name={name} id={name} className="login__input form-control" />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
