import React from 'react'

function Bestlaptops() {
    return (
        <div >
            <h1 style={{fontWeight:"bolder"}}>Bestselling Laptops</h1>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/604887/1605590185585.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/604888/1605590188228.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/604890/1605590150552.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/604891/1605590153887.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/685691/1606220193360.jpg?imwidth=480&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/685694/1606220321498.jpg?imwidth=480&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/685695/1606220264284.jpg?imwidth=480&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
        </div>
    )
}

export default Bestlaptops
