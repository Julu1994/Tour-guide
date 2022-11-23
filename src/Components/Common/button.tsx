import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

type props = {
    style: string;
    size: any;
    children: string;
    path: string;
    classBtn?: string;
};

const btnStyle: string[] = ["btn-default", "btn-outline"];
const btnSize: string[] = ["midium", "large", "extra"];

export const Button = ({ style, size, children, path, classBtn }: props) => {
    const createBtnStyle = btnStyle.includes(style) ? style : btnStyle[0];
    const createBtnSize = btnSize.includes(size) ? size : btnSize[0];

    return (
        <Link className={`${classBtn}`} to={path}>
            <button className={`${createBtnStyle} ${createBtnSize}`}>
                {children}
            </button>
        </Link>
    );
};
