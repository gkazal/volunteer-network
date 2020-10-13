import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Volunteer from './Volunteer';

import logo from '../../images/logos/logo.png'
import img from '../../images/logos/plus 1.png'
import { useHistory } from 'react-router-dom';

const ShowVolunteerList = () => {
    const [register, setRegister] = useState([])

    useEffect(() => {
        fetch('https://whispering-falls-09733.herokuapp.com/volunteer')
            .then(res => res.json())
            .then(data => setRegister(data))

    }, [])

    const history = useHistory()

    const AddEvent = () => {
        history.push('/addevent')

    }

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px' }}>
            <Row>
                <Col xs={12} md={3}>
                    <nav className="nav  justify-content-between">
                        <ul>
                            <img style={{ height: '50px' }} className="logo" src={logo} alt="" />
                        </ul>
                    </nav>
                    <nav className="nav  justify-content-between">
                        <ul>
                            <li>
                                <button onClick={AddEvent}> <img style={{ width: '20px' }} src={img} alt="" /> Add Event </button>
                            </li>

                        </ul>

                    </nav>
                </Col>


                <Col xs={12} md={9}>
                    <h1>Volunteer Register List</h1>
                    <h5>You have {register.length} items</h5>
                    <br />
                    <Row>
                        <Col>
                            <Form.Label type="text">Name</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">Email</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">RegisterDate</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">Volunteer List</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label type="text">Action</Form.Label>

                        </Col>
                    </Row>
                    {
                        register.map(reg => <Volunteer reg={reg} key={reg._id}></Volunteer>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default ShowVolunteerList;