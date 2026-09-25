import { useState, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { Github, ExternalLink, Sparkles, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsSectionRef = useRef(null);
    const itemsPerPage = 3;

    const projects = [
        {
            title: "Oga - Artisans Marketplace",
            description: "A full-featured web platform connecting households and enterprises with vetted local artisans, craftsmen, and technicians with booking and quote workflows.",
            tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
            category: "fullstack",
            github: "https://github.com/SUPREME10-UI/oga",
            live: "https://oga-lilac.vercel.app",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
            status: "Live Demo",
            featured: true,
        },
        {
            title: "Errands - Logistics & Delivery",
            description: "On-demand errands and package delivery service web app connecting users with swift neighborhood couriers for hassle-free parcel dispatching.",
            tech: ["JavaScript", "React", "Node.js", "Vercel"],
            category: "fullstack",
            github: "https://github.com/SUPREME10-UI/Errands",
            live: "https://errands-phi.vercel.app",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            status: "Live Demo",
            featured: true,
        },
        {
            title: "NSS Attendance System",
            description: "Digital reporting and automated monthly attendance verification platform for National Service Scheme personnel to streamline verification.",
            tech: ["React", "JavaScript", "REST APIs", "Vercel"],
            category: "frontend",
            github: "https://github.com/SUPREME10-UI/NSS-ATTENDANCE",
            live: "https://nss-attendance-tau.vercel.app",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            status: "Live Demo",
            featured: true,
        },
        {
            title: "UPSA LMS AI Chatbot",
            description: "Conversational customer support assistant built for university learning management systems to answer student inquiries and resolve tickets 24/7.",
            tech: ["Python", "NLP", "Machine Learning", "FastAPI"],
            category: "ai",
            github: "https://github.com/SUPREME10-UI/Customer-support-chatbot-for-the-UPSA-learning-management-system",
            live: "https://github.com/SUPREME10-UI/Customer-support-chatbot-for-the-UPSA-learning-management-system",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
            status: "AI / ML Model",
            featured: false,
        },
        {
            title: "Shapers - Wellness Client Portal",
            description: "Dedicated client web application for body shaping and fitness brand, offering specialized merchandise showcases, custom styling, and booking.",
            tech: ["React", "JavaScript", "CSS3", "Vite"],
            category: "frontend",
            github: "https://github.com/SUPREME10-UI/Shapers",
            live: "https://github.com/SUPREME10-UI/Shapers",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            status: "Client Web App",
            featured: false,
        },
        {
            title: "BMS - Enterprise Suite",
            description: "Scalable business & facilities management software supporting inventory auditing, employee shift management, and operations telemetry.",
            tech: ["TypeScript", "React", "State Management", "Tailwind"],
            category: "fullstack",
            github: "https://github.com/SUPREME10-UI/BMS",
            live: "https://github.com/SUPREME10-UI/BMS",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            status: "TypeScript App",
            featured: false,
        },
        {
            title: "PhysioRehab - Patient Care Portal",
            description: "Clinical rehabilitation tracking platform providing patients with prescribed recovery exercises, scheduling, and clinician messaging.",
            tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
            category: "fullstack",
            github: "https://github.com/SUPREME10-UI",
            live: "https://github.com/SUPREME10-UI",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            status: "Clinical Web App",
            featured: true,
        },
        {
            title: "DevForge - Portfolio Engine",
            description: "High-performance interactive showcase framework featuring dynamic shader aesthetics, customizable colorways, and responsive layouts.",
            tech: ["React", "WebGL Shaders", "Tailwind CSS", "Vite"],
            category: "frontend",
            github: "https://github.com/SUPREME10-UI",
            live: "https://github.com/SUPREME10-UI",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            status: "Frontend Engine",
            featured: false,
        },
        {
            title: "FinLedger - Ledger & Expense Analyzer",
            description: "Automated cashflow and accounting telemetry dashboard with visual budgeting charts, transaction tagging, and exportable financial reports.",
            tech: ["Python", "FastAPI", "React", "Chart.js"],
            category: "ai",
            github: "https://github.com/SUPREME10-UI",
            live: "https://github.com/SUPREME10-UI",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
            status: "Analytics Tool",
            featured: false,
        }
    ];

    const filterOptions = [
        { label: "All Projects", value: "all" },
        { label: "Full-Stack", value: "fullstack" },
        { label: "Frontend", value: "frontend" },
        { label: "AI & Tools", value: "ai" },
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (filterVal) => {
        setActiveFilter(filterVal);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        
        // Smoothly scroll up to project section header if scrolled past
        if (projectsSectionRef.current) {
            const rect = projectsSectionRef.current.getBoundingClientRect();
            if (rect.top < -50) {
                window.scrollTo({
                    top: window.scrollY + rect.top - 80,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className="section projects" id="projects" ref={projectsSectionRef}>
            <div className="container">
                <SectionHeader
                    title="Featured Projects"
                />

                {/* Filter & Page Info Bar */}
                <div className="projects-controls-header">
                    <div className="projects-filter-bar">
                        {filterOptions.map((filter) => (
                            <button
                                key={filter.value}
                                className={`filter-pill mono ${activeFilter === filter.value ? 'active' : ''}`}
                                onClick={() => handleFilterChange(filter.value)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="projects-meta-info mono">
                        <span className="page-indicator-badge">
                            <Layers size={13} />
                            <span>Page {currentPage} of {totalPages || 1}</span>
                        </span>
                        <span className="total-projects-badge">
                            {filteredProjects.length} Projects
                        </span>
                    </div>
                </div>

                {/* Dynamic Projects Grid with Page Animation Key */}
                <div className="projects-grid" key={`${activeFilter}-${currentPage}`}>
                    {currentProjects.map((project, idx) => (
                        <div className="project-card page-card-animate" key={project.title}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-status-badge">
                                    <span className="status-dot"></span>
                                    <span>{project.status}</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="icon-link"
                                            aria-label={`${project.title} GitHub repository`}
                                        >
                                            <Github size={20} />
                                        </a>
                                        {project.live && (
                                            <a 
                                                href={project.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="icon-link"
                                                aria-label={`${project.title} Live Demo`}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-info">
                                <div className="project-title-row">
                                    <h3 className="project-title">{project.title}</h3>
                                    {project.featured && (
                                        <span className="featured-chip">
                                            <Sparkles size={12} /> Featured
                                        </span>
                                    )}
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech mono">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-footer">
                                    <a
                                        href={project.live || project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-details-btn"
                                    >
                                        <span>{project.live ? 'Live Demo' : 'View Code'}</span>
                                        <ExternalLink size={15} />
                                    </a>
                                    {project.live && project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="github-mini-btn"
                                            aria-label={`${project.title} GitHub repository`}
                                        >
                                            <Github size={15} />
                                            <span>Source</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic Page by Page Pagination Bar */}
                {totalPages > 1 && (
                    <div className="pagination-bar">
                        <button
                            className="pagination-nav-btn prev-btn mono"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                        >
                            <ChevronLeft size={16} />
                            <span>Previous</span>
                        </button>

                        <div className="pagination-numbers mono">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    className={`page-number-btn ${currentPage === pageNum ? 'active' : ''}`}
                                    onClick={() => handlePageChange(pageNum)}
                                    aria-label={`Go to page ${pageNum}`}
                                    aria-current={currentPage === pageNum ? 'page' : undefined}
                                >
                                    {pageNum}
                                </button>
                            ))}
                        </div>

                        <button
                            className="pagination-nav-btn next-btn mono"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Next page"
                        >
                            <span>Next</span>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}

                <div className="more-projects">
                    <a
                        href="https://github.com/SUPREME10-UI?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary view-all-btn"
                    >
                        <Github size={18} />
                        <span>View All Repositories on GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
