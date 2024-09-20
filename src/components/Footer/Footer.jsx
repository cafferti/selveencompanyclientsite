import React from "react";
import './Footer.css'

const Footer = () =>{
return(
<section className="f-wrapper">
<div className="paddings innerWidth flexCenter f-container">

      {/*left side*/}
      <div className="flexColStart f-left">
      <img src="./logo2.png" alt="" width={120}/>
      <span className="secondaryText">
                Our vision is to make all people <br/>
                the best place to live for them.
     </span>
      </div>
      {/*right side*/}
      
      <div className="flexColStart f-right">
            <span className="primaryText">
                Information
            </span>
            <span className="secondaryText">No 42 Church Street JB House Jos
                <br />
                73/10 Enugu Road, Jos, Jos, plateau State, Nigeria
            </span>
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Products</span>
                <span>About us</span>
            </div>
        
</div>
</div>
</section>
);
}

export default Footer;