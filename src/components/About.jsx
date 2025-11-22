import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            backgroundColor: 'var(--color-bg-secondary)'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                        textAlign: 'center'
                    }}>
                        About <span style={{ color: 'var(--color-uipath-orange)' }}>Me</span>
                    </h2>

                    <div style={{
                        backgroundColor: 'var(--color-bg-card)',
                        padding: 'clamp(1.5rem, 4vw, 3rem)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        lineHeight: '1.8',
                        color: 'var(--color-text-secondary)'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            My first three years were spent in the countryside with my grandparents, surrounded by nature and the rhythms of rural life. At 3, everything changed — I started kindergarten in Bucharest, and my afternoons took an unexpected turn. While my mother worked in international affairs at the National Art Museum, I became the museum's youngest regular visitor. After school each day, I'd roam freely through galleries filled with masterpieces, quietly developing an eye for composition, color, and form that would shape how I see the world.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            But I never lost my connection to the countryside. Regular visits to my grandparents' farm meant tending to a herd of ~20 goats, learning responsibility and discipline through daily care. From an early age, I was doing simple trade — selling fruits, vegetables, and dairy products, using basic math before it was taught in school. These practical skills became something I naturally shared with others: even as a young person, I found myself tutoring disadvantaged children in mathematics, discovering early on that teaching was as rewarding as learning.
                        </p>

                        <p>
                            This instinct to guide others has stayed with me. Since my twenties, I've been a certified sports instructor and martial arts coach, helping people of all ages discover that movement and discipline can be both accessible and enjoyable. Today, I'm active in Bucharest's artistic community, channeling my aesthetic sensibilities through percussion, poetry, and DIY design projects. My grandmother's natural medicine wisdom and my mentor's survival skills (he trains active special forces) keep me grounded. Whether surrounded by art or immersed in nature, I'm always exploring the space where tradition meets innovation.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
