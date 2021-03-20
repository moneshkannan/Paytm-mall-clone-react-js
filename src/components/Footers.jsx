import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Footers() {
    return (
        <div>
            <section id="footer">
		<div className="container">
			<h4 style={{fontSize:"1rem", textAlign:"left",marginTop:"3rem"}}>From Electronics, Fashion to Cars: Buy Everything Online from the Convenience of Your Home from Paytm Mall</h4>
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col col-sm-4 col-md-4">
					<ul class="list-unstyled quick-links">
						<li><a style={{color:"black"}} href="/">Electronics  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Mens and Fashion  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Stationary  <ArrowDropDownIcon/></a></li>
					</ul>
				</div>
				<div className="col col-sm-4 col-md-4">
					<ul class="list-unstyled quick-links">
						<li><a style={{color:"black"}} href="/">Mobiles  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Home and Kitchen  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Travel and cards  <ArrowDropDownIcon/></a></li>
					</ul>
				</div>
				<div className="col col-sm-4 col-md-4">
					<ul className="list-unstyled quick-links">
						<li><a style={{color:"black"}} href="/">Cars & bike  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Baby, Kids & Toys  <ArrowDropDownIcon/></a></li>
						
					</ul>
				</div>
				<div className="col col-sm-4 col-md-4">
					<ul className="list-unstyled quick-links">
						<li><a style={{color:"black"}} href="/">Super Market  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Car & Bike Accessories  <ArrowDropDownIcon/></a></li>
						</ul>
				</div>
				<div className="col col-sm-4 col-md-4">
					<ul className="list-unstyled quick-links">
						<li><a style={{color:"black"}} href="/">Women's Fashion  <ArrowDropDownIcon/></a></li>
						<li><a style={{color:"black"}} href="/">Sports & Fitness  <ArrowDropDownIcon/></a></li>
						</ul>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}

export default Footers
