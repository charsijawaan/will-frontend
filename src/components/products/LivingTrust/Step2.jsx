import React from 'react';
import { Form } from 'react-bootstrap';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="container">
            <h4>Step 2</h4>
            <h5>Personal Details</h5>

            <Form className="l-form">
                
                {/* Name */}
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={values.name} type="text" onChange={(e) => {handleChange("name", e)}}></Form.Control>
                </Form.Group>

                {/* Address */}
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control value={values.city} type="text" onChange={(e) => {handleChange("city", e)}}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control value={values.zipCode} type="number" onChange={(e) => {handleChange("zipCode", e)}}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control value={values.state} type="text" onChange={(e) => {handleChange("state", e)}}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={values.address} type="text" onChange={(e) => {handleChange("address", e)}}></Form.Control>
                </Form.Group>

                {/* Phone */}
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={values.phone} type="text" onChange={(e) => {handleChange("phone", e)}}></Form.Control>
                </Form.Group>

                {/* Email */}
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={values.email} type="text" onChange={(e) => {handleChange("email", e)}}></Form.Control>
                </Form.Group>                                                

            </Form>

            <button className="button" onClick={Previous} >Prev</button>
            <button className="button" onClick={Continue}>Next</button>
            <br />
        </div>
    )
}

export default Step2
