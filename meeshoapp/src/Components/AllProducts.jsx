import React, { useContext, useEffect, useState } from 'react'
import "./AllProducts.css"
import { AuthContext } from '../MyContext/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isProductsExist, setIsProductsExist] = useState(false);
    const { state } = useContext(AuthContext);

    const route = useNavigate();

    useEffect(() => {
        const getProducts = JSON.parse(localStorage.getItem("Products"));

        if (getProducts) {
            setIsProductsExist(true);
            setProducts(getProducts);
        } else {
            setIsProductsExist(false);
        }
    }, []);

    const addCart = (id) => {
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
                        regUser[i].cart.push(products);
                        localStorage.setItem("Users", JSON.stringify(regUser));
                        alert("product added");
                        route("/all-products");
                    }
                }
            }
        }
    };

    return (
        <div className='prod-page'>

            {isProductsExist ? (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "45px 0",
                        marginTop: "2%",
                    }}
                >
                    {products.length ? (
                        products.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    width: "19%",
                                    // height: "350px",
                                    border: "1px solid #ccc",
                                    boxShadow: "1px 1px 12px grey",
                                    textAlign: "center",
                                    marginLeft: "1%",
                                    padding: '10px',
                                    borderRadius: '5px'
                                }}
                                onClick={() => route(`/singleproduct/${item.id}`)}
                            >

                                <img className='procardimg'
                                    // width="100%"
                                    // height="200px"
                                    src={item.image}
                                    alt="broken image"
                                />

                                <div style={{height:'130px'}}>
                                <p style={{ fontSize: '13px', fontWeight: 'bolder', fontFamily: 'arial' }}>{item.title}</p>
                                <h6>Category :{item.category}</h6>
                                <p style={{ fontSize: '25px' }}><b>Rs.{item.price}</b></p>
                                </div>

                                {state?.user?.role == "Seller" ? <button className='addtobag' style={{ width: '90%', height: '40px', backgroundColor: 'rgb(168, 27, 140 )', border: 'none', color: 'white', borderRadius: '5px' }}>Update Product</button>
                                    :
                                    <button className='addtobag' onClick={addCart} style={{ width: '90%', height: '40px', backgroundColor: 'rgb(168, 27, 140 )', color: 'white', border: 'none', borderRadius: '5px' }}>Add to cart</button>}
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h1>No Products</h1>
                </div>
            )}





        </div>
    );
};

export default AllProducts;