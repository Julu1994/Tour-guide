import Hero from "../../Components/Hero";
import bgVideo from "../../Assets/Videos/bgVideo3.mp4";
import Contact from "../../Components/Contact";

const Contacts = () => {
    return (
        <div>
            <Hero video={bgVideo} title={"Scroll down to drop us a line"} />
            <Contact />
        </div>
    );
};

export default Contacts;
