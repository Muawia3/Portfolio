import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'BS Artificial Intelligence',
      institution: 'University of Agriculture Peshawar',
      period: '2023 - Present',
      description:
        'Focusing on machine learning, deep learning, neural networks, and AI systems development',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'Web Development Training',
      institution: 'Saylani Mass IT Training Center Peshawar',
      period: '2024 - 2026',
      description:
        'Comprehensive training in modern web development including HTML, CSS, JavaScript, React, Node.js, and full-stack development',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'AI/ML/DL Training Program',
      institution: 'NAVTTC (Arfa Karim Technology Incubator)',
      period: '2026-Present',
      description:
        'Advanced training in Machine Learning, Deep Learning, and Artificial Intelligence with hands-on projects and real-world applications',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'Intermediate (Pre-Medical)',
      institution: 'Govt Superior Science College',
      period: '2021 - 2023',
      description:
        'Completed intermediate education with focus on science subjects including Biology, Chemistry, and Physics',
      icon: <FaGraduationCap />,
    },
  ];

  const experience = [
    {
      title: 'TEDx Organizer',
      company: 'TEDx University of Agriculture Peshawar',
      period: '2026 - Present',
      description:
        'Organizing TEDx events at University of Agriculture Peshawar, curating inspiring talks on technology, innovation, and entrepreneurship',
      icon: <FaBriefcase />,
    },
    {
      title: 'Vice President',
      company: 'Farabi Science Society - University of Agriculture Peshawar',
      period: '2023 - Present',
      description:
        'Leading technology initiatives, organizing workshops and tech events, managing team of 50+ members, and promoting innovation in science and technology',
      icon: <FaBriefcase />,
    },
    {
      title: 'Campus Leader',
      company: 'APEXA - University of Agriculture Peshawar',
      period: '2026 - Present',
      description:
        'Campus leader for APEXA - an AI-powered mind power and future-self enablement platform. Empowering students and dreamers through practical mental training techniques. Mission: engaging, educating, and empowering dreamers to achieve their life goals through personalized guidance and behavior alignment.',
      icon: <FaBriefcase />,
    },
    {
      title: 'General Secretary',
      company: 'Literary and Cultural Society - University of Agriculture Peshawar',
      period: '2026 - Present',
      description:
        'General Secretary of Literary and Cultural Society, leading cultural initiatives, organizing literary events, and promoting arts and literature on campus',
      icon: <FaBriefcase />,
    },
  ];

  const certifications = [
    {
      name: 'Web Development Webinar',
      issuer: 'CSSC - University of Peshawar',
      period: '2025',
      description: 'Attended comprehensive webinar on modern web development technologies and best practices',
      icon: <FaCertificate />,
      image: '/certificates/Certificate%20Ameer%20Muawia%20.jpg',
    },
    {
      name: 'Microsoft Learn Student Ambassador - Team Member',
      issuer: 'Microsoft Learn Student Ambassadors',
      period: '2025',
      description: 'Team member of Microsoft Learn Student Ambassadors program promoting technology and learning',
      icon: <FaCertificate />,
      image: '/certificates/Ameer%20Muawia%20.jpg',
    },
    {
      name: 'Pakistan Youth Summit - 6th Edition Organizer',
      issuer: 'Metrix Pakistan',
      period: '2025',
      description: 'Successfully organized and coordinated the 6th edition of Pakistan Youth Summit',
      icon: <FaCertificate />,
      image: '/certificates/certificate%20organizers%20-%20Copy_page-0001.jpg',
    },
    {
      name: 'Queens Commonwealth Essay Competition 2022',
      issuer: 'The Royal Commonwealth Society',
      period: '2022',
      description: 'Participated in the prestigious international essay writing competition',
      icon: <FaCertificate />,
      image: '/certificates/Ameer Muawia.jpg',
    },
    {
      name: 'Literary and Cultural Society Member',
      issuer: 'LCS - University of Agriculture Peshawar',
      period: '2025',
      description: 'Active member of Literary and Cultural Society promoting arts, literature, and cultural activities',
      icon: <FaCertificate />,
      image: '/certificates/LCS%20.png',
    },
    {
      name: 'Seerat un Nabi Conference Organizer',
      issuer: 'YDC - University of Agriculture Peshawar',
      period: '2025',
      description: 'Successfully organized and coordinated Seerat un Nabi conference at University of Agriculture Peshawar',
      icon: <FaCertificate />,
      image: '/certificates/Ameer%20Muawia%20(2).png',
    },
    {
      name: 'National Digital Empowerment Course',
      issuer: 'Digital Institute of Pakistan',
      period: '2025',
      description: '10-day intensive program focused on digital skills and technology empowerment',
      icon: <FaCertificate />,
      image: '/certificates/Ameer Muawia.png',
    },
    {
      name: 'Project Presentation Event Organizer',
      issuer: 'Farabi Science Society',
      period: '2025',
      description: 'Successfully organized and managed project presentation event at University of Agriculture Peshawar',
      icon: <FaCertificate />,
      image: '/certificates/Certificate.png',
    },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const TimelineItem = ({ item }) => (
    <div className="timeline-item">
      <div className="timeline-icon">{item.icon}</div>
      <div className="timeline-content">
        <h3>{item.title || item.degree || item.name}</h3>
        <h4>{item.company || item.institution || item.issuer}</h4>
        <span className="timeline-period">{item.period}</span>
        <p>{item.description}</p>
        {item.image && (
          <div className="certificate-image">
            <img 
              src={item.image} 
              alt={item.name || item.title || item.degree}
              onError={(e) => {
                console.error('Image failed to load:', item.image);
                e.target.style.display = 'none';
              }}
              onLoad={(e) => {
                console.log('Image loaded:', item.image);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="experience" id="experience">
      <div className="experience-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        <div className="experience-grid">
          <motion.div
            className="timeline-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="timeline-title">Education</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="timeline-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="timeline-title">Experience</h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="timeline-section full-width"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="timeline-title">Certifications & Learning</h3>
            <div className="certificates-grid">
              {certifications.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
