import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise)
    // console.log(bottles)

    // handle Cart 
    const handleAddToCart = (bottle) => {
        // console.log("Bottle Clicked.", bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);
    }


    return (
        <div>
            <h1>Bottle: {bottles.length}</h1>
            <p>Added to Cart: {cart.length}</p>

            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;