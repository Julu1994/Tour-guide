import React from "react";
import img1 from "../../Assets/Images/img.webp";
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
                            text="Explore the beauty of Argentine Patagonia"
                            style={STYLE.clss1}
                        />
                        <CardModel
                            url={img1}
                            path="/"
                            text="Explore the beauty of Argentine Patagonia"
                            style={STYLE.clss2}
                        />
                        <CardModel
                            url={img1}
                            path="/"
                            text="Explore the beauty of Argentine Patagonia"
                            style={STYLE.clss3}
                        />
                        <CardModel
                            url={img1}
                            path="/"
                            text="Explore the beauty of Argentine Patagonia"
                            style={STYLE.clss4}
                        />
                        <CardModel
                            url={img1}
                            path="/"
                            text="Explore the beauty of Argentine Patagonia"
                            style={STYLE.clss5}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
