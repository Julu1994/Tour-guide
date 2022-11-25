import React from "react";
import Input from "../Common/input";
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-wrapper">
                    <form className="contact-form">
                        <h4 className="contact-one">Contact us</h4>
                        <Input cls="contact-two" placeHolder="Name" />
                        <Input cls="contact-three" placeHolder="Email" />

                        <Input cls="contact-four" placeHolder="Phone" />
                        <textarea className="contact-five">
                            Your message
                        </textarea>
                        <button className="contact-six">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
