import React from "react";
import { Link } from "react-router-dom";
import "./CardModel.scss";

type props = {
    path: string;
    url: string;
    text: string;
    style: string;
};

const CardModel = ({ path, url, text, style }: props) => {
    const createClass: string = style ? style : "item";
    console.log(createClass);

    return (
        <li className={`card-item ${createClass}`}>
            <Link className="card-link" to={path}>
                <figure className="card-picWraper">
                    <img className="card-pic" alt="Blog" src={url} />
                </figure>
                <div className="card-textWraper">
                    <h5 className="card-text">{text}</h5>
                </div>
            </Link>
        </li>
    );
};

export default CardModel;
