import React from 'react'

function About() {
    return (
        <div className="About" style={{marginTop:"2rem",backgroundColor:"#f5f5f5"}}>
            <div className="d-flex">
                <div className="mr-auto p-2">
                    <a href="/"><span style={{paddingRight:"15px",paddingLeft:"20px",color:"#f05820"}}>About Us</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Partner with us</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Terms & Conditions</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Blog</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Media</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>24x7 Help</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Grievance policy</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Bug bounty</span></a>
                    <a href="/"><span style={{paddingRight:"15px",color:"#f05820"}}>Return/Cancellation policy</span></a>
                </div>
                
                <div className="p-2" style={{justifyContent:"space-evenly"}}>
                    <a href="/"><i className="fab fa-apple" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                    <a href="/"><i className="fab fa-windows" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                    <a href="/"><i className="fab fa-android" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                    <a href="/"><i className="fab fa-twitter" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                    <a href="/"><i className="fab fa-facebook-f" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                    <a href="/"><i className="fab fa-instagram" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                    <a href="/"><i className="fab fa-youtube" style={{paddingRight:"20px",color:"#f05820"}}></i></a>
                </div>
                
            </div>
        </div>
    )
}

export default About
