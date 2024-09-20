import React from "react";
import './Contacts.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contacts = () =>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/*left side */} 
                <div className="flexColStart c-left">
                <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">
                We are always ready to help by providing the best 
                sevices we believe a good place to live can make 
                your life better 
            </span> 
            <div className="flexColStart contactModes">
                {/*first row */} 
                 <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">+234 903 4703 963</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>

                    {/*second mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">+234 903 4703 963</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        Chat Now
                        </div>
                    </div>
                 </div>

                 {/*second row */} 
                 <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                            <span className="primaryText">Video Call</span>
                            <span className="secondaryText">+234 903 4703 963</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Video Call Now
                        </div>
                    </div>

                    {/*fourth mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">+234 903 4703 963</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        Message Now
                        </div>
                    </div>
                 </div>
            </div>
                </div>

                {/*right side */} 
                <div className="c-right">
                    <div className="image-container">
                    <img src="./contact.jpg" alt="" />  
                    </div>
                </div>
            </div>
            <div className="beginning_of_next_section">
        <span className='orangeText' id="center">Meet Our Team</span>
        <span className='primaryText'>The Team That's Got Your Back</span>
    </div>
        </section>
        
    );
}

export default Contacts;