import React from 'react'

function Electrobest() {
    return (
        <div>
            <h1 style={{fontWeight:"bolder", marginBottom:"3rem"}}>Electronics Bestsellers</h1>
            <button type="button" class="btn btn-danger rounded-pill"><span style={{fontWeight:"bold",marginLeft:"1rem",marginRight:"1rem"}}>View all</span></button>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem",marginTop:"2rem"}}>
                <div className="card" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"3.4rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMBOAT-ROCKERZCLIC252498B030EDE0/0..jpg?imwidth=280&impolicy=hq" className="card-img-top" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered"}}>₹1,599</span> <spant style={{textDecoration: "line-through"}}>₹1,999</spant>
                    </div>
                    <div className="content"><span>Boat Rockerz...</span></div>
                    <div className="alert alert-success"><span>Cashback ₹100</span></div>
                </div>
                <div className="card" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMBOAT-BASSHEACLIC252498396E26F9/1562672507532_31.jpg?imwidth=280&impolicy=hq" className="card-img-top" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered"}}>₹399</span> <spant style={{textDecoration: "line-through"}}>₹450</spant>
                    </div>
                    <div className="content"><span>Boat Bassheads 400</span></div>
                    <div className="alert alert-success"><span>Cashback ₹30</span></div>
                </div>
                <div className="card" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"3rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMBOAT-ROCKERZE-PL22764C362D7C0/0..jpg?imwidth=280&impolicy=hq" className="card-img-top" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered"}}>₹215</span> <spant style={{textDecoration: "line-through"}}>₹300</spant>
                    </div>
                    <div className="content"><span>Acid Eye head...</span></div>
                    <div className="alert alert-success"><span>Cashback ₹20</span></div>
                </div>
                <div className="card" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"3.8rem"}} src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBJBL-C50HI-INE-PL2276490780A32/1569223111458_11.jpg?imwidth=280&impolicy=hq" className="card-img-top" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered"}}>₹500</span> <spant style={{textDecoration: "line-through"}}>₹600</spant>
                    </div>
                    <div className="content"><span>JBL Headphones</span></div>
                    <div className="alert alert-success"><span>Cashback ₹50</span></div>
                </div>
                <div className="card" style={{width: "5rem", border:"none"}}>
                    <a href="/"><img style={{marginBottom:"3rem"}}src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMBOVTY-M-9-MAJIND2584923AE4DCD5/1588385302965_2.jpg?imwidth=280&impolicy=hq" className="card-img-top" alt=".."/></a>
                    <div className="price">
                    <span style={{color:"orangered"}}>₹800</span> <spant style={{textDecoration: "line-through"}}>₹1,200</spant>
                    </div>
                    <div className="content"><span>Skull candy</span></div>
                    <div className="alert alert-success"><span>Cashback ₹250</span></div>
                </div>
            </div>
        </div>
    )
}

export default Electrobest
