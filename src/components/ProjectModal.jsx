import { motion } from 'framer-motion';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(5px)'
                }}
            />

            <motion.div
                layoutId={`project-${project.id}`}
                style={{
                    backgroundColor: 'var(--color-bg-card)',
                    width: '100%',
                    maxWidth: '800px',
                    maxHeight: '90vh',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 101,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        zIndex: 10
                    }}
                >
                    <FaTimes />
                </button>

                <div style={{ height: '300px', flexShrink: 0 }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ padding: '2rem', overflowY: 'auto' }}>
                    <span style={{ color: 'var(--color-uipath-orange)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {project.category}
                    </span>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: '0.5rem 0 1.5rem' }}>{project.title}</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>The Challenge</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>{project.details.problem}</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>The Solution</h3>
                            <p style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{project.details.solution}</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(250, 70, 22, 0.1)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-uipath-orange)' }}>Key Results</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {project.results.map((result, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                                    <FaCheckCircle style={{ color: 'var(--color-uipath-orange)' }} /> {result}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Technologies Used</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tech.map((tech) => (
                                <span key={tech} style={{
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'var(--color-text-secondary)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {project.website && (
                        <div style={{ marginTop: '2rem' }}>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: 'var(--color-uipath-orange)',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontWeight: '600',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 14px 0 rgba(250, 70, 22, 0.39)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                Visit Website →
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
