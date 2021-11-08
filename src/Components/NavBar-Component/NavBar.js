import React, { Component } from "react";
import { PropTypes } from "prop-types";
import './NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div>
                <div>
                    <ul className = "nav">
                        <div className = "nav_div">
                            <li><a href = "/#">Home</a></li>
                        </div>
                    </ul>
                    <ul className = "nav">
                        <div className = "nav_div">
                            <li><a href = "/#">About us</a></li>
                        </div>
                    </ul>
                    <ul className = "nav">
                        <div className = "nav_div">
                            <li><a href = "/#">Contact us</a></li>
                        </div>
                    </ul>
                </div>
                <div className = "header">
                    <div className = "header_title">
                        <h1>TITLE</h1>
                    </div>
                    <div>

                    </div>   
                </div>
            </div>
        );
    }
}

export default NavBar;