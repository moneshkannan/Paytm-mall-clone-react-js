import React from 'react'

function Mobiletab() {
    return (
        <div>
            <h1 style={{fontWeight:"bolder", marginBottom:"3rem"}}>Explore Mobiles and Tablets</h1>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/546080/1611722939153.jpg?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/546081/1611722965277.jpg?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/546083/1611722957592.jpg?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/546084/1611722972011.jpg?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
        </div>
    )
}

export default Mobiletab
