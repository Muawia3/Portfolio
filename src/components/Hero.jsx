import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h1>

          <motion.h2
            className="hero-name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Ameer Muawia
          </motion.h2>

          <div className="hero-title">
            <TypeAnimation
              sequence={[
                'Front-End Developer',
                2000,
                'Agentic AI Enthusiast',
                2000,
                'React Developer',
                2000,
                'AI Student',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting innovative web experiences with modern technologies and
            exploring the frontiers of Agentic AI
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="btn btn-primary">View Projects</button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="btn btn-secondary">Contact Me</button>
            </Link>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com/Muawia3" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ameer-muawia" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/muawia_804/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:amuawia@aup.edu.pk">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Muawia" className="profile-img" />
            <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>

      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
