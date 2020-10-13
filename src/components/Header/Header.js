import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logos/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button} from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const { loggedInUser } = useContext(UserContext);

    return (

        <div className="header" >
            <nav   className="nav  justify-content-between">
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

                    <li>
                        <Button variant="primary">Register</Button>
                    </li>
                    
                    <li style={{ color: 'black' }}>
                        {loggedInUser.displayName}
                    </li>

                   
                    <li>
                        <Link to="/admin">
                            <Button variant="dark">Admin</Button>
                        </Link>
                    </li>
                 
                </ul>
            </nav>
           

        </div>



    );
};

export default Header;