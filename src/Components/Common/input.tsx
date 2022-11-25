import React from "react";
import "./input.scss";
type props = {
    cls?: string;
    placeHolder?: string;
};
const Input = ({ cls, placeHolder }: props) => {
    return (
        <>
            <input
                placeholder={placeHolder}
                className={`input ${cls}`}
                type="text"
            />
        </>
    );
};

export default Input;
