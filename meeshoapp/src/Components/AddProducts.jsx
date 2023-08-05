import "./AddProducts.css"
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../MyContext/AuthContext";

const AddProducts = () => {

  const [prodDetails, setProdDetails] = useState({ title: "", price: "", image: "", category: "Others" });
  const router = useNavigate();
  const { state } = useContext(AuthContext);

  const HandleProdDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProdDetails({ ...prodDetails, [name]: value });
  };
  const HandleCategory = (e) => {
    const value = e.target.value;
    setProdDetails({ ...prodDetails, ["category"]: value });
  };

  const { image, title, price, category } = prodDetails;

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (image && title && price && category) {
      const getProduct = JSON.parse(localStorage.getItem("Products")) || [];

      const prodObj = {
        ...prodDetails,
        id: uuidv4(),
      };

      getProduct.push(prodObj);
      localStorage.setItem("Products", JSON.stringify(getProduct));
      alert("product added successfully");
      setProdDetails({
        image: "",
        title: "",
        price: "",
        category: "Other",
      });
    } else {
      alert("please fill all the fields");
      setProdDetails({
        image: "",
        title: "",
        price: "",
        category: "Other",
      });
    }
  };

  useEffect(() => {
    // let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if (state?.user) {
      if (state?.user?.role == "Buyer") {
        alert("sorry You are not a seller");
        router("/");
      }
    } else {
      router("/login");
      alert("Login First as a seller");
    }
  }, []);

  return (
    <div id="body1">
    <div id="login2">
        {/* <img src="https://images.meesho.com/images/marketing/1661417516766.webp" /> */}
        <p>Update Product</p>
        <form id="productdetails" onSubmit={handleProductSubmit}>
            <label>Product Name:</label>
            <br />
            <input type="text" value={prodDetails.title} name="title" onChange={HandleProdDetails}  />
            <br />
            <label>Product Price:</label>
            <br />
            <input type="text" value={prodDetails.price} name="price" onChange={HandleProdDetails}  />
            <br />
            <label>Category:</label>
            <br />
            <select onChange={HandleCategory} style={{ width: '64%', height: '30px', border: '1px solid grey', marginTop: '5px', borderRadius: '2px' }}>
                <option value="Others">Others</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="Furniture">Furniture</option>
                <option value="Beauty">Beauty</option>
                <option value="Electronics">Electronics</option>
            </select>
            <br />
            <label>Product Image:</label>
            <br />
            <input type="text" value={prodDetails.image} name="image" onChange={HandleProdDetails}  />
            <br />
            <button className='register'>Add Product</button>
        </form>
    </div>
</div>
  )
}

export default AddProducts