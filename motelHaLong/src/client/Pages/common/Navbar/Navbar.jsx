import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <a href="/" className="logo">Logo</a>
            </div>
            <nav className="header-menu">
                <a href="/">Home</a>
                <a href="/">Booking</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
                <a href="/about">About</a>
            </nav>
            <div className="header-info">
                <a href="/notifications" className="notification">icon</a>
                <a href="/profile" className="account">👤 Account</a>
            </div>
        </header>
    );
};

export default Navbar;
