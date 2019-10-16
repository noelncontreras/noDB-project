import React from "react";
import "./Footerbar.css";
import InputOutput from "./InputOutput";

export default function Footerbar() {
    const footerText = <InputOutput text="Created by Noel Contreras" />
    return (
        <footer className= "footer-container">
            <div>
                <a style={{textDecoration: "none"}} href="https://github.com/noelncontreras/noDB-project"><h1 id="zoom-fade">{footerText}</h1></a>
            </div>
        </footer>
    )
}