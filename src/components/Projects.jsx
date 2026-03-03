import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chat Application',
      description:
        'A real-time chat application with AI integration for smart replies and sentiment analysis',
      image: '/vite.svg',
      technologies: ['React', 'Node.js', 'TensorFlow', 'Socket.io'],
      category: 'ai',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration and admin dashboard',
      image: '/vite.svg',
      technologies: ['React', 'MongoDB', 'Express', 'Stripe'],
      category: 'web',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Task Management System',
      description:
        'Collaborative task management tool with real-time updates and team features',
      image: '/vite.svg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'web',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Image Recognition App',
      description:
        'ML-powered image classification and object detection application',
      image: '/vite.svg',
      technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
      category: 'ai',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with forecast and location-based data',
      image: '/vite.svg',
      technologies: ['React', 'API Integration', 'CSS3'],
      category: 'web',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Portfolio Generator',
      description:
        'AI-assisted portfolio builder that creates professional websites automatically',
      image: '/vite.svg',
      technologies: ['React', 'OpenAI', 'TypeScript'],
      category: 'ai',
      github: '#',
      demo: '#',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI Projects
          </button>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
