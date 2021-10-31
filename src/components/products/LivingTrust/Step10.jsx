import React from 'react';
import { Form } from 'react-bootstrap';

const Step10 = ({ nextStep, prevStep, handleChange, values }) => {

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

            <h4>Step 10</h4>            
            <h5>Additional Instruction</h5>

            <Form className="l-form">

                {/* Any additional instruction 1 */}
                <Form.Group>
                    <Form.Label>Any additional instruction for the Trust that you will like to be add for the time you are alive.</Form.Label>
                    <Form.Control value={values.additionalInstructionOne} as="textarea" rows={3} onChange={(e) => {handleChange("additionalInstructionOne", e)}} />
                </Form.Group>

                {/* Any additional instruction 2 */}
                <Form.Group>
                    <Form.Label>Any additional instruction for the Trust that you will like to add following you demise or the time you are incapacitated</Form.Label>
                    <Form.Control value={values.additionalInstructionTwo} as="textarea" rows={3} onChange={(e) => {handleChange("additionalInstructionTwo", e)}} />
                </Form.Group>

            </Form>

            <button className="button" onClick={Previous} >Prev</button>
            <button className="button" onClick={Continue}>Next</button>     
            <br />       
            
        </div>
    )
}

export default Step10
