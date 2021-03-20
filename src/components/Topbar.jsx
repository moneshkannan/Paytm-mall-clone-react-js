import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
//import SearchIcon from '@material-ui/icons/Search';
//import Navbar from 'react-bootstrap/Navbar'
//import './Topbar.css'

function Topbar() {
    return (
        <div>
          <div className="empty-navbar">
            <p style={{color:"white",width:"100%"}}>x</p>
          </div>
          <div>
            <img 
            src="https://png.pngitem.com/pimgs/s/12-123311_paytm-mall-transparent-logo-paytm-mall-icon-png.png"
            width="100"
            height="60"
            className="paytmlogo"
            alt="paytm"
            style={{display:"block", marginLeft:"auto", marginRight:"auto"}}

            />
          </div>

          <nav className="navbar navbar-expand-lg navbar-light" style={{marginBottom:"2rem"}}>
  <div className="container-fluid">
    {/* <a className="nav-link active" href="/">Shop by category</a> */}
    <div className="dropdown">
  <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
    <span style={{fontWeight : "bold", color: "black"}}>shop by category</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">ELECTRONICS</a></li>
    <li><a className="dropdown-item" href="/">MOBILES AND TABLETS</a></li>
    <li><a className="dropdown-item" href="/">HEALTH & GROCERY</a></li>
    <li><a className="dropdown-item" href="/">PROTECT YOURSELF</a></li>
    <li><a className="dropdown-item" href="/">BEAUTY AND GROOMING</a></li>
    <li><a className="dropdown-item" href="/">MENS FASHION</a></li>
    <li><a className="dropdown-item" href="/">WOMENS FASHION</a></li>
    <li><a className="dropdown-item" href="/">HOME AND KITCHEN</a></li>
    <li><a className="dropdown-item" href="/">BOOKS AND STATIONARY</a></li>
  </ul>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">        </a>
        </li>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search for a Product, Brand or Category" aria-label="Search" style={{width:600, boxShadow:"none", color:"black"}}/>
        <button className="btn btn-outline-success" type="submit"><i className="fas fa-search" style={{color:"red",borderWidth:"0px", border:"none"}}></i></button>
      </form>
      </ul>
      <li className="d-flex nav-item">
          <a className="nav-link" style={{color: "black"}} href="/"><PhoneAndroidIcon style={{color: "red"}}/>My Orders</a>
          <a className="nav-link" style={{color: "black"}} href="/"><ShoppingBasketIcon style={{color: "red"}}/>No items in the bag</a>
          <a className="nav-link" style={{color: "black"}} href="/"><SentimentVerySatisfiedIcon style={{color: "red"}}/>Log in/Sign up</a>
        </li>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Topbar