import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import VolunteerInfo from './VolunteerInfo';
import logo from '../../images/logos/logo.png'


const Volunteer = () => {

    const [dataInfo, setDataInfo] = useState([])
    const { loggedInUser } = useContext(UserContext);


    // data theke email diye data gulo show korbe...
    useEffect(() => {
        fetch('https://whispering-falls-09733.herokuapp.com/register?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDataInfo(data))
    }, [])

    return (
        <div>
            <nav className="nav  justify-content-between">

                <ul>
                    <img className="logo" src={logo} alt="" />
                </ul>
                <ul className="nav-link">
                    <li>
                        <Link to="/home">Home</Link>

                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>

                    </li>

                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    
                    <li style={{ color: 'black' }}>
                        {loggedInUser.displayName}
                    </li>

                </ul>
            </nav>
            {
                dataInfo.map(img => <VolunteerInfo image={img} key={img.id}></VolunteerInfo>)
            }

        </div >

    );
};

export default Volunteer;