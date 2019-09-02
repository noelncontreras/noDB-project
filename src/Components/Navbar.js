import React from 'react';
import InputOutput from "./InputOutput";
import "./Navbar.css"

export default function Navbar() {
    const title = <InputOutput text="Game Watch" />
    return (
        <div>
            <header className = "nav-container">
                <div className = "logo">
                    <img src="https://img.icons8.com/ios-filled/50/000000/ds3-tool.png" alt="Game Watch logo" />
                </div>
                <div className = "website-title">
                <h1>{title}</h1>
                </div>
            </header>
        </div>
    )
}