import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from '../../App';

import Data from './Data';

const Home = () => {

    const {setImage} = useContext(UserContext)

    const [data, setData] = useState([])
    setImage(data)

    useEffect(() => {
        fetch('https://whispering-falls-09733.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>I Grow by helping people if need</h1>

            <Navbar className="justify-content-center">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-xl-2" />
                    <Button type="submit">Search</Button>

                </Form>
            </Navbar>

            {
                data.map(info => <Data information={info} key={info.id}></Data>)
            }
      
        </div>
    );
};

export default Home;