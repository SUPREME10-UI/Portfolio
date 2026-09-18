import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Initialize from localStorage or default to dark
        const saved = typeof window !== 'undefined' && localStorage.getItem('theme');
        return saved ? saved : 'dark';
    });

    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollPosition = window.scrollY + 180;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply theme on mount and when it changes
        document.documentElement.setAttribute('data-theme', theme);
        // Persist to localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <a href="#" className="mono">
                        <span className="accent">&lt;</span>
                        Kobby
                        <span className="accent"> /&gt;</span>
                    </a>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => {
                        const targetId = link.href.replace('#', '');
                        const isActive = activeSection === targetId;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={isActive ? 'active' : ''}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <div className="nav-socials">
                        <a href="https://github.com/SUPREME10-UI" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a>
                    </div>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
