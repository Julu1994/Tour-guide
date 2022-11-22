import React from "react";
import "./index.scss";
import { Button } from "../Common/button";
import Input from "../Common/input";
import Links from "./Component/link";

const Footer = () => {
    const STYLE = {
        default: "btn-default",
        outline: "btn-outline",
    };
    const SIZE = window.innerWidth > 960 ? "large" : "midium";
    return (
        <div className="footer-container">
            <div className="footer-subscribe">
                <h3>
                    Subscribe with your email to get updated with exciting
                    travel info
                </h3>
                <Input />
                <Button
                    classBtn="btnHero"
                    path={"/"}
                    size={SIZE}
                    style={STYLE.default}>
                    Subscribe
                </Button>
            </div>
            <Links
                text1="About Us"
                text2="Location"
                text3="Partners"
                text4="FAQ"
                text5="Contacts"
            />
            <Links
                text1="About Us"
                text2="Location"
                text3="Partners"
                text4="FAQ"
                text5="Contacts"
            />
            <Links
                text1="About Us"
                text2="Location"
                text3="Partners"
                text4="FAQ"
                text5="Contacts"
            />
            <Links
                text1="About Us"
                text2="Location"
                text3="Partners"
                text4="FAQ"
                text5="Contacts"
            />
        </div>
    );
};

export default Footer;
