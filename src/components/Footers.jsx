import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Footers.css"

function Footers() {
    return (
	<div>
		<footer className="footer" style={{marginTop:"2rem"}}>
		<h6 style={{marginLeft:"2rem"}}>From Electronics, Fashion to Cars: Buy Everything Online from the Convenience of Your Home from Paytm Mall</h6>
			<div className="container">
				<div className="d-flex justify-content-between">
					<div className="footer-col">
						<ul>
							<li className="ss"><a href="/">Electronics<ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Mens and Fashion<ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Stationary<ArrowDropDownIcon/></a></li>
						</ul>
					</div>
					<div className="footer-col">
						<ul>
							<li className="ss"><a href="/">Mobiles<ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Home and Kitchen<ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Travel and cards<ArrowDropDownIcon/></a></li>
						</ul>
					</div>
					<div className="footer-col">
						<ul>
							<li className="ss"><a href="/">Cars & bike<ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Baby, Kids & Toys<ArrowDropDownIcon/></a></li>
						</ul>
					</div>
					<div className="footer-col">
						<ul>
							<li className="ss"><a href="/">Super Market<ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Car & Bike Accessories<ArrowDropDownIcon/></a></li>
						</ul>
					</div>
					<div className="footer-col">
						<ul>
							<li className="ss"><a href="/">Women's Fashion <ArrowDropDownIcon/></a></li>
							<li className="ss"><a href="/">Sports & Fitness<ArrowDropDownIcon/></a></li>
						</ul>
					</div>
				</div>
			</div>
			<h6 style={{textAlign:"center",marginBottom:"3rem"}}>© Designed by Monesh Kannan (<a className = "git" style={{color:"hotpink"}} href="https://github.com/moneshkannan/Paytm-mall-clone-react-js">Github</a>) - Codingmart</h6>
		</footer>
	</div>
    )
}

export default Footers
