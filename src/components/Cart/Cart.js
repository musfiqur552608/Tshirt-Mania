import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;