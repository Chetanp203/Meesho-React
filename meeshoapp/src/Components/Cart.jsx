import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css"
import { AuthContext } from '../MyContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartProd, setCartProd] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { state } = useContext(AuthContext);
    const route = useNavigate();
  
    // console.log(state);
  
    useEffect(() => {
      const currentuser = JSON.parse(localStorage.getItem("Current-user"));
  
      if (state?.user?.role === "Seller") {
        route("/");
        // alert("You are not a buyer")
      }
    }, []);
  
    useEffect(() => {
      const currentuser = JSON.parse(localStorage.getItem("Current-user"));
      if (!currentuser) {
        alert("Login to view cart")
        route("/login")
      }
    }, [])
  
  
    useEffect(() => {
      const currentuser = JSON.parse(localStorage.getItem("Current-user"));
      const regusers = JSON.parse(localStorage.getItem("Users"));
  
      if (state?.user && state?.user?.role === "Buyer") {
        for (let i = 0; i < regusers.length; i++) {
          if (regusers[i].email === currentuser.email) {
            setCartProd(regusers[i].cart);
          }
        }
      }
    }, [state]);
  
    useEffect(() => {
      if (cartProd.length) {
      }
      let sum = 0;
      for (let i = 0; i < cartProd.length; i++) {
        sum += parseInt(cartProd[i].price);
        // console.log(sum);
      }
      setTotalPrice(sum);
    }, [cartProd]);
  
    const removeSingleProduct = (id) => {
      const currentuser = JSON.parse(localStorage.getItem("Current-user"));
      const regusers = JSON.parse(localStorage.getItem("Users"));
      const filterItem = cartProd.filter((item) => item.id != id);
  
      if (state?.user && state?.user?.role === "Buyer") {
        for (let i = 0; i < regusers.length; i++) {
          if (regusers[i].email === currentuser.email) {
            regusers[i].cart = filterItem;
            localStorage.setItem("Users", JSON.stringify(regusers));
            setCartProd(filterItem);
            // setTotalPrice(0);
            alert("Product removed");
          }
        }
      }
    };
  
    const checkOut = () => {
      const currentuser = JSON.parse(localStorage.getItem("Current-user"));
      const regusers = JSON.parse(localStorage.getItem("Users"));
  
      if (state?.user && state?.user?.role === "Buyer") {
        for (let i = 0; i < regusers.length; i++) {
          if (regusers[i].email === currentuser.email) {
            regusers[i].cart = [];
            localStorage.setItem("Users", JSON.stringify(regusers));
            setCartProd([]);
            setTotalPrice(0);
            alert("Product will Deliver Soon");
          }
        }
      }
    };
    return (

        <div className="body1-container">
            <div className="left5">
                <p style={{fontSize:'25px',paddingLeft:'250px'}}>Cart / items</p>
                {cartProd.map((pro) =>(
                <div className="product" key={pro.id}>
                    <div className="upper">
                        <img src={pro.image} className="product1-img"/>
                            <div>
                                <h4>{pro.title}</h4>
                                <p>Size:Free.Qty:1</p>
                                <p>RS.{pro.price}</p>
                                <h4 onClick={()=> removeSingleProduct(pro.id)}>Remove</h4>
                            </div>
                    </div>
                    <div className="lower">
                        <p>Sold By:Vicky Jain Electronics</p>
                        <p>Free Delivery</p>
                    </div>
                </div>
                ))}
                
               
                
            </div>
            <div className="right">
                <div className="pricing">
                    <h4>Price Details</h4>
                    <div className="price-sum">
                        <ul>
                            <li>Total Product Price</li>                          
                        </ul>
                        <ul>
                            <li>+Rs.{totalPrice}</li>                           
                        </ul>
                    </div>
                    <div className="price-res">
                        <ul>
                            <li><b>Order Total</b></li>
                        </ul>
                        <ul>
                            <li><b>Rs.{totalPrice}</b></li>
                        </ul>
                    </div>
                    <div className="click">
                        <p className='clicky'>Clicking on ‘Continue’ will not deduct any money</p>
                    </div>
                    <button className="continue" onClick={checkOut}>Continue</button>
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png" class="safety"/>
                </div>
            </div>
        </div>

    )
}

export default Cart;