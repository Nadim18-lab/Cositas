import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Navbar extends Component {

    render() {
        return (
            //Nav bar
            <div class="viewport">
                <nav>
                    <ul class= "nav">
                        <div class= "nav_div">
                            <li><a href = "/#">Home</a></li>
                        </div>
                    </ul>
                    <ul class="nav">
                        <div class="nav_div">
                            <li><a href = "/#">Servicios</a></li>
                        </div>
                    </ul>
                    <ul class="nav">
                        <div class="nav_div">
                            <li><a href = "/#">Contactanos</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;