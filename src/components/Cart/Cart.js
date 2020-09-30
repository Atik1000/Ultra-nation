import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPopulation=cart.reduce((sum,Country)=>sum + Country.population,0)
    return (
        <div>
        <h2>This is cart {cart.length}</h2>
        <p>total population: {totalPopulation}</p>
            
        </div>
    );
};

export default Cart;