import React from "react";
import "./manuIcon.scss";

const ManuIcon = () => {
    const [cls, setCls] = React.useState(false);
    const clsHandler = () => {
        setCls(!cls);
    };
    return (
        <div className={cls ? "manue toggle" : "manue"} onClick={clsHandler}>
            <div className="manue-btn"> </div>
        </div>
    );
};

export default ManuIcon;
