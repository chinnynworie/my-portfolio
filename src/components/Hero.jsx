// src/components/Hero.jsx
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <p className="greeting">Hi there, I'm Chinenye.👋</p>
                <h1 className="hero-name">{personalInfo.name}</h1>
                <p className="hero-tagline">{personalInfo.tagline}</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">See My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;