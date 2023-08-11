import React, { useContext, useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../MyContext/AuthContext';

const SingleProduct = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [updateProdContainer, setUpdateProdContainer] = useState(false);

    const { state } = useContext(AuthContext);
    const route = useNavigate();

    // console.log(singleProduct);

    useEffect(() => {
        const getProduct = JSON.parse(localStorage.getItem("Products"));

        if (getProduct) {
            let prodId = getProduct.find((item) => item.id === id);
            setSingleProduct(prodId);
        }
    }, []);

    const addToCart = (id) => {
        const regUser = JSON.parse(localStorage.getItem("Users"));

        if (state?.user) {
            for (let i = 0; i < regUser.length; i++) {
                if (regUser[i].email === state.user.email) {
                    const duplicate = regUser[i].cart.find((e) => e.id === id);

                    // console.log(duplicate);
                    // Do not add Duplicate items
                    if (regUser[i].cart.length && duplicate) {
                        alert("product already added");
                        route("/bag");
                    } else {
                        regUser[i].cart.push(singleProduct);
                        localStorage.setItem("Users", JSON.stringify(regUser));
                        alert("product added");
                        route("/all-products");
                    }
                }
            }
        }
    };

    const updateProductDetails = () => {
        setUpdateProdContainer(true);
    };

    const closeUpdateProdContainer = () => {
        setUpdateProdContainer(false);
    };

    function changeProdDetails(e) {
        const name = e.target.name;
        const value = e.target.value;

        setSingleProduct({ ...singleProduct, [name]: value });
    }

    const changeProdDetailsCategory = (e) => {
        const value = e.target.value;
        setSingleProduct({ ...singleProduct, ["category"]: value });
    };

    function handleSubmitProductUpdate(e) {
        e.preventDefault();

        const getProduct = JSON.parse(localStorage.getItem("Products"));
        //eslint
        for (let i = 0; i < getProduct.length; i++) {
            if (getProduct[i].id === id) {
                getProduct[i].image = singleProduct.image;
                getProduct[i].title = singleProduct.title;
                getProduct[i].price = singleProduct.price;
                getProduct[i].category = singleProduct.category;

                localStorage.setItem("Products", JSON.stringify(getProduct));
                alert("updated success");
                setUpdateProdContainer(false);
            }
        }
    }
    return (
        <div className="single-product-container">
            <div className="left">
                <div className="preview">
                    <img src={singleProduct.image} />
                    <img src={singleProduct.image} />
                </div>
                <div className="product-img">
                    <img src={singleProduct.image} className="pro" />
                    <div className="btns">

                        {state?.user?.role === "Buyer" ? (
                            <button className="add" onClick={addToCart}
                                // style={{
                                //     width: "70%",
                                //     height: "50px",
                                //     backgroundColor: "rgb(255,62,108)",
                                //     fontSize: "22px",
                                //     fontWeight: "bolder",
                                //     marginTop: '30px',
                                //     borderRadius: '10px',
                                //     color: 'white',
                                // }}

                            // (singleProduct.id)
                            >
                                <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#9f2089' }}></i>
                                <h5>Add to Cart</h5>
                            </button>
                        ) : null}

                        {state?.user && state?.user?.role === "Seller" && (
                            <div>

                                <button className='add' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"
                             
                                >
                                    <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#9f2089' }}></i>
                                    <h5>Update </h5>
                                </button>


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Update Details</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                                            </div>
                                            <div class="modal-body" style={{ color: 'black' }}>



                                                <form onSubmit={handleSubmitProductUpdate}>
                                                    <div className="updateProdInputs" >
                                                        <label><b>Image:</b></label><br />
                                                        <input
                                                            type="text"
                                                            onChange={changeProdDetails}
                                                            name="image"
                                                            placeholder="update image url"
                                                            value={singleProduct.image}
                                                            style={{ width: '90%', height: '30px', border: '1px solid black', marginBottom: '15px' }}
                                                        /><br />
                                                        <label><b>Title:</b></label><br />
                                                        <input
                                                            type="text"
                                                            onChange={changeProdDetails}
                                                            name="title"
                                                            placeholder="update Title"
                                                            value={singleProduct.title}
                                                            style={{ width: '90%', height: '30px', border: '1px solid black', marginBottom: '15px' }}
                                                        /><br />
                                                        <label><b>Price:</b></label><br />
                                                        <input
                                                            type="text"
                                                            onChange={changeProdDetails}
                                                            name="price"
                                                            placeholder="update price"
                                                            value={singleProduct.price}
                                                            style={{ width: '90%', height: '30px', border: '1px solid black', marginBottom: '15px' }}
                                                        /><br />
                                                        <label><b>Category:</b></label><br />
                                                        <select
                                                            value={singleProduct.category}
                                                            onChange={changeProdDetailsCategory}
                                                            style={{ width: '90%', height: '30px', border: '1px solid black', marginBottom: '15px' }}
                                                        >
                                                            <option value="Other">Other</option>
                                                            <option value="Mens">Mens</option>
                                                            <option value="Womens">Womens</option>
                                                            <option value="Kids">Kids</option>
                                                            <option value="Fashion">Fashion</option>
                                                            <option value="Accessories">Accessories</option>
                                                        </select>
                                                        <br />
                                                        <button
                                                            className='adds'
                                                        >
                                                            <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#9f2089' }}></i>
                                                            <h5>Update Product</h5>
                                                        </button>
                                                    </div>


                                                </form>

                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        )}

                      
                    </div>
                    <h5 style={{ padding: '20px 15px' }}>7 Similar Products</h5>
                    <div className="preview-below">
                        <img src={singleProduct.image} />
                        <img src={singleProduct.image} />
                        <img src={singleProduct.image} />
                        <img src={singleProduct.image} />
                        <img src={singleProduct.image} />
                        <img src={singleProduct.image} />
                    </div>
                </div>
            </div>
            <div className="right3">
                <div className="price-banner1">
                    <h4>{singleProduct.title}</h4>
                    <p className="price">Rs.{singleProduct.price}</p>
                    <button>
                        <p>3.8</p>
                        <i className="fa-solid fa-star" style={{ color: '#ffffff' }}></i>
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
                    <h3>Product Category</h3>
                    <p>{singleProduct.category}</p>
                  
                </div>
                <div className="sold-by">
                    <h3>Sold By</h3>
                    <div className="sold-by-2">
                        <img src="https://images.meesho.com/images/pow/shop_100.webp" />
                        <h3>Khadi Ashram</h3>
                        <button>View Shop</button>
                    </div>
                    <div className="sold-by-3">
                        <div>
                            <button>
                                <p>3.8</p>
                                <i className="fa-solid fa-star" style={{ color: '#35d09c' }}></i>
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