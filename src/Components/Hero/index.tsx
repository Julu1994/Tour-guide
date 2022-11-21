import React from "react";
import "./index.scss";
import bgVideo from "../../Assets/Videos/milkyway.mp4";
import { Button } from "../Common/button";
const Hero = () => {
    const STYLE = {
        default: "btn-default",
        outline: "btn-outline",
    };
    const SIZE = window.innerWidth > 960 ? "large" : "midium";

    return (
        <div className="hero">
            <video className="hero-video" src={bgVideo} autoPlay loop muted />
            <h2 className="hero-title">Life is short and the world is wide.</h2>
            <Button
                classBtn="btnHero"
                path={"/"}
                size={SIZE}
                style={STYLE.default}>
                Explore
            </Button>
            <Button
                classBtn="btnHero"
                path={"/"}
                size={SIZE}
                style={STYLE.outline}>
                SignUp
            </Button>
        </div>
    );
};

export default Hero;
