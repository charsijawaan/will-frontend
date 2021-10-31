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
            
            <Form  className="l-form"> 

                {/* Type of Donor */}
                <Form.Group>
                    <Form.Label>Type of Donor</Form.Label>
                    <select className="form-control" value={values.typeOfDonor} onChange={(e) => {handleChange("typeOfDonor", e)}} >
                        <option value="Individual">Individual</option>
                        <option value="Company">Company</option>
                    </select>
                </Form.Group>

                {/* If Individual is Selected */}
                {values.typeOfDonor === "Individual" &&
                <div>
                    {/* Full Name of Donor */}
                    <Form.Group>
                        <Form.Label>Full Name of Donor</Form.Label>
                        <Form.Control value={values.donorFullName} type="text" onChange={(e) => {handleChange("donorFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Donor */}
                    {/* <Form.Group>
                        <Form.Label>Address of Donor</Form.Label>
                        <Form.Control value={values.donorAddress} type="text" onChange={(e) => {handleChange("donorAddress", e)}}></Form.Control>
                    </Form.Group>                                 */}

                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control value={values.donorCity} type="text" onChange={(e) => {handleChange("donorCity", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control value={values.donorZipCode} type="number" onChange={(e) => {handleChange("donorZipCode", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control value={values.donorState} type="text" onChange={(e) => {handleChange("donorState", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.donorAddress} type="text" onChange={(e) => {handleChange("donorAddress", e)}}></Form.Control>
                    </Form.Group>

                </div>                
                }

                {/* If Company is Selected */}
                {values.typeOfDonor === "Company" &&
                <div>
                    {/* Full Name of Company */}
                    <Form.Group>
                        <Form.Label>Full Name of Company</Form.Label>
                        <Form.Control value={values.donorFullName} type="text" onChange={(e) => {handleChange("donorFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Company */}
                    {/* <Form.Group>
                        <Form.Label>Address of Company</Form.Label>
                        <Form.Control value={values.donorAddress} type="text" onChange={(e) => {handleChange("donorAddress", e)}}></Form.Control>
                    </Form.Group>                                 */}

                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control value={values.donorCity} type="text" onChange={(e) => {handleChange("donorCity", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control value={values.donorZipCode} type="number" onChange={(e) => {handleChange("donorZipCode", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control value={values.donorState} type="text" onChange={(e) => {handleChange("donorState", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.donorAddress} type="text" onChange={(e) => {handleChange("donorAddress", e)}}></Form.Control>
                    </Form.Group>
                </div>                
                }


            </Form>

            <button className="button" onClick={Previous} >Prev</button>
            <button className="button" onClick={Continue}>Next</button>
            <br />
        </div>
    )
}

export default Step2
