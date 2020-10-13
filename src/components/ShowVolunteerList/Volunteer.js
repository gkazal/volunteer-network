import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import img from '../../images/logos/trash-2 9.png'

const Volunteer = (props) => {
    const { displayName, enterDate, email, category, _id } = props.reg

    function Delete (id) {
        console.log(id)
        fetch(`https://whispering-falls-09733.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully')
        })
    }

    return (
        <div >
            <Row style={{marginBottom:'10px'}}>
                <Col>
                    <Form.Control type="text" value={displayName} />
                </Col>
                <Col>
                    <Form.Control type="text" value={email} />
                </Col>
                <Col>
                    <Form.Control type="text" value={enterDate} />
                </Col>
                <Col>
                    <Form.Control type="text" value={category} />
                </Col>
                <Col>
                    <Button onClick={()=> Delete(`${_id}`)} variant="danger" ><img  style={{width:'20px'}} src={img} alt=""/></Button>
                </Col>
            </Row>

        </div>
    );
};

export default Volunteer;