import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Playground', href: '#playground' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.3s',
                backgroundColor: isScrolled ? 'var(--color-bg-primary)' : 'transparent',
                padding: isMobile ? '1rem' : (isScrolled ? '1rem 2rem' : '1.5rem 2rem'),
                borderBottom: isScrolled ? '1px solid var(--color-bg-card)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <a href="#" style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: '700', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <span style={{ color: 'var(--color-uipath-orange)' }}>Port</span>folio
                </a>

                {/* Desktop Menu */}
                {!isMobile && (
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{ color: 'var(--color-text-secondary)', fontWeight: '500', transition: 'color 0.2s', textDecoration: 'none' }}
                                onMouseEnter={(e) => (e.target.style.color = 'var(--color-uipath-orange)')}
                                onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-secondary)')}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-bg-card)' }}></div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/cernealuca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/luca-teodor-cernea-240bb421a/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            color: 'var(--color-text-primary)',
                            fontSize: '1.5rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem'
                        }}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            overflow: 'hidden',
                            backgroundColor: 'var(--color-bg-card)',
                            marginTop: '1rem',
                            borderRadius: 'var(--radius-md)',
                        }}
                    >
                        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontWeight: '500',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none',
                                        padding: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-uipath-orange)')}
                                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-secondary)')}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div style={{ height: '1px', backgroundColor: 'var(--color-bg-secondary)', margin: '0.5rem 0' }}></div>
                            <div style={{ display: 'flex', gap: '1.5rem', padding: '0.5rem', justifyContent: 'center' }}>
                                <a href="https://github.com/cernealuca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', fontSize: '1.5rem' }}>
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/luca-teodor-cernea-240bb421a/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', fontSize: '1.5rem' }}>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
