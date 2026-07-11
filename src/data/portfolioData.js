// src/data/portfolioData.js
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
    FaServer,
} from "react-icons/fa";
import {
    MdSupportAgent,
    MdOutlineTroubleshoot,
    MdDescription,
    MdForum,
    MdDevices,
} from "react-icons/md";

export const personalInfo ={
    name: "Chinenye Lizzy Nworie",
    title: "Frontend Developer | Customer Experience Professional",
    tagline: "Responsive, user-friendly web apps - built with 5+ years of customer success experience behind every decision.",
    bio:  [
    "For over five years, I've handled 50 to 80+ customer conversations a day — troubleshooting, documenting, resolving things fast enough that people didn't have to ask twice. I kept a 95%+ first-contact resolution rate and consistent 90%+ QA scores, not because I'm naturally patient (some days I really wasn't), but because I got obsessed with figuring out the actual root of a problem instead of just patching the symptom.",
    "That obsession is what pulled me into code. I wanted to know what was happening on the other side of the screen — why a page broke, why a form didn't submit, why \"have you tried refreshing\" actually works sometimes. So I started learning HTML, CSS, JavaScript, and now React, and it scratched the same itch customer service did: something's broken, figure out why, fix it, move on to the next thing.",
    "I'm not coming into this cold. Years of documenting issues across CRM systems like Zendesk and Gorgias taught me to be precise, to write things down clearly, and to think about the person on the other end of whatever I'm building — because I was that person's first point of contact for years. I know what \"this doesn't make sense\" looks like on a user's face, even through a screen.",
    "I'm early in this journey and I own that. But I debug the same way I used to troubleshoot tickets — methodically, without panic, until it actually works. That's not going to change just because the tools did.",
  ],
    email: "chinnynworie@gmail.com",
    github: "https://github.com/chinnynworie",
    linkedin: "https://linkedin.com/in/chinenye-nworie",
};

export const skills = [
    { name: "HTML5", level: 85, icon: FaHtml5, category: "technical" },
    { name: "CSS3", level: 80, icon: FaCss3Alt, category: "technical"},
    { name: "JavaScript", level: 70, icon: FaJs, category: "technical" },
    { name: "React", level: 65, icon: FaReact, category: "technical" },
    { name: "Git and GitHub", level: 75, icon: FaGithub, category: "technical" },
    { name: "REST APIs", level: 70, icon: FaServer, category: "technical" },
    { name: "Responsive Design", level: 80, icon: MdDevices, category: "technical" },
    { name: "Customer Success", level: 95, icon: MdSupportAgent, category: "professional" },
    { name: "Root-Cause Troubleshooting", level: 90, icon: MdOutlineTroubleshoot, category: "professional" },
    { name: "Documentation", level: 90, icon: MdDescription, category: "professional" },
    { name: "Communication", level: 95, icon: MdForum, category: "professional" },
];

export const projects = [
    {
        id: 1,
        title: "Personal Developer Portfolio",
        description: "My first full build from scratch - a responsive personal site combining HTML, CSS, and vanilla JavaScript. Features a gradient hero, dark/light mode toggle with localStorage persistence, a mobile hamburger menu, live API integrations (random quotes and Bible verses), and a validated contact form. Built to prove I could take a design from nothing to fully interactive without a framework.",
        tags: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Git"],
        githubUrl: "https://github.com/chinnynworie/chinenye-portfolio",
        liveUrl: "https://my-portfolio-pi-steel-hppvx9hw0c.vercel.app",
        image: "/projects/portfolio.png",
    },
    {
        id:2,
        title: "React Component Library & Interactive UI",
        description: "A React application built to demonstrate core frontend concepts: reusable components, props-driven customization, state management, dynamic list rendering, and live API data fectching. Includes an interactive Pokédex card that fetches real-time data from PokeAPI using useEffect, plus a fully controlled multi-field contact form built with a single shared state object.",
        tags: ["React", "JavaScript (ES6+)", "REST APIs", "Vite", "Git"],
        githubUrl: "https://github.com/chinnynworie/react-skills-explorer",
        liveUrl: "https://react-skills-explorer.vercel.app",
        image: "/projects/skills-explorer.png",
    },
];