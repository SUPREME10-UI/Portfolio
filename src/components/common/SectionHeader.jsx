import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, count }) => {
    return (
        <div className="section-header">
            {(count || subtitle) && (
                <div className="header-top mono">
                    {count && <span className="accent-text">0{count}.</span>}
                    {subtitle && <span className="header-subtitle">{subtitle}</span>}
                </div>
            )}
            <h2 className="header-title">{title}</h2>
            <div className="header-line"></div>
        </div>
    );
};

export default SectionHeader;
