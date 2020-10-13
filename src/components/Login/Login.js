import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import google from '../../images/google.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            textAlign: 'center',

            width: '400px',
            height: '400px',
            backgroundColor: '#f2f2f2',
            marginLeft: "35%",
            marginTop: '40px',
            padding: '20px 0 30px 0'

        },
        align: {
            margin: '20px',
            padding: '40px',
            marginTop: '60px',
            marginLeft: '20px',

        },
        googlebtn: {
            width: '300px',
            fontSize: '13px',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px'
        }
    }));
    const classes = useStyles();

    const { setLoggedInUser } = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user
            const signInUser = { displayName, email }
            setLoggedInUser(signInUser)
            history.replace(from)

            //console.log(signInUser)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });


    }


    return (

        <form className={classes.root} noValidate autoComplete="off">

            <br />
            <h4>Login With</h4>

            <div className={classes.align}>

                <Button onClick={handleGoogleSignIn} className={classes.googlebtn}>
                    <Row>
                        <Col md={3}><img style={{ width: '20px' }} src={google} alt="" /></Col>
                        <Col md={6}>Sign In With Google</Col>
                    </Row>
                </Button>
                <br /><br />
                <Button className={classes.googlebtn} variant="warning" size="md" block>
                    Don't have an account? Create an account
                </Button>
            </div>

        </form>
    );

};

export default Login;