import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "CloudScale SaaS Platform",
            description: "A high-performance cloud management dashboard with real-time analytics and automated scaling triggers.",
            tech: ["React", "Node.js", "AWS", "Kubernetes"],
            github: "https://github.com",
            live: "https://example.com",
            image: "https://via.placeholder.com/600x400/121212/00f3ff?text=CloudScale"
        },
        {
            title: "NeuroLink AI Interface",
            description: "Next-gen neural network visualization tool for debugging complex deep learning models in 3D space.",
            tech: ["Three.js", "Python", "TensorFlow", "FastAPI"],
            github: "https://github.com",
            live: "https://example.com",
            image: "https://via.placeholder.com/600x400/121212/bf00ff?text=NeuroLink"
        },
        {
            title: "CryptoFlow DEX",
            description: "Decentralized exchange aggregator with smart routing and low-slippage execution across multiple chains.",
            tech: ["Solidity", "Ether.js", "React", "GraphQL"],
            github: "https://github.com",
            live: "https://example.com",
            image: "https://via.placeholder.com/600x400/121212/00f3ff?text=CryptoFlow"
        }
    ];

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <SectionHeader
                    count={3}
                    subtitle="Portfolio"
                    title="Featured Projects"
                />

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech mono">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-footer">
                                    <Button variant="outline" size="sm" className="view-details">
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="more-projects">
                    <Button variant="secondary" size="lg">
                        View All Archive
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
