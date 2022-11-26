import React from "react";
import "./index.scss";

const Loader = () => {
    return (
        <div className="container">
            <h1>Welcome To Travel Wizard</h1>
            <div className="wrapper">
                <div className="load-container">
                    <div className="linespinner"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
