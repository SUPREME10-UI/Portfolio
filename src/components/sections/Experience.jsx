import SectionHeader from '../common/SectionHeader';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Freelance — Client Projects",
            role: "Full-Stack Developer",
            period: "2026 - Present",
            description: [
                "Built and delivered full-stack web applications for real clients, including a body-shapers e-commerce platform (Shapers) and an artisan-discovery marketplace (Oga) — both deployed live on Vercel.",
                "Developed an errand-runner platform (Errands) with real-time task matching, using React and modern JavaScript.",
                "Maintained clean, component-driven codebases with TypeScript for type safety and long-term scalability."
            ]
        },
        {
            company: "National Service — Ghana NSS",
            role: "Software Developer (National Service Personnel)",
            period: "Jan 2026 - Dec 2026",
            description: [
                "Designed and deployed a digital attendance management system (NSS-ATTENDANCE) used to track and manage personnel records — live at nss-attendance-tau.vercel.app.",
                "Replaced a manual paper-based attendance process with an automated web solution, reducing reporting time significantly.",
                "Built with React and JavaScript, featuring role-based dashboards, export functionality, and real-time updates."
            ]
        },
        {
            company: "Self-Directed Projects",
            role: "Full-Stack Developer",
            period: "2025 - Present",
            description: [
                "Continuously building personal and exploratory projects across JavaScript, TypeScript, and CSS — including a BMS (Business Management System) and a rehabilitation platform.",
                "Established a strong open-source presence with 11+ public repositories on GitHub (github.com/SUPREME10-UI).",
                "Practised rapid prototyping, UI/UX design, and deployment workflows using Vite, React, Next.js, and Vercel."
            ]
        }
    ];

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <SectionHeader
                    title="Work Experience"
                />

                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="company-name">{exp.company}</h3>
                                    <span className="period mono">{exp.period}</span>
                                </div>
                                <h4 className="role-title mono secondary-text">{exp.role}</h4>
                                <ul className="exp-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
