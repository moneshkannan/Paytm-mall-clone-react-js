import React from 'react'

function Gadgetzone() {
    return (
        <div>
            <h1 style={{fontWeight:"bolder", marginBottom:"2rem"}}>Gadget zone</h1>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616534/1611726412923.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616535/1611726441845.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616536/1611726469628.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616537/1611726478786.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
        </div>
    )
}

export default Gadgetzone
