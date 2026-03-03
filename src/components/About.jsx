import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBrain, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a passionate <span className="highlight">Front-End Developer</span> and{' '}
              <span className="highlight">AI Student</span> at the University of Agriculture Peshawar,
              pursuing my Bachelor's degree in Artificial Intelligence. As the{' '}
              <span className="highlight">Vice President of Farabi Science Society</span>, I lead
              initiatives that bridge technology and innovation while developing strong leadership
              and collaboration skills.
            </p>
            <p>
              I specialize in creating responsive, user-friendly web applications using modern
              technologies like React, JavaScript, and cutting-edge AI frameworks. Currently, I'm
              diving deep into the world of <span className="highlight">Agentic AI</span>, exploring
              how autonomous agents can revolutionize user experiences and solve complex problems.
            </p>
            <p>
              My experience in leadership roles has honed my{' '}
              <span className="highlight">communication</span>,{' '}
              <span className="highlight">teamwork</span>, and{' '}
              <span className="highlight">problem-solving</span> abilities, which complement my
              technical skills perfectly. When I'm not coding, you'll find me organizing tech events,
              mentoring peers, or learning about the latest developments in AI and machine learning.
            </p>
          </motion.div>

          <motion.div className="about-cards" variants={itemVariants}>
            <div className="about-card">
              <div className="card-icon">
                <FaCode />
              </div>
              <h3>Front-End Development</h3>
              <p>
                Building responsive and interactive web applications with React, JavaScript,
                and modern CSS frameworks
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaBrain />
              </div>
              <h3>Agentic AI</h3>
              <p>
                Exploring autonomous AI agents, machine learning models, and intelligent
                systems integration
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>BS Artificial Intelligence</h3>
              <p>
                Pursuing academic excellence in AI, learning algorithms, neural networks, and
                data science
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
