import { motion } from 'framer-motion';
import { SiDotnet, SiPython, SiMysql, SiJavascript, SiGit, SiDocker, SiMongodb } from 'react-icons/si';
import { FaTasks } from 'react-icons/fa';

const skills = [
    { name: ".NET / C#", icon: SiDotnet, level: "Intermediate", color: "#512BD4" },
    { name: "SQL", icon: SiMysql, level: "Intermediate", color: "#4479A1" },
    { name: "Python", icon: SiPython, level: "Intermediate", color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, level: "Intermediate", color: "#F7DF1E" },
    { name: "Docker", icon: SiDocker, level: "Intermediate", color: "#2496ED" },
    { name: "MongoDB", icon: SiMongodb, level: "Intermediate", color: "#47A248" },
    { name: "Git", icon: SiGit, level: "Intermediate", color: "#F05032" },
    { name: "Agile", icon: FaTasks, level: "Advanced", color: "#00ADD8" },
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)', backgroundColor: 'var(--color-bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '1rem' }}>
                        Technical <span style={{ color: 'var(--color-uipath-orange)' }}>Arsenal</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.9rem, 2vw, 1rem)', padding: '0 1rem' }}>
                        Tools and technologies I use to build robust automation solutions.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '1rem'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, backgroundColor: 'var(--color-bg-secondary)' }}
                            style={{
                                backgroundColor: 'var(--color-bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            <div style={{ fontSize: '3rem', color: skill.color, marginBottom: '1rem' }}>
                                {<skill.icon />}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{skill.name}</h3>
                            <span style={{
                                fontSize: '0.875rem',
                                color: 'var(--color-text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {skill.level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
