import React from 'react'
//import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
//import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
//import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
//import SearchIcon from '@material-ui/icons/Search';
//import Navbar from 'react-bootstrap/Navbar'
//import './Topbar.css'

function Topbar() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"white"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://png.pngitem.com/pimgs/s/12-123311_paytm-mall-transparent-logo-paytm-mall-icon-png.png" height="50px" width="90px" alt="logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item dropdown" style={{marginRight:"1rem"}}>
                                <a class="nav-link dropdown-toggle btn btn-outline-danger" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-bars" style={{paddingRight:"1rem"}}></i>
                                    <span style={{fontWeight:"bold",color:"black"}}>Shop by Category</span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            </ul>
                        <form class="d-flex col-md-6 ml-2">
                            <input class="form-control me-2" style={{boxShadow:"none"}} type="search" placeholder="Search for a Product,Brand or Category" aria-label="Search" />
                            <button class="btn btn-outline-danger" type="submit"><i class="fas fa-search" style={{color:"black"}}></i></button>
                        </form>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/"><i class="fas fa-mobile-alt" style={{color:"red",paddingRight:"0.5rem",fontSize:"1rem"}}></i><span style={{color:"#7e7e7e",fontWeight:"400"}}>  My Orders</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"><i class="fas fa-shopping-bag" style={{color:"red",paddingRight:"0.5rem",fontSize:"1rem"}}></i><span style={{color:"#7e7e7e",fontWeight:"400"}}>No Items in Bag</span></a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/"><i class="far fa-smile-beam" style={{color:"red",paddingRight:"0.5rem",fontSize:"1rem"}}></i><span style={{color:"#7e7e7e",fontWeight:"400"}}>Login/Signup</span></a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Topbar