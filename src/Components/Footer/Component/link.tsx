import React from "react";

type props = {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
};

const Links = ({ text1, text2, text3, text4, text5 }: props) => {
    return (
        <ul>
            <li>{text1}</li>
            <li>{text2}</li>
            <li>{text3}</li>
            <li>{text4}</li>
            <li>{text5}</li>
        </ul>
    );
};

export default Links;
