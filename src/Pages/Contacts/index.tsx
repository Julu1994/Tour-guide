import React from "react";
import Card from "../../Components/Card";
import Hero from "../../Components/Hero";
import bgVideo from "../../Assets/Videos/bgVideo3.mp4";

const Contacts = () => {
    return (
        <div>
            <Hero video={bgVideo} />
            <Card />
        </div>
    );
};

export default Contacts;
