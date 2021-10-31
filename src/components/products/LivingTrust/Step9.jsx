import React from 'react';
import { Form } from 'react-bootstrap';

const Step9 = ({ nextStep, prevStep, handleChange, values }) => {

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

            <h4>Step 9</h4>
            <h5>Pour Over Will</h5>

            <Form className="l-form">
                {/* Do you want to include Pour-Over Will */}
                <Form.Group>
                    <Form.Label>Do you want to include Pour-Over Will</Form.Label>
                    <select className="form-control" value={values.pourOverWillQuestion} onChange={(e) => {handleChange("pourOverWillQuestion", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>  

                {/* {values.pourOverWillQuestion === "Yes" &&
                <div>
                    <input type="file" onChange={(e) => {onFileChange("pourOverWillFile", e)}}></input>
                </div>
                }               */}
            </Form>

            <button className="button" onClick={Previous} >Prev</button>
            <button className="button" onClick={Continue}>Next</button>
            <br />
        </div>
    )
}

export default Step9
