import React from 'react';
import { Form } from 'react-bootstrap';

const Step3 = ({ nextStep, prevStep, handleChange,changeState, values }) => {

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
            <h5>Trustee Details</h5>

            <Form className="l-form">

                {/* Is the Grantor not the Trustee */}
                <Form.Group>
                    <Form.Label>Is the Grantor the Trustee</Form.Label>
                    <select className="form-control" value={values.isTheGrantorNotTheTrustee} onChange={(e) => {handleChange("isTheGrantorNotTheTrustee", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>

                {values.isTheGrantorNotTheTrustee === "Yes" &&
                <div>
                    {/* Trustee Type */}
                    <Form.Group>
                        <Form.Label>Trustee Type</Form.Label>
                        <select className="form-control" value={values.trusteeType} onChange={(e) => {handleChange("trusteeType", e)}}>
                            <option value="Individual">Individual</option>
                            <option value="Organisation">Organisation</option>
                        </select>
                    </Form.Group>

                    {/* {values.trusteeType === "Individual" &&
                    <div>
                        <Form.Group style={{display: "flex"}}>                        
                            <Form.Label>Confirm that individual is of sound mind, over 18 and can own a property. Then Name and Address of Trustee</Form.Label>
                            <Form.Control type="checkbox" checked={values.individuaConfirmation} onChange={(e) => {changeState("individuaConfirmation", !values.individuaConfirmation)}}></Form.Control>
                        </Form.Group>
                    </div>
                    }                     */}

                    {values.trusteeType === "Organisation" &&
                    <div>
                        <Form.Group style={{display: "flex"}}>
                            <Form.Label>Confirm that the right to act as a trustee has been written in the article ofr association. Then, Name and Address, Role</Form.Label>
                            <Form.Control type="checkbox" checked={values.organisationConfirmation}onChange={(e) => {changeState("organisationConfirmation", !values.organisationConfirmation)}}></Form.Control>
                        </Form.Group>
                    </div>
                    }                    
                </div>
                }

                {values.isTheGrantorNotTheTrustee === "No" &&
                <div>
                    {/* Trustee Name */}
                    <Form.Group>
                        <Form.Label>Trustee Name</Form.Label>
                        <Form.Control value={values.trusteeName} type="text" onChange={(e) => {handleChange("trusteeName", e)}}></Form.Control>
                    </Form.Group>

                    {/* Trustee Address */}
                    {/* <Form.Group>
                        <Form.Label>Trustee Address</Form.Label>
                        <Form.Control value={values.trusteeAddress} type="text" onChange={(e) => {handleChange("trusteeAddress", e)}}></Form.Control>
                    </Form.Group>                                     */}
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control value={values.trusteeCity} type="text" onChange={(e) => {handleChange("trusteeCity", e)}}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control value={values.trusteeZipCode} type="number" onChange={(e) => {handleChange("ziptrusteeZipCodeCode", e)}}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control value={values.trusteeState} type="text" onChange={(e) => {handleChange("trusteeState", e)}}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.trusteeAddress} type="text" onChange={(e) => {handleChange("trusteeAddress", e)}}></Form.Control>
                    </Form.Group>
                </div>
                }

                {/* Do you want Co-Trustee */}
                <Form.Group>
                    <Form.Label>Do you want Co-Trustee</Form.Label>
                    <select className="form-control" value={values.doYouWantCotrustee} onChange={(e) => {handleChange("doYouWantCotrustee", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>  

                {values.doYouWantCotrustee === "Yes" &&
                <div>
                    {/* Co-Trustee Name */}
                    <Form.Group>
                        <Form.Label>Co-Trustee Name</Form.Label>
                        <Form.Control value={values.CotrusteeName} type="text" onChange={(e) => {handleChange("CotrusteeName", e)}}></Form.Control>
                    </Form.Group>

                    {/* Co-Trustee Address */}
                    {/* <Form.Group>
                        <Form.Label>Co-Trustee Address</Form.Label>
                        <Form.Control value={values.CotrusteeAddress} type="text" onChange={(e) => {handleChange("CotrusteeAddress", e)}}></Form.Control>
                    </Form.Group>                                     */}
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control value={values.CotrusteeCity} type="text" onChange={(e) => {handleChange("CotrusteeCity", e)}}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control value={values.CotrusteeZipCode} type="number" onChange={(e) => {handleChange("CotrusteeZipCode", e)}}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control value={values.CotrusteeState} type="text" onChange={(e) => {handleChange("CotrusteeState", e)}}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.CotrusteeAddress} type="text" onChange={(e) => {handleChange("CotrusteeAddress", e)}}></Form.Control>
                    </Form.Group>
                </div>
                }     

                {/* Would you like to Name the Trust */}
                <Form.Group>
                    <Form.Label>Would you like to Name the Trust (Our Preference is The [Grantor Name] Living Trust)</Form.Label>
                    <select className="form-control" value={values.wouldYouLikeToNameTheTrust} onChange={(e) => {handleChange("wouldYouLikeToNameTheTrust", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>  

                {values.wouldYouLikeToNameTheTrust === "Yes" &&
                <Form.Group>
                    <Form.Label>Trust Name</Form.Label>
                    <Form.Control value={values.trustName} type="text" onChange={(e) => {handleChange("trustName", e)}}></Form.Control>
                </Form.Group>                
                }                       

            </Form>

            <button className="button" onClick={Previous} >Prev</button>
            <button className="button" onClick={Continue}>Next</button>
            <br />
        </div>
    )
}

export default Step3
