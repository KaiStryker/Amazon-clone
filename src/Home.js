import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className = "home">
            <div className= "home__container">
                <img className = "home__image" src= "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""/>
            
                <div className="home__row">
                <Product 
                    id= "12321341"
                    title= "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price= {29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL.jpg"
                    rating = {5}/>
                <Product
                    id = "49538094" 
                    title= 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price= {239.00}
                    image="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-RKV25G0XER.tif"
                    rating = {4}
                />
            
                {/* Product */}
                </div>  

                <div className="home__row">
                <Product 
                    id="345223243"
                    title="DJI Mavic Pro 4K Quadcopter with Remote Controller, 2 Batteries"
                    price={1299.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71MWf5vPDmL._AC_SL1500_.jpg"/>
                <Product 
                    id = "23445930"
                    title = "Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={39.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg"/>
                <Product 
                    id = "3254354345"
                    title = "New Apple Ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={949.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"/>
                </div>  

                <div className="home__row">
                <Product 
                    id = "4903850"
                    title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
                />
                </div> 
                 
            </div>
           
        </div>
    )
}

export default Home
