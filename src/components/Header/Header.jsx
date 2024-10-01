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

        <div className='flexCenter paddings innerWidth h-container'>
                <img className='w-[3rem]' src="./logo1.png" alt="logo" width={100} />
                <OutsideClickHandler
                   onOutsideClick={()=> {
                    setMenuOpened(false)
                   }}
                >
                    <div className="h-menu flexCenter"
                    style={getMenuStyles(menuOpened)}
                    >
                            <a href="">Residency</a>
                            <a href="">Our Value</a>
                            <a href="">Contact Us</a>
                            <a href="">Get Started</a>
                            <button className="button">
                                <a href="">Contact</a>
                            </button> 
                    </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>

        </div>
        
    </section>
)
}
export default Header