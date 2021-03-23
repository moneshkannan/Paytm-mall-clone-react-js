import React from 'react'

function Cars() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="3000" style={{justifyItems:"left",width:"60rem", display:"flex", marginLeft:"auto", marginRight:"auto", marginBottom:"2rem"}}>
              <div className="carousel-inner">
                <div class="carousel-item active">
                  <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/686640/1606387711835.jpg?imwidth=1600&impolicy=hq" className="d-block w-100 rounded-3" style={{height:"100"}} alt="..."/></a>
                </div>
                <div className="carousel-item">
                  <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/686637/1606387500460.jpg?imwidth=1600&impolicy=hq" className="d-block w-100 rounded-3" style={{height:"100"}} alt="..."/></a>
                </div>
                <div classNamem="carousel-item">
                  <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/686643/1606387894032.png?imwidth=1600&impolicy=hq" className="d-block w-100 rounded-3" style={{height:"100"}} alt="..."/></a>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
          </div>
        </div>
    )
}

export default Cars
