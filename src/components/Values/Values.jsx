import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Values.css'
import data from '../../utils/accordion'


const Values = () =>{
return(
<section className="v-wrapper">
    <div className="paddings innerWidth flexCenter v-container">
        {/* left side*/}
        <div className="v-left">
            <div className="image-container">
                <img src="./value.png" alt="" />
            </div>
        </div>
        {/* right side*/}
        <div className="flexColstart v-right">
            <span className="orangeText">Values </span>
            <span className="primaryText">Our Mission</span>
            <span className="secondaryText">
            To be a global brand that will transform the liftstyle of Real Estate investment and housing interior. 
                <br/>
                We see housing and interior as a natural projection of the soul been expressed by our clients.
            </span>
            
            <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {data.map((item, i) => {
                    const [className, setClassName] = useState(null)
                    return (
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                            <AccordionItemButton className="flexCenter accordionButton">
                            <AccordionItemState>
                                {({expanded})=> expanded ? setClassName('expanded') : setClassName('collapsed')}
                            </AccordionItemState>
                                <div className="flexCenter icon">{item.icon}</div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20}/>
                            </div>
                            </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="seconadryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}

            </Accordion>


        </div>

    </div>
</section>
);
}

export default Values;