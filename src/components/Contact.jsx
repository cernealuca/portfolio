import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [hoveredPhone, setHoveredPhone] = useState(false);
    const [hoveredEmail, setHoveredEmail] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'phone') {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

    return (
        <section id="contact" style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '1rem' }}>
                        Contact <span style={{ color: 'var(--color-uipath-orange)' }}>Me</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'clamp(2rem, 4vw, 3rem)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', padding: '0 1rem' }}>
                        Let's connect and discuss how we can work together.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                        gap: 'clamp(1.5rem, 4vw, 3rem)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <div
                            style={{ position: 'relative', display: 'inline-block' }}
                            onMouseEnter={() => setHoveredPhone(true)}
                            onMouseLeave={() => setHoveredPhone(false)}
                        >
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    copyToClipboard('+40771167191', 'phone');
                                }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: 'var(--color-text-secondary)',
                                    transition: 'color 0.2s, transform 0.2s',
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--color-uipath-orange)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <FaPhone style={{ fontSize: '2.5rem' }} />
                                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Phone</span>
                            </a>
                            {(hoveredPhone || copiedPhone) && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-35px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: copiedPhone ? '#27ae60' : 'var(--color-bg-card)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '0.875rem',
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                    zIndex: 10
                                }}>
                                    {copiedPhone ? 'Copied!' : 'Click to copy'}
                                </div>
                            )}
                        </div>

                        <div
                            style={{ position: 'relative', display: 'inline-block' }}
                            onMouseEnter={() => setHoveredEmail(true)}
                            onMouseLeave={() => setHoveredEmail(false)}
                        >
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    copyToClipboard('luca.cernea.galaxy@gmail.com', 'email');
                                }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: 'var(--color-text-secondary)',
                                    transition: 'color 0.2s, transform 0.2s',
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--color-uipath-orange)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <FaEnvelope style={{ fontSize: '2.5rem' }} />
                                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email</span>
                            </a>
                            {(hoveredEmail || copiedEmail) && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-35px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: copiedEmail ? '#27ae60' : 'var(--color-bg-card)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '0.875rem',
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                    zIndex: 10
                                }}>
                                    {copiedEmail ? 'Copied!' : 'Click to copy'}
                                </div>
                            )}
                        </div>

                        <a
                            href="https://www.linkedin.com/in/luca-teodor-cernea-240bb421a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.75rem',
                                color: 'var(--color-text-secondary)',
                                transition: 'color 0.2s, transform 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-uipath-orange)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-text-secondary)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <FaLinkedin style={{ fontSize: '2.5rem' }} />
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/cernealuca"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.75rem',
                                color: 'var(--color-text-secondary)',
                                transition: 'color 0.2s, transform 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-uipath-orange)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-text-secondary)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <FaGithub style={{ fontSize: '2.5rem' }} />
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>GitHub</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
