import React from 'react'
import "./SingleProduct.css"

const SingleProduct = () => {
  return (
         <div className="single-product-container">
        <div className="left">
            <div className="preview">
                <img src="https://images.meesho.com/images/products/9124104/db6c7_64.webp"/>
                <img src="https://images.meesho.com/images/products/9124104/7ec5d_64.webp"/>
            </div>
            <div className="product-img">
                <img src="https://images.meesho.com/images/products/9124104/db6c7_512.webp" className="pro"/>
                <div className="btns">
                    <button className="add">
                        <i className="fa-solid fa-cart-shopping fa-xl" style={{color: '#9f2089'}}></i>
                        <h5>Add to Cart</h5>
                    </button>
                    <button className="buy">
                        <i className="fa-solid fa-angles-right fa-xl" style={{color: '#ffffff'}}></i>
                        <h5>Buy Now</h5>
                    </button>
                </div>
                <h5 style={{padding:'20px 15px'}}>7 Similar Products</h5>
                <div className="preview-below">
                    <img src="https://images.meesho.com/images/products/9124104/db6c7_128.webp"/>
                    <img src="https://images.meesho.com/images/products/9124102/a5793_128.webp"/>
                    <img src="https://images.meesho.com/images/products/9124108/1d33b_128.webp"/>
                    <img src="https://images.meesho.com/images/products/9124103/056ca_128.webp"/>
                    <img src="https://images.meesho.com/images/products/9124107/be5f9_128.webp"/>
                    <img src="https://images.meesho.com/images/products/9124105/3a992_128.webp"/>
                </div>
            </div>
        </div>
        <div className="right2">
            <div className="price-banner1">
                <h4>Khadi Casual Shirt Combo Pack of 2</h4>
                <p className="price">Rs.621</p>
                <button>
                    <p>3.8</p>
                    <i className="fa-solid fa-star" style={{color: '#ffffff'}}></i>
                </button>
                <p>Free Delivery</p>
            </div>
            <div className="slect-size">
                <h3>Select Size</h3>
                <div>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                </div>
            </div>
            <div className="product-details">
                <h3>Product Details</h3>
                <p>Name: Khadi Casual Shirt Combo Pack of 2</p>
                <p>Fabric: Khadi Cotton</p>
                <p>Sleeve Length: Short Sleeves</p>
                <p>Pattern: Solid</p>
                <p>Net Quantity (N):2</p>
                <p>M,L,XL,XXL(Chest Size:48 in,Length Size:30 in)</p>
                <p>Country of Origin: India</p>
                <p>More Information</p>
            </div>
            <div className="sold-by">
                <h3>Sold By</h3>
                <div className="sold-by-2">
                    <img src="https://images.meesho.com/images/pow/shop_100.webp"/>
                    <h3>Khadi Ashram</h3>
                    <button>View Shop</button>
                </div>
                <div className="sold-by-3">
                    <div>
                        <button>
                            <p>3.8</p>
                            <i className="fa-solid fa-star" style={{color: '#35d09c'}}></i>
                        </button>
                        <p>22,777 Ratings</p>
                    </div>
                    <div>
                        <h3>527</h3>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h3>441</h3>
                        <p>Products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SingleProduct;