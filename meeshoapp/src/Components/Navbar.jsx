import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div id="head1">
        <div>
          <img src="https://uploads-ssl.webflow.com/62bc395da3c33ed00dcc1317/634bd1950007a1468123fe05_logo%20meesho%20.webp" />
        </div>
        <div id="searchbar">
          <i className="fa-solid fa-magnifying-glass fa-xl" style={{ color: '#a5a6a7' }}></i>
          <input type="search" placeholder="Try Saree,Kurti or Search by Product Code" style={{ fontSize: '16px', fontFamily: 'sans-serif' }} />
        </div>
        <div id="nav">
          <div>
            <i className="fa-solid fa-mobile-screen-button fa-xl" style={{ color: '#a8a8a8', paddingTop: '17px' }}></i>
            <span style={{ paddingTop: '10px', paddingLeft: '5px' }}>Download App</span>
          </div>
          <div style={{ paddingTop: '18px', paddingLeft: '10px' }}>
            <span >Become a Supplier</span>
          </div>
          <div class="flex">
            <div class="dropdown-center">
              <i className="fa-regular  fa-user" style={{ color: '#7d7d7d' }} ></i>
              <p className='dropdown-toggle'data-bs-toggle="dropdown" aria-expanded="false">Profile</p>
            {/* </div>

            <div class="dropdown-center"> */}
              {/* <button class=" dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
                Centered dropdown
              </button> */}
              <ul class="dropdown-menu" style={{width:'300px'}}>
                <li className='flex'><a class="dropdown-item" href="#">
                <i className="fa-solid fa-user" style={{color: '#2e2e2e',paddingRight:'15px'}}></i>
                  <b>Hello-</b></a></li>
                <li className='flex'><a class="dropdown-item" href="#">
                <i className="fa-solid fa-phone" style={{color: '#292929',paddingRight:'15px'}}></i>
                  <span>+919004003518</span></a></li>
                <li className='flex'><a class="dropdown-item" href="#">
                <i className="fa-solid fa-right-to-bracket" style={{color: '#2b2b2b',paddingRight:'15px'}}></i>
                  <b>Login</b></a></li>
                <hr />
                <li className='flex'><a class="dropdown-item" href="#">
                <i className="fa-solid fa-plus" style={{color: '#303030',paddingRight:'15px'}}></i>
                  <b>Add Products</b></a></li>
                <li className='flex'><a class="dropdown-item" href="#">
                <i className="fa-solid fa-bag-shopping" style={{color: '#363636',paddingRight:'15px'}}></i>
                  <b>My Orders</b></a></li>              
                <hr />
                <li className='flex'><a class="dropdown-item" href="#">
                <i className="fa-solid fa-arrow-right-from-bracket" style={{color: '#292929',paddingRight:'15px'}}></i>
                  <b>Logout</b></a></li>
              </ul>
            </div>


            <div>
              <i className="fa-solid fa-cart-shopping" style={{ color: '#8c8c8c' }}></i>
              <p>Cart</p>
            </div>
          </div>
        </div>

      </div>
      <div id="head2">
        <ul className="flex">
          <li>Women Ethnic</li>
          <li>Women Western</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Home & Kitchen</li>
          <li>Beauty & Health</li>
          <li>Jewellery & Accessories</li>
          <li>Bags & Footwear</li>
          <li>Electronics</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar