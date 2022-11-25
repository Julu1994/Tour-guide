import React from "react";
import "./index.scss";
import { Button } from "../Common/button";
import Input from "../Common/input";
import Links from "./Component/link";

const Footer = () => {
    return (
        <div className="footer-container">
            <h3 className="footer-header">
                Subscribe with your email to get updated with exciting travel
                info
            </h3>
            <div className="footer-subscribe">
                <Input cls="footer-input" placeHolder="Email" />
                <Button
                    classBtn="btnHero"
                    path={"/"}
                    size={"extra"}
                    cls="btn-outline">
                    Subscribe
                </Button>
            </div>
            <ul className="link-section-1">
                <Links
                    header="Company"
                    text1="About Us"
                    text2="Location"
                    text3="Partners"
                    text4="FAQ"
                    text5="Contacts"
                />
            </ul>

            <ul className="link-section-2">
                <Links
                    header="Services"
                    text1="Home"
                    text2="Services"
                    text3="Contacts"
                    text4="Signup"
                    text5="Login"
                />
            </ul>
            <ul className="link-section-3">
                <Links
                    header="Policies"
                    text1="Payment"
                    text2="Membership"
                    text3="Cookies"
                    text4="Privacy"
                    text5="Terms"
                />
            </ul>
            <ul className="link-section-4">
                <Links
                    header="Links"
                    text1="Travel guide"
                    text2="Top Destinitions"
                    text3="Booking Info"
                    text4="Travel Blog"
                    text5="Life &amp; Arts"
                />
            </ul>
        </div>
    );
};

export default Footer;
