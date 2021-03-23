import React from 'react'
import "./Ghbest.css"

function Ghbest() {
    return (
        <div className="Ghbest">
            <h1 style={{fontWeight:"bolder", marginBottom:"3rem"}}>Grocery & Health Bestsellers</h1>
        <div className="card-deck" style={{alignItems:"center", justifyContent:"space-evenly", display:"flex", marginLeft:"2rem", marginRight:"2rem", marginBottom:"3rem"}}>
            <div className="card" style={{width: "18rem", border:"none"}}>
                <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773933/1616183816083.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
            </div>
            <div className="card" style={{width: "18rem", border:"none"}}>
                <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773934/1616183944902.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
            </div>
            <div className="card" style={{width: "18rem", border:"none"}}>
                <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773935/1616183866422.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
            </div>
            <div className="card" style={{width: "18rem", border:"none"}}>
                <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/773936/1616183763804.png?imwidth=414&impolicy=hq" className="card-img-top" alt=".."/></a>
            </div>
        </div>
        <div className="card-deck" style={{justifyContent:"space-evenly", display:"", textAlign: "center", width:"100%", marginBottom:"3rem"}}>
        <div className="rounded-circle" >
            <a href="/"><img className="rounded-circle"  style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773937/1616184191864.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black", fontWeight:"500"}}>Edible Oils</span></a>
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773938/1616183985865.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Pet Food</span></a>
            
            </div>
            </div>
            <br></br>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773939/1616184142967.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Deo & perf..</span></a>
            
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773940/1616184039536.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Masks</span></a>
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773941/1616184292041.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Almonds</span></a>
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773942/1616184211162.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
               <a href="/"> <span style={{color: "black",fontWeight:"500"}}>Tea & coffee</span></a>
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773944/1616184371201.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Face Wash</span></a>
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773946/1616184314831.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Sanitizers</span></a>
            </div>
            </div>
            <div className="rounded-circle">
            <a href="/"><img className="rounded-circle" style={{height:"5rem",width:"5rem"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/773947/1616184440368.png?imwidth=140&impolicy=hq" alt="Card"/></a>
            <div className="card-body">
                <a href="/"><span style={{color: "black",fontWeight:"500"}}>Bp Monitors</span></a>
            </div>
            </div>
            
    </div>
    </div>
    )
}

export default Ghbest
