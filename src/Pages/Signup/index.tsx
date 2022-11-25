import bgVideo from "../../Assets/Videos/bgVideo4.mp4";
import Input from "../../Components/Common/input";
import "./index.scss";

const Signup = () => {
    return (
        <div className="signup">
            <video className="signup-video" src={bgVideo} autoPlay loop muted />
            <form className="signup-form">
                <h4 className="signup-title">Signup Form</h4>
                <Input cls="signup-name" placeHolder="Name" />
                <Input cls="Signup-email" placeHolder="Email" />
                <Input
                    cls="signup-password"
                    placeHolder="Password"
                    typ="password"
                />
                <button className="signup-btn">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
