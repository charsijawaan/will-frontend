import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Dropdown from "./dropdown";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    if (input.name === "type") {
      if (input.value === "Employee Voucher") {
        data["showFields"] = true;
      } else {
        data["showFields"] = false;
      }
    }
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleFileChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const data = { ...this.state.data };
    data[input.name] = input.files[0];

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button className="button login__submit" onClick>
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        // label={label}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
        className="login__input"
      />
    );
  }
  renderInputFile(name, label, type = "file") {
    //const { data, errors } = this.state;
    return (
      <input
        type={type}
        name="file"
        label={label}
        onChange={this.handleFileChange}
      />
    );
  }

  renderDropDown(name, label, value1, value2, value3, type = "text") {
    const { data, errors } = this.state;
    return (
      <Dropdown
        type={type}
        name={name}
        value={data[name]}
        label={label}
        value1={value1}
        value2={value2}
        value3={value3}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
