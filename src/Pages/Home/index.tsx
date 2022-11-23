import React from "react";
import Card from "../../Components/Card";
import Hero from "../../Components/Hero";
import bgVideo from "../../Assets/Videos/milkyway.mp4";

const Home = () => {
    return (
        <div>
            <Hero video={bgVideo} />
            <Card />
        </div>
    );
};

export default Home;
