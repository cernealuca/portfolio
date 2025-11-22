import { motion } from 'framer-motion';
import { SiTypescript, SiLua, SiDiscord } from 'react-icons/si';
import { FaBitcoin, FaGamepad, FaRobot, FaEnvelope } from 'react-icons/fa';

const funProjects = [
    {
        title: "Crypto Trading Bot",
        description: "Built a cryptocurrency trading bot focused on PEPE coin. Integrated TradingView's WickHunter indicators with Discord community strategies to identify trading opportunities. Automated execution with mobile push notifications for trade signals and weekly email analytics reports to track performance.",
        technologies: ["TypeScript", "TradingView API", "Discord Integration", "Mobile Notifications"],
        icons: [SiTypescript, FaBitcoin, SiDiscord, FaRobot],
        period: "~4 years ago",
        image: "https://cryptologos.cc/logos/pepe-pepe-logo.png"
    },
    {
        title: "WoW Addon Modifications",
        description: "Enhanced World of Warcraft private server experience by modifying existing addons in Lua. Focused on improving Auctionator automation, streamlining auction house operations and creating custom features for better gameplay efficiency.",
        technologies: ["Lua", "Auctionator", "Game Automation"],
        icons: [SiLua, FaGamepad],
        period: "Personal Project",
        image: "/wow-classic.jpg"
    }
];

const FunProjects = () => {
    return (
        <section id="playground" style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            backgroundColor: 'var(--color-bg-primary)',
            borderTop: '1px solid rgba(250, 70, 22, 0.1)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '1rem' }}>
                        <span style={{ color: 'var(--color-uipath-orange)' }}>Playground</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.9rem, 2vw, 1rem)', padding: '0 1rem' }}>
                        Projects built purely for learning, experimentation, and fun.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '2rem'
                }}>
                    {funProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: 'var(--color-bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(250, 70, 22, 0.2)',
                                transition: 'all 0.3s',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '200px',
                                marginBottom: '1.5rem',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-bg-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '1.5rem'
                            }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    {project.title}
                                </h3>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--color-text-muted)',
                                    fontStyle: 'italic',
                                    textAlign: 'right',
                                    minWidth: 'fit-content',
                                    marginLeft: '1rem'
                                }}>
                                    {project.period}
                                </span>
                            </div>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                marginBottom: '1.5rem',
                                lineHeight: '1.6'
                            }}>
                                {project.description}
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            style={{
                                                backgroundColor: 'rgba(250, 70, 22, 0.1)',
                                                color: 'var(--color-uipath-orange)',
                                                padding: '0.375rem 0.75rem',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.875rem',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                paddingTop: '1rem',
                                borderTop: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {project.icons.map((Icon, idx) => (
                                    <Icon
                                        key={idx}
                                        style={{
                                            fontSize: '1.5rem',
                                            color: 'var(--color-text-muted)',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--color-uipath-orange)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunProjects;
