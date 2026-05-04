import { useState, useEffect } from 'react';
import Button from '../common/Button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full-Stack Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section className="hero" id="home">
            <div className="hero-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="terminal-line mono">
                        <span className="accent-text">➜</span>
                        <span className="secondary-text"> ~ /whoami</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Kobby</span>
                    </h1>

                    <div className="hero-role-container">
                        <h2 className="hero-role mono">
                            {text}<span className="cursor">|</span>
                        </h2>
                    </div>

                    <p className="hero-description">
                        Building scalable, high-performance web applications with a focus on clean
                        architecture and exceptional user experiences. Problem solver by day,
                        open-source enthusiast by night.
                    </p>

                    <div className="hero-actions">
                        <Button variant="primary" size="lg" className="hero-cta">
                            View Projects <ChevronRight size={20} />
                        </Button>
                        <Button variant="secondary" size="lg" className="hero-cta">
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="window-title mono">portfolio.js</div>
                        </div>
                        <div className="window-content mono">
                            <div className="code-line"><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}</div>
                            <div className="code-line indent"><span className="code-prop">name</span>: <span className="code-string">'Kobby'</span>,</div>
                            <div className="code-line indent"><span className="code-prop">role</span>: <span className="code-string">'Full-Stack'</span>,</div>
                            <div className="code-line indent"><span className="code-prop">traits</span>: [<span className="code-string">'Innovative'</span>, <span className="code-string">'Scalable'</span>],</div>
                            <div className="code-line indent"><span className="code-prop">motto</span>: <span className="code-string">'Code for Impact'</span></div>
                            <div className="code-line">{'}'};</div>
                            <div className="code-line"></div>
                            <div className="code-line"><span className="code-keyword">while</span> (<span className="code-var">learning</span>) {'{'}</div>
                            <div className="code-line indent"><span className="code-var">developer</span>.<span className="code-func">evolve</span>();</div>
                            <div className="code-line">{'}'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p className="mono">scroll</p>
            </div>
        </section>
    );
};

export default Hero;
