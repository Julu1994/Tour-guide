import React from "react";
import "./index.scss";
import { FaArtstation } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "../Common/button";
const Navbar = () => {
    const a = () => {
        console.log("hi");
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <FaArtstation />
                </div>
                <div className="navbar-menu">
                    <GiHamburgerMenu />
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/events">Contacts</Link>
                    </li>
                    <Button
                        onclick={a}
                        size={"h"}
                        style={""}
                        type={""}
                        children={"Signup"}
                        path={"/"}
                    />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
