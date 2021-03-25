import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move'


function Checkout() {

    const [{ basket, user}] = useStateValue();

    

    return (

        <div className="checkout">
            <div className="checkout__left">
                <img className = "checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg"
                alt=""
                />
    
                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className= "checkout__title">
                    Your Shopping Basket
                    </h2>  
                        <FlipMove>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating= {item.rating}
                                    />
                                ))}  
                        </FlipMove>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
                
            </div>
        </div>
    );
}

export default Checkout
