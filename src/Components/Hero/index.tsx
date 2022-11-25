import React from "react";
import "./index.scss";
import { Button } from "../Common/button";

type props = {
    video: string;
    title?: string;
};

const Hero = ({ video, title }: props) => {
    const SIZE = window.innerWidth > 960 ? "large" : "midium";

    return (
        <div className="hero">
            <video className="hero-video" src={video} autoPlay loop muted />
            <h2 className="hero-title">{title}</h2>
            <Button classBtn="btnHero" path={"/"} size={SIZE} cls="btn-default">
                Explore
            </Button>
            <Button classBtn="btnHero" path={"/"} size={SIZE} cls="btn-outline">
                SignUp
            </Button>
        </div>
    );
};

export default Hero;
