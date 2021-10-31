import React from 'react'
import { Form } from 'react-bootstrap';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {

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
            <h4>Step 3</h4>

            <Form  className="l-form">

                {/* Type of Donee */}
                <Form.Group>
                    <Form.Label>Type of Donee</Form.Label>
                    <select className="form-control" value={values.typeOfDonee} onChange={(e) => {handleChange("typeOfDonee", e)}} >
                        <option value="Individual">Individual</option>
                        <option value="Company">Company</option>
                    </select>
                </Form.Group>


                {/* If Individual is Selected */}
                {values.typeOfDonee === "Individual" &&
                <div>
                    {/* Full Name of Donee */}
                    <Form.Group>
                        <Form.Label>Full Name of Donee</Form.Label>
                        <Form.Control value={values.doneeFullName} type="text" onChange={(e) => {handleChange("doneeFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Donee */}
                    {/* <Form.Group>
                        <Form.Label>Address of Donee</Form.Label>
                        <Form.Control value={values.doneeAddress} type="text" onChange={(e) => {handleChange("doneeAddress", e)}}></Form.Control>
                    </Form.Group>    */}
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control value={values.doneeCity} type="text" onChange={(e) => {handleChange("doneeCity", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control value={values.doneeZipCode} type="number" onChange={(e) => {handleChange("doneeZipCode", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control value={values.doneeState} type="text" onChange={(e) => {handleChange("doneeState", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.doneeAddress} type="text" onChange={(e) => {handleChange("doneeAddress", e)}}></Form.Control>
                    </Form.Group>

                    {/* Relationship */}
                    <Form.Group>
                        <Form.Label>Relationship between Donor and Donee</Form.Label>
                        <select className="form-control" value={values.relationshipDonorDonee} onChange={(e) => {handleChange("relationshipDonorDonee", e)}} >
                            <option value="Husband">Husband</option>
                            <option value="Wife">Wife</option>
                            <option value="Partner">Partner</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                            <option value="Son">Son</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Grandson">Grandson</option>
                            <option value="Granddaughter">Granddaughter</option>
                            <option value="Friend">Friend</option>
                            <option value="Business Partner">Business Partner</option>
                            <option value="Other">Other</option>
                        </select>
                    </Form.Group>

                    {values.relationshipDonorDonee === "Other" &&
                        <Form.Group>
                            <Form.Label>Relationship</Form.Label>
                            <Form.Control value={values.otherRelationshipDonorDonee} type="text" onChange={(e) => {handleChange("otherRelationshipDonorDonee", e)}}></Form.Control>
                        </Form.Group>
                    }                                
                </div>                
                }

                {/* If Company is Selected */}
                {values.typeOfDonee === "Company" &&
                <div>
                    {/* Full Name of Company */}
                    <Form.Group>
                        <Form.Label>Full Name of Company</Form.Label>
                        <Form.Control value={values.doneeFullName} type="text" onChange={(e) => {handleChange("doneeFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Company */}
                    {/* <Form.Group>
                        <Form.Label>Address of Company</Form.Label>
                        <Form.Control value={values.doneeAddress} type="text" onChange={(e) => {handleChange("doneeAddress", e)}}></Form.Control>
                    </Form.Group>   */}
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control value={values.doneeCity} type="text" onChange={(e) => {handleChange("doneeCity", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control value={values.doneeZipCode} type="number" onChange={(e) => {handleChange("doneeZipCode", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control value={values.doneeState} type="text" onChange={(e) => {handleChange("doneeState", e)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.doneeAddress} type="text" onChange={(e) => {handleChange("doneeAddress", e)}}></Form.Control>
                    </Form.Group>                    
                    
                    {/* Is Donee a Minor */}
                    <Form.Group>
                        <Form.Label>Is Donee a Minor</Form.Label>
                        <select value={values.isDoneeMinor} onChange={(e) => {handleChange("isDoneeMinor", e)}}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </Form.Group>       

                    {values.isDoneeMinor === "Yes" &&
                    <div>
                        {/* Full Name of Guardian */}
                        <Form.Group>
                            <Form.Label>Full Name of Guardian</Form.Label>
                            <Form.Control value={values.doneeGuardianName} type="text" onChange={(e) => {handleChange("doneeGuardianName", e)}}></Form.Control>
                        </Form.Group>           

                        {/* Address of Guardian */}
                        <Form.Group>
                            <Form.Label>Address of Guardian</Form.Label>
                            <Form.Control value={values.doneeGuardianAddress} type="text" onChange={(e) => {handleChange("doneeGuardianAddress", e)}}></Form.Control>
                        </Form.Group>
                    </div>
                    }             
                </div>                
                }

            </Form>

            <button className="button" onClick={Previous} >Prev</button>
            <button className="button " onClick={Continue}>Next</button>
            <br />
        </div>
    )
}

export default Step3
