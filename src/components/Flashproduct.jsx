import React from 'react'
import "./Flashproduct.css"
function Flashproduct() {
    return (
        <div className="Flashproduct">
            <h1 style={{fontWeight:"bolder", marginBottom:"3rem"}}>Flash Products</h1>
            <button type="button" class="btn btn-danger rounded-pill"><span style={{fontWeight:"bold",marginLeft:"1rem",marginRight:"1rem"}}>View all</span></button>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem",marginTop:"2rem"}}>
                <div className="card parent" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"3.4rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATAMAZFIT-BIP-YUVA1054611BB9C3E9/1610713240853_0..jpg?imwidth=280&impolicy=hq" className="card-img-top child" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered",fontSize:"20px"}}>₹3,999</span> <spant style={{textDecoration: "line-through"}}>₹5,999</spant>
                    </div>
                    <div className="content"><span>Amazfit Bip U Black...</span></div>
                    <div className="alert alert-success"><span>Cashback ₹400</span></div>
                </div>
                <div className="card parent" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMAPPLE-MV7N2HTELE2887394B147781/1562676539664_0..jpg?imwidth=280&impolicy=hq" className="card-img-top child" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered",fontSize:"20px"}}>₹12,000</span> <spant style={{textDecoration: "line-through"}}>₹15,999</spant>
                    </div>
                    <div className="content"><span>Apple Airpod</span></div>
                    <div className="alert alert-success"><span>Cashback ₹300</span></div>
                </div>
                <div className="card parent" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"0.8rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMMILTON-INSULHAMI57216FB0262E4/1583407869954_26.jpg?imwidth=280&impolicy=hq" className="card-img-top child" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered",fontSize:"20px"}}>₹815</span> <spant style={{textDecoration: "line-through"}}>₹1,200</spant>
                    </div>
                    <div className="content"><span>Milton Flip-Lid Water Bottle</span></div>
                    <div className="alert alert-success"><span>Cashback ₹50</span></div>
                </div>
                <div className="card parent" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"5.7rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMHAWKINS-CONTUNI-114288788E1D0ED/1612016812636_0.jpg?imwidth=280&impolicy=hq" className="card-img-top child" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered",fontSize:"20px"}}>₹2,400</span> <spant style={{textDecoration: "line-through"}}>₹2,800</spant>
                    </div>
                    <div className="content"><span>Hawkins Contura Stainless Cooker</span></div>
                    <div className="alert alert-success"><span>Cashback ₹200</span></div>
                </div>
                <div className="card parent" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"1.5rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/P/PE/PERPHILIPS-BT12TRUE11677635D34D6D/0.jpg?imwidth=280&impolicy=hq" className="card-img-top child" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered",fontSize:"20px"}}>₹800</span> <spant style={{textDecoration: "line-through"}}>₹1,200</spant>
                    </div>
                    <div className="content"><span>Philips Trimmer</span></div>
                    <div className="alert alert-success"><span>Cashback ₹250</span></div>
                </div>
            </div>
        </div>
    )
}

export default Flashproduct
