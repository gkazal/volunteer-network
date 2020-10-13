import React from 'react';

import { Col, Form, Row } from 'react-bootstrap';

import logo from '../../images/logos/logo.png'
import { Link, makeStyles, TextField } from '@material-ui/core';
import img from '../../images/logos/plus 1.png'


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const AddEvent = () => {

    const classes = useStyles();

    return (
        <div style={{ margin: '20px', padding: '20px' }}>
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
                                <Link to="/admin">
                                    <button> <img style={{ width: '20px' }} src={img} alt="" /> Add Event </button>
                                </Link>
                            </li>
                        </ul>

                    </nav>
                </Col>

                <Col  xs={12} md={9}>
                    <h1>Add Event</h1>
                    <br />

                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Label>Enter Title</Form.Label>
                                <Form.Control type='text' />
                            </Col>

                            <Col>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Event Date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                            </Col>

                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type='text' />
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.File id="Banner" label="Banner" />
                                </Form.Group>
                            </Col>


                        </Form.Row>
                    </Form>


                </Col>
            </Row>
        </div>
    );
};

export default AddEvent;