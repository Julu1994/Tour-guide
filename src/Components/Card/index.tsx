import React from "react";
import img1 from "../../Assets/Images/place1.webp";
import img2 from "../../Assets/Images/place2.webp";
import img3 from "../../Assets/Images/place3.webp";
import img6 from "../../Assets/Images/place6.webp";
import img5 from "../../Assets/Images/place5.webp";
import CardModel from "./Component/CardModel";
import "./index.scss";
const Card = () => {
    const STYLE = {
        clss1: "item-one",
        clss2: "item-two",
        clss3: "item-three",
        clss4: "item-four",
        clss5: "item-five",
        class6: "item",
    };
    return (
        <div className="card">
            <h1>Best holidy destination for 2023</h1>
            <div className="card-container">
                <div className="card-wrapper">
                    <ul className="card-list">
                        <CardModel
                            url={img1}
                            path="/"
                            text="Explore the beauty of Amalfi Coast, Italy"
                            style={STYLE.clss1}
                        />
                        <CardModel
                            url={img5}
                            path="/"
                            text="Explore the beauty of Maldives"
                            style={STYLE.clss2}
                        />
                        <CardModel
                            url={img3}
                            path="/"
                            text="Explore the beauty of Santorini, Greece"
                            style={STYLE.clss3}
                        />
                        <CardModel
                            url={img6}
                            path="/"
                            text="Explore the beauty of Yosemite, California"
                            style={STYLE.clss4}
                        />
                        <CardModel
                            url={img2}
                            path="/"
                            text="Explore the beauty of San Francisco"
                            style={STYLE.clss5}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
