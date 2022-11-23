import React from "react";
import "./index.scss";
import { FaArtstation } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const handleClose = () => {
        setToggle(false);
    };
    const screenSize = () => {
        return window.innerWidth > 960;
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaArtstation size={30} />
                <h4 className="navbar-text">Travel Wizard</h4>
            </div>
            <ul className={!toggle ? "navbar-list" : "navbar-list-mobile"}>
                <li className="navbar-item">
                    <Link
                        onClick={handleClose}
                        className="navbar-links "
                        to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        onClick={handleClose}
                        className="navbar-links"
                        to="/services">
                        Services
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        onClick={handleClose}
                        className="navbar-links"
                        to="/contacts">
                        Contacts
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link
                        onClick={handleClose}
                        className="navbar-links"
                        to="/signup">
                        Signup
                    </Link>
                </li>
            </ul>
            {!screenSize() && (
                <div className="navbar-icon" onClick={handleToggle}>
                    {toggle ? (
                        <TiTimes size={45} />
                    ) : (
                        <GiHamburgerMenu size={30} />
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
