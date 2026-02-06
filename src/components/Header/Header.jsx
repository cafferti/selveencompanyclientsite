import React, { useState } from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && '-100%'}
        }
    }

	return (
	<section className='h-wrapper h-[6rem] bg-[#003366] border-b-2 border-gray-400'>
      <div className='w-[100%] bg-[#3755cc] h-[1rem]'>
      </div>

        <div className='paddings innerWidth h-container'>
                <div>
                    <a href="/">
                        <img className='w-[3rem]' src="/logo1.png" alt="logo" width={100} />
                    </a>
                </div>

                <OutsideClickHandler
                   onOutsideClick={()=> {
                    setMenuOpened(false)
                   }}
                >
                    <div className="h-menu flexCenter"
                    style={getMenuStyles(menuOpened)}
                    >
                            <a href="/residencies">Residency</a>
                            <a href="/values">Our Value</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/team">Our Team</a>
                            <button className="button mobile-button">
                                <a href="/contact">Contact</a>
                            </button> 
                    </div>
                </OutsideClickHandler>

                <div style={{justifySelf: 'end'}} className="flex items-center gap-4">
                    <button className="button desktop-button">
                        <a href="/contact">Contact</a>
                    </button> 
                    <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                        <BiMenuAltRight size={30}/>
                    </div>
                </div>
        </div>
        
    </section>
)
}
export default Header