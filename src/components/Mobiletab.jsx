import React from 'react'
import "./Mobiletab.css"
function Mobiletab() {
    return (
        <div className="Mobiletab">
            <h1 style={{fontWeight:"bolder", marginBottom:"3rem"}}>Explore Mobiles and Tablets</h1>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773753/1616185189101.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773754/1616180094851.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773755/1616180128293.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773756/1616180156920.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
        </div>
    )
}

export default Mobiletab
