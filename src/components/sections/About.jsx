import SectionHeader from '../common/SectionHeader';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <SectionHeader
                    count={1}
                    subtitle="Biography"
                    title="About Me"
                />

                <div className="about-grid">
                    <div className="about-content">
                        <p className="large-text">
                            I am a passionate <span className="accent">Full-Stack Developer</span> with over 3 years of experience
                            crafting digital solutions that bridge the gap between complex backend systems and
                            intuitive user interfaces.
                        </p>
                        <p>
                            My journey began with a curiosity for how things work, which naturally led me to the
                            world of software engineering. I thrive on solving complex problems and turning
                            abstract ideas into functional reality.
                        </p>
                        <p>
                            When I am not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing my knowledge through technical writing and
                            mentorship. My philosophy is simple: build things that matter, and never stop learning.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">11+</span>
                                <span className="stat-label mono">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label mono">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label mono">Tech Stack Tools</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="image-wrapper">
                            <div className="image-placeholder">
                                <div className="image-overlay"></div>
                                {/* Image will be here */}
                                <span className="mono">DEV_IMG.JPG</span>
                            </div>
                            <div className="image-border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
