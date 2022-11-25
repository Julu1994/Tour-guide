import Card from "../../Components/Card";
import Hero from "../../Components/Hero";
import bgVideo from "../../Assets/Videos/milkyway.mp4";

const Home = () => {
    return (
        <div>
            <Hero
                video={bgVideo}
                title={"Life is short and the world is wide."}
            />
            <Card />
        </div>
    );
};

export default Home;
