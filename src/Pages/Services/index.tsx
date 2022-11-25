import React from "react";
import Card from "../../Components/Card";
import Hero from "../../Components/Hero";
import bgVideo from "../../Assets/Videos/bgVideo2.mp4";

const Services = () => {
    return (
        <div>
            <Hero
                video={bgVideo}
                title={"Internet and Service that is our motto."}
            />
            <Card />
        </div>
    );
};

export default Services;
