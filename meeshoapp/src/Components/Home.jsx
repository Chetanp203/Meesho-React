import "./Home.css"
import img1 from "./images/Captur1e.JPG"
import img2 from "./images/Capture2.JPG"
import img3 from "./images/Capture3.JPG"
import img4 from "./images/Capture4.JPG"
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../MyContext/AuthContext"
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
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
            route("/cart");
          } else {
            regUser[i].cart.push(products);
            localStorage.setItem("Users", JSON.stringify(regUser));
            alert("product added");
            route("/all-products");
          }
        }
      }
    }
  }
  return (
    <div>
      <div id="body-home1">
        <div>
          <img className='banners' src={img1} />
        </div>

        <div>
          <img className='banners' src={img2} />
        </div>
        <div>
          <img className='banners' src={img3} />
        </div>
        <div>
          <img className='banners' src={img4} />
        </div>
      </div>
      <h1>Products For You</h1>
      <div id="body6" className="flex">
        <div id="left-home">
          <div className="pxy rel">Sort by:<b>Relevance</b></div>
          <div className="contain">
            <p><b>FILTERS</b></p>
            <p>1000+ Products</p>
            <hr />
            <p><b>Category</b></p>
            <div className="cat">
              <i id="cate" className="fa-solid fa-magnifying-glass" style={{ color: '#a3a3a3' }}></i>
              <input type="text" placeholder="Search" />
            </div>
            <div className="in">
              <input type="checkbox" />
              <label>Analog Watches</label><br />
              <input type="checkbox" />
              <label>Bangles & Bracelets</label><br />
              <input type="checkbox" />
              <label>Bathing Soaps</label><br />
              <input type="checkbox" />
              <label>Bedsheets</label><br />
              <input type="checkbox" />
              <label>Bike Covers</label><br />
              <input type="checkbox" />
              <label>Blouses</label><br />
              <input type="checkbox" />
              <label>Bluetooth Hadphones</label><br />
              <input type="checkbox" />
              <label>Body Lotions & Creams</label><br />
              <input type="checkbox" />
              <label>Bra</label><br />
              <input type="checkbox" />
              <label>Car Covers</label><br />
              <input type="checkbox" />
              <label>Cups & mugs</label><br />
              <input type="checkbox" />
              <label>Dresses</label><br />
            </div>
            <p><b>Fabric</b></p>
            <div className="in">
              <input type="checkbox" />
              <label>Acrylic</label><br />
              <input type="checkbox" />
              <label>Art Silk</label><br />
              <input type="checkbox" />
              <label>Banarsi Silk</label><br />
              <input type="checkbox" />
              <label>Chanderi Cotton</label><br />
              <input type="checkbox" />
              <label>Chanderi Silk</label><br />
              <input type="checkbox" />
              <label>Chiffon</label><br />
              <input type="checkbox" />
              <label>Cotton</label><br />
              <input type="checkbox" />
              <label>Cotton Blend</label><br />
              <input type="checkbox" />
              <label>Cotton Linen</label><br />
              <input type="checkbox" />
              <label>Cotton Lycra</label><br />
              <input type="checkbox" />
              <label>Cotton Silk</label><br />
              <input type="checkbox" />
              <label>Cotton Slub</label><br />
            </div>
            <p><b>Size</b></p>
            <div className="in">
              <div>
                <i className="fa-solid fa-magnifying-glass" style={{ color: '#a3a3a3' }}></i>
                <input type="text" placeholder="Search" />
              </div>
              <input type="checkbox" />
              <label>0-2 Years</label><br />
              <input type="checkbox" />
              <label>1.5 meters</label><br />
              <input type="checkbox" />
              <label>1.75 meters</label><br />
              <input type="checkbox" />
              <label>10</label><br />
              <input type="checkbox" />
              <label>10-16 Years</label><br />
              <input type="checkbox" />
              <label>2 meters</label><br />
              <input type="checkbox" />
              <label>2.5 meters</label><br />
              <input type="checkbox" />
              <label>2-5 years</label><br />
              <input type="checkbox" />
              <label>2.2 meters</label><br />
              <input type="checkbox" />
              <label>2.4</label><br />
              <input type="checkbox" />
              <label>2.6</label><br />
              <input type="checkbox" />
              <label>2.8</label><br />
            </div>

          </div>
        </div>

        <div id="right" >
          <div>
            <img src="https://images.meesho.com/images/products/294018871/qjk3i_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div> 
          <div>
            <img src="https://images.meesho.com/images/products/93499740/0stqg_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/257818067/voxd8_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/150295435/agzjr_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/62901606/zk1df_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/276567373/i1d61_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/225067561/6dua4_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/195742709/pobvo_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/156617399/lcago_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/295230330/jsfkb_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/294018871/qjk3i_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/294018871/qjk3i_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/196943740/lkli1_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/79559266/jxs0z_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/283590261/zefth_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
          <div>
            <img src="https://images.meesho.com/images/products/49200726/h5z60_400.webp" />
            <p>Alisha Vougish women</p>
            <p><b>Rs 421</b>Onwards</p>
            <p>Free Delivery</p>
            <div className="flex">
              <div class="star">
                3.8<i className="fa-solid fa-star" style={{ color: '#fafafa' }}></i>
              </div>
              <p>61095 Reviews</p>
            </div>
          </div>
        </div>



    
      </div>
    </div>
  )
}

export default Home;