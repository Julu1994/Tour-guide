import React from "react";
import "./link.scss";

type props = {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
};

const Links = ({ text1, text2, text3, text4, text5 }: props) => {
    return (
        <>
            <li className="link">{text1}</li>
            <li className="link">{text2}</li>
            <li className="link">{text3}</li>
            <li className="link">{text4}</li>
            <li className="link">{text5}</li>
        </>
    );
};

export default Links;
