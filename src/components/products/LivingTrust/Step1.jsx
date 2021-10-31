import React from 'react';
import { Form } from 'react-bootstrap';

const Step1 = ({ nextStep, prevStep, handleChange, values }) => {

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
            <h4>Step 1</h4>

            <Form className="l-form">

                {/* Are you over 18 */}
                <Form.Group>
                    <Form.Label>Are you Over 18 ?</Form.Label>
                    <select className="form-control" value={values.areYouOver18} onChange={(e) => {handleChange("areYouOver18", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>                

                {/* Are you of Sane Mind */}
                <Form.Group>
                    <Form.Label>Are you of Sane Mind ?</Form.Label>
                    <select className="form-control" value={values.areYouOfSaneMind} onChange={(e) => {handleChange("areYouOfSaneMind", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>                

                {/* Do you own the property to be vested in the trust */}
                <Form.Group>
                    <Form.Label>Do you own the property to be vested in the trust ?</Form.Label>
                    <select className="form-control" value={values.doYouOwnThePropertyVested} onChange={(e) => {handleChange("doYouOwnThePropertyVested", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group> 

                {/* Are you creating a revocable or irrevocable trust */}
                <Form.Group>
                    <Form.Label>Are you creating a revocable or irrevocable trust ?</Form.Label>
                    <select className="form-control" value={values.areYouCreatingARevocableOrIrrevocable} onChange={(e) => {handleChange("areYouCreatingARevocableOrIrrevocable", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>                               


            </Form>

            <button className="button" onClick={Continue}>Next</button>
            <br />
        </div>
    )
}

export default Step1
