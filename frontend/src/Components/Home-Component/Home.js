import React, { Component } from "react";
import { PropTypes } from "prop-types";
import HomeCSS from "./Home.module.css";

class Home extends Component {

    render() {
        return (
            /* Logo, tilte and welcome */
            <div className ={HomeCSS.body}>    
                <header className={HomeCSS.viewport}>
                    <div className={HomeCSS.header}>
                        <div className={HomeCSS.header_title}>
                            <h1>COSITAS</h1>
                            <h2>HACEMOS COSITAS</h2>
                        </div>
                        <div>
                            <img src="https://i.ytimg.com/vi/9FlBtZiMCAw/hqdefault.jpg" alt="Cositas"></img>
                        </div>   
                    </div>
                </header>
            </div>    
        );
    }
}

export default Home;