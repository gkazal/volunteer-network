import React, { useContext } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';


const Register = () => {


    const { category } = useParams() // data.js theke category k pelam..
    const {loggedInUser} = useContext(UserContext)
    const { email } = loggedInUser

    const {image} = useContext(UserContext)
   

    const [categoryName] = useState({ category })

    const [description, setDescription] = useState('')

    const [selectedDate, setSelectedDate] = useState({
        enterDate: new Date()
    });

    const handleEnterDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.enterDate = date
        setSelectedDate(newDates);
    };

    const history = useHistory(category)

    const handleRegister = (email) => {
        history.push(`/volunteer/${email}`)


        const newRegister = { ...loggedInUser, ...selectedDate, ...categoryName}
        //setDescription(newRegister)
        newRegister.image = image
        newRegister.description = description
        console.log(newRegister)

        fetch('https://whispering-falls-09733.herokuapp.com/addItems', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegister)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <Container>
            <Row style={{ marginTop: '80px', color: 'black' }}>
                <Col className="destination" >
                    <Card.Body>
                        <Card.Title style={{ fontSize: '60px', color: 'black' }}>{category}</Card.Title>

                    </Card.Body>

                </Col>
                <Col >
                    <Form className="form" >

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label type="text">Name</Form.Label>
                            <Form.Control type="text" value={loggedInUser.displayName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label type="text">Email</Form.Label>
                            <Form.Control type="text" value={loggedInUser.email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label type="text">Volunteer</Form.Label>
                            <Form.Control type="text" value={category} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type='text' onChange={(e)=>setDescription(e.target.value)}     />
                        </Form.Group>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Enterence Date"
                                    value={selectedDate.enterDate}
                                    onChange={handleEnterDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </Grid>
                        </MuiPickersUtilsProvider>

                        <Button onClick={() => handleRegister(email)} style={{ marginLeft: '5px' }} variant="warning" size="md" block>
                            Register
                        </Button>
                    </Form>

                </Col>
            </Row>

        </Container>
    );
};

export default Register;