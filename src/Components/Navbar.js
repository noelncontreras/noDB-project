import React from 'react';
import "./Navbar.css"

function Navbar () {
    return (
        <div>
            <header className = "nav-container">
                <div className = "logo">
                    <img src="https://img.icons8.com/ios-filled/50/000000/ds3-tool.png" alt="Game Watch logo" />
                </div>
                <div className = "website-title">
                <h1>Game Watch</h1>
                </div>
            </header>
        </div>
    )
}
export default Navbar;