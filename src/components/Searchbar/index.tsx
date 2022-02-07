import React from "react";
import { FaSearch } from "react-icons/fa"

import './styles.css';

const Searchbar = () => {
    return(
        <div className="app__searchbar-container">
            <input placeholder="Search healthy recipes..."></input>

            <div className="app__searchbar-button-container">
                <FaSearch className="app__searchbar-button"  fontSize={16}></FaSearch>
            </div>
        </div>
    );
}

export { Searchbar }