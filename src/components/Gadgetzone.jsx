import React from 'react'
import "./Gadgetzone.css"
function Gadgetzone() {
    return (
        <div className="Gadgetzone">
            <h1 style={{fontWeight:"bolder", marginBottom:"2rem"}}>Gadget zone</h1>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card cd" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773627/1616175933852.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card cd" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773628/1616175833627.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card cd" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773629/1616185138382.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card cd" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773630/1616176018980.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
        </div>
    )
}

export default Gadgetzone
