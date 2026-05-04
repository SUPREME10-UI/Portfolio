import { useEffect } from 'react';

const useCursorGlow = () => {
    useEffect(() => {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);

        const handleMouseMove = (e) => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (glow.parentNode) glow.parentNode.removeChild(glow);
        };
    }, []);
};

export default useCursorGlow;
