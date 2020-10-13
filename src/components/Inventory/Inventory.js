import React from 'react';
import fakeData from '../fakedata/fakedata';


const Inventory = () => {

    const handleAddProduct = () => {
        const items = {}
        fetch('https://whispering-falls-09733.herokuapp.com/addItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
    }


    return (
        <div>
            <form action="">
                <p><span>Name:</span><input type="text"/></p>
                <p><span>Price:</span><input type="text"/></p>
                <p><span>Quantity:</span><input type="text"/></p>
                <p><span>Item Image</span><input type="file"/></p>

                {/* <button onClick={handleAddProduct}>add product</button> */}

            </form>
        </div>
    );
};

export default Inventory;