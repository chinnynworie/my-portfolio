// src/components/Navbar.jsx
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

const links = ["About", "Skills", "Projects", "Contact"];

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#" className="logo">{personalInfo.name}</a>

            <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            >
                {menuOpen ? "X" : "≡"}
            </button>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                {links.map((link) => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    </li>
                ))}
                <li>
                    <a href="/resume.pdf" className="resume-btn" download>
                        Download Resume
                    </a>
                </li>        
            </ul>
        </nav>
    );
}

export default Navbar;