import React from 'react';
import { Form } from 'react-bootstrap';

const Step6 = ({ nextStep, prevStep, handleChange, changeState, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div  style={{padding: 30}}>
            <h1>Step 6</h1>

            <h6>Agent Details that will act on the behalf of the Donor to carry out the transfer</h6>

            <Form>

                {/* Agent Full Name */}
                <Form.Group>
                    <Form.Label>Agent Full Name</Form.Label>
                    <Form.Control value={values.agentFullName} type="text" onChange={(e) => {handleChange("agentFullName", e)}}></Form.Control>
                </Form.Group>                

                {/* Agent Address */}
                <Form.Group>
                    <Form.Label>Agent Address</Form.Label>
                    <Form.Control value={values.agentAddress} type="text" onChange={(e) => {handleChange("agentAddress", e)}}></Form.Control>
                </Form.Group>      

                {/* Add Alternate Agent */}
                <Form.Group>
                    <Form.Label>Add Alternate Agent if First one is not Available</Form.Label>
                    <select className="form-control" value={values.addAlternateAgent} onChange={(e) => {handleChange("addAlternateAgent", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>          

                {values.addAlternateAgent === "Yes" &&
                    <div>
                        {/* Agent Full Name */}
                        <Form.Group>
                            <Form.Label>Alternate Agent Full Name</Form.Label>
                            <Form.Control value={values.alternateAgentFullName} type="text" onChange={(e) => {handleChange("alternateAgentFullName", e)}}></Form.Control>
                        </Form.Group>                

                        {/* Agent Address */}
                        <Form.Group>
                            <Form.Label>Alternate Agent Address</Form.Label>
                            <Form.Control value={values.alternateAgentAddress} type="text" onChange={(e) => {handleChange("alternateAgentAddress", e)}}></Form.Control>
                        </Form.Group>                              
                    </div>
                }

            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step6
