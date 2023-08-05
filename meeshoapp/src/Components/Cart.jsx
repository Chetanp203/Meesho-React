import React from 'react'
import "./Cart.css"

const Cart = () => {
    return (

        <div className="body1-container">
            <div className="left">
                <h3>Cart / items</h3>
                <div className="product">
                    <div className="upper">
                        <img src="https://images.meesho.com/images/products/163661024/3jv9k_512.jpg" className="product-img"/>
                            <div>
                                <h4>Eternal Classics Portable Hand Fan Series Mini</h4>
                                <p>Size:Free.Qty:1</p>
                                <p>RS.149</p>
                                <h4>Remove</h4>
                            </div>
                    </div>
                    <div className="lower">
                        <p>Sold By:Vicky Jain Electronics</p>
                        <p>Free Delivery</p>
                    </div>
                </div>
                
               
                
            </div>
            <div className="right">
                <div className="pricing">
                    <h4>Price Details</h4>
                    <div className="price-sum">
                        <ul>
                            <li>Total Product Price</li>                          
                        </ul>
                        <ul>
                            <li>+Rs.1435</li>                           
                        </ul>
                    </div>
                    <div className="price-res">
                        <ul>
                            <li><b>Order Total</b></li>
                        </ul>
                        <ul>
                            <li><b>Rs.1.569</b></li>
                        </ul>
                    </div>
                    <div className="click">
                        <p className='clicky'>Clicking on ‘Continue’ will not deduct any money</p>
                    </div>
                    <button className="continue">Continue</button>
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png" class="safety"/>
                </div>
            </div>
        </div>

    )
}

export default Cart