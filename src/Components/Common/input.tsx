import React from "react";
import "./input.scss";
type props = {
    style?: string;
};
const Input = ({ style }: props) => {
    return (
        <>
            <input
                className={`input ${style}`}
                type="text"
                value="Your Email"
            />
        </>
    );
};

export default Input;
