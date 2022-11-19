import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

interface props {
    style: string;
    size: string;
    children: string;
    onclick: any;
    path: string;
    type: any;
}

const btnStyle: string[] = ["btn-default", "btn-outline"];
const btnSize: string[] = ["midium", "large"];

export const Button: React.FC<props> = (props) => {
    const createBtnStyle = btnStyle.includes(props.style)
        ? props.style
        : btnStyle[0];
    const createBtnSize = btnStyle.includes(props.size)
        ? props.size
        : btnSize[0];
    return (
        <Link to={props.path}>
            <button
                className={`${createBtnStyle} ${createBtnSize}`}
                onClick={props.onclick}
                type={props.type}>
                {props.children}
            </button>
        </Link>
    );
};
