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
    //const SIZE = window.innerWidth > 960 ? "large" : "midium";
    return (
        <div className="footer-container">
            <h3 className="footer-header">
                Subscribe with your email to get updated with exciting travel
                info
            </h3>
            <div className="footer-subscribe">
                <Input />
                <Button
                    classBtn="btnHero"
                    path={"/"}
                    size={"midium"}
                    style={STYLE.outline}>
                    Subscribe
                </Button>
            </div>
            <ul className="link-section-1">
                <Links
                    text1="About Us"
                    text2="Location"
                    text3="Partners"
                    text4="FAQ"
                    text5="Contacts"
                />
            </ul>

            <ul className="link-section-2">
                <Links
                    text1="About Us"
                    text2="Location"
                    text3="Partners"
                    text4="FAQ"
                    text5="Contacts"
                />
            </ul>
            <ul className="link-section-3">
                <Links
                    text1="About Us"
                    text2="Location"
                    text3="Partners"
                    text4="FAQ"
                    text5="Contacts"
                />
            </ul>
            <ul className="link-section-4">
                <Links
                    text1="About Us"
                    text2="Location"
                    text3="Partners"
                    text4="FAQ"
                    text5="Contacts"
                />
            </ul>
        </div>
    );
};

export default Footer;
