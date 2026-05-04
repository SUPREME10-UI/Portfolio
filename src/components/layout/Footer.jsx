import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <span className="mono">&lt;Kobby /&gt;</span>
                    </div>
                    <div className="footer-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                    </div>
                    <button className="back-to-top" onClick={scrollToTop}>
                        <ArrowUp size={20} />
                    </button>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Kobby. All rights reserved.</p>
                    <div className="footer-links mono">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
