import React from "react";
import "./input.scss";
type props = {
    cls?: string;
    placeHolder?: string;
    typ?: string;
};
const Input = ({ cls, placeHolder, typ }: props) => {
    return (
        <>
            <input
                placeholder={placeHolder}
                className={`input ${cls}`}
                type={typ ? typ : "text"}
            />
        </>
    );
};

export default Input;
