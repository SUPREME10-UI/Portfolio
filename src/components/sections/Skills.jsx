import SectionHeader from '../common/SectionHeader';
import './Skills.css';
import {
    Code2, Database, Layout, Server,
    Terminal, Cpu, Globe, Layers
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout className="skill-icon" />,
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
        },
        {
            title: "Backend",
            icon: <Server className="skill-icon" />,
            skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"]
        },
        {
            title: "Tools & Core",
            icon: <Cpu className="skill-icon" />,
            skills: ["Git", "GraphQL", "REST APIs", "Unit Testing", "System Design"]
        }
    ];

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <SectionHeader
                    title="What I Work With"
                />

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div className="skill-category" key={idx}>
                            <div className="category-header">
                                {category.icon}
                                <h3 className="mono">{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="skill-item">
                                        <span className="dot"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="workflow-section">
                    <h3 className="mono center">Development Philosophy</h3>
                    <div className="workflow-grid">
                        <div className="workflow-item">
                            <Globe size={32} />
                            <h4>User-Centric</h4>
                            <p>Designing with the end-user in mind for maximum accessibility.</p>
                        </div>
                        <div className="workflow-item">
                            <Code2 size={32} />
                            <h4>Clean Code</h4>
                            <p>Writing maintainable, scalable and well-documented codebases.</p>
                        </div>
                        <div className="workflow-item">
                            <Layers size={32} />
                            <h4>Architecture</h4>
                            <p>Thinking in systems and patterns for long-term sustainability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
