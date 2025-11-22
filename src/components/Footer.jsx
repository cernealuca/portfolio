import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-bg-secondary)',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
            marginTop: 'auto',
            borderTop: '1px solid var(--color-bg-card)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ marginBottom: 'clamp(1rem, 3vw, 2rem)' }}>
                    <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '700', marginBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--color-uipath-orange)' }}>⋀I 23</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Automating the mundane, empowering the creative.</p>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
                    &copy; {new Date().getFullYear()} Luca Teodor Cernea. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
