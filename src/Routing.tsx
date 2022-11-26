import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Contacts from "./Pages/Contacts";
import Signup from "./Pages/Signup";

const Routing = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default Routing;
