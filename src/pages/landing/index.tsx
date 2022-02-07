import React from "react";
import { Searchbar } from '../../components/Searchbar';

import landingImage from '../../assets/Illustration.svg';

import './styles.css';

const Landing = () => {
    return(
        <>
            <img className="app__landing-image" src={landingImage}/>
            <div className="app__landing-textBox">
                <h1>
                    Ready for <br/>
                    Trying a new <br/>
                    recipe?
                </h1>
                <div></div>
            </div>
            <Searchbar></Searchbar>
        </>
    );
}

export { Landing }