import SectionHeader from '../common/SectionHeader';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "TechNova Solutions",
            role: "Senior Full-Stack Engineer",
            period: "2022 - Present",
            description: [
                "Architected and maintained microservices-based SaaS platforms serving 100k+ active users.",
                "Optimized frontend performance, reducing initial load time by 40% using Next.js and code splitting.",
                "Mentored a team of 5 junior developers and implemented CI/CD pipelines."
            ]
        },
        {
            company: "Digital Stream Corp",
            role: "Software Developer",
            period: "2020 - 2022",
            description: [
                "Developed complex data visualization dashboards for enterprise clients using React and D3.js.",
                "Built scalable RESTful APIs with Node.js and PostgreSQL with complex data migrations.",
                "Collaborated with UI/UX designers to implement pixel-perfect responsive designs."
            ]
        },
        {
            company: "Core Systems",
            role: "Junior Web Developer",
            period: "2018 - 2020",
            description: [
                "Maintained and updated corporate websites using HTML, CSS, and Vanilla JavaScript.",
                "Assisted in the development of custom CMS solutions and plugin architectures.",
                "Conducted unit testing and bug fixing across multiple browser environments."
            ]
        }
    ];

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <SectionHeader
                    count={4}
                    subtitle="Background"
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
