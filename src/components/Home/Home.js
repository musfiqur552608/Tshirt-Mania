import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id===tshirt._id);
        if(exists){
            alert('t-shirt already added');
        }else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
            alert('successfully added')
        }
        
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
            {
                tshirts.map(tshirt=> <TShirt key={tshirt._id} tshirt = {tshirt} handleAddToCart={handleAddToCart}></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Home;