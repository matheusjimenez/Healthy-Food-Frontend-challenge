import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { RegisterContainer } from "../RegisterContainer";

import './styles.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [toggleRegister, setToggleRegister] = useState<boolean>(false);

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>){
        event.preventDefault();
        setToggleRegister(!toggleRegister);
    }

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h2>Healthy Food</h2>
            </div>
            <div className="app__navbar-links-container">
                <ul className="app__navbar-links">
                    <li className="p__opensans"><a href="#recipes">HEALTHY RECIPES</a></li>
                    <li className="p__opensans"><a href="#blog">BLOG</a></li>
                    <li className="p__opensans"><a href="#join">JOIN</a></li>
                </ul>
                <div onClick={(e)=>handleClick(e)} className="app__navbar-register">
                    <a href="#register" className="p__opensans">REGISTER</a>
                </div>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu &&
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="#recipes">HEALTHY RECIPES</a></li>
                            <li className="p__opensans"><a href="#blog">BLOG</a></li>
                            <li className="p__opensans"><a href="#join">JOIN</a></li>
                        </ul>
                        <div onClick={(e)=>handleClick(e)} className="app__navbar-register">
                            <a href="#register" className="p__opensans">REGISTER</a>
                        </div>
                    </div>
                }

                {toggleRegister &&
                    <RegisterContainer />
                }


            </div>
        </nav>
    );
}

export { Navbar }