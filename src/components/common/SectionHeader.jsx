import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, count }) => {
    return (
        <div className="section-header">
            <div className="header-top mono">
                <span className="accent-text">0{count}.</span>
                <span className="header-subtitle">{subtitle}</span>
            </div>
            <h2 className="header-title">{title}</h2>
            <div className="header-line"></div>
        </div>
    );
};

export default SectionHeader;
