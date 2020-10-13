import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Data = (props) => {

    const {setImage} = useContext(UserContext)

    const {category,img} = props.information
    // setImage(img)

    const cardStyle={
        width: '18rem',
        maxWidth: 345,
        display: 'inline-block',
        margin: '10px',
        padding: '20px',
        marginLeft: '30px'
    }

    const history = useHistory(category)
    const handleRegister = (category) => {
        setImage(img)
        history.push(`/register/${category}`)

    }

    return (
        <div style={cardStyle}>

            <img style={{width:'250px'}} src={img} className="card-img-top" alt="..." />
            <Button onClick={()=> handleRegister(category)} className="btn btn-primary btn-block">{category}</Button>
        </div>
    );
};

export default Data;