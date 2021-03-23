import React from 'react'
import "./Homeessen.css"

function Homeessen() {
    return (
        <div className="Homeessen">
            <h1 style={{fontWeight:"bolder", marginBottom:"3rem"}}>Explore Home Essentials</h1>
            <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773906/1616183091864.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773907/1616182887459.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773908/1616182918156.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
                <div className="card" style={{width: "18rem", border:"none"}}>
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773910/1616183174159.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
                </div>
            </div>
            <div className="card-deck" style={{justifyContent:"space-evenly", display:"", textAlign: "center", width:"100%", marginBottom:"3rem"}}>
            <div className="rounded-circle" >
                    <a href="/"><img className="rounded-circle"  style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773912/1616183309254.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                <div className="card-body">
                    <a href="/"><span style={{color: "black",fontWeight:"500"}}>Chimneys</span></a>
                </div>
                </div>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773916/1616183200709.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                <div className="card-body">
                    <a href="/"><span style={{color: "black",fontWeight:"500"}}>Cookers</span></a>
                
                </div>
                </div>
                <br></br>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773917/1616183226483.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                    <div className="card-body">
                        <a href="/"><span style={{color: "black",fontWeight:"500"}}>Gas Stoves</span></a>
                    </div>
                </div>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773918/1616183480798.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                    <div className="card-body">
                        <a href="/"><span style={{color: "black",fontWeight:"500"}}>Towels</span></a>
                    </div>
                </div>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773921/1616183427146.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                    <div className="card-body">
                        <a href="/"><span style={{color: "black",fontWeight:"500"}}>Mattresses</span></a>
                    </div>
                </div>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773924/1616183354100.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                    <div className="card-body">
                        <a href="/"> <span style={{color: "black",fontWeight:"500"}}>Irons</span></a>
                    </div>
                </div>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773925/1616183505240.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                    <div className="card-body">
                        <a href="/"><span style={{color: "black",fontWeight:"500"}}>Choppers</span></a>
                    </div>
                </div>
                <div className="rounded-circle">
                    <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773928/1616183560626.png?imwidth=140&impolicy=hq" alt="Card"/></a>
                    <div className="card-body">
                        <a href="/"><span style={{color: "black",fontWeight:"500"}}>Extension C...</span></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Homeessen
