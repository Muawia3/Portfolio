import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
  ];

  const aiSkills = [
    { name: 'Python', icon: <FaPython />, level: 80 },
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 70 },
    { name: 'PyTorch', icon: <SiPytorch />, level: 65 },
  ];

  const otherSkills = [
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
  ];

  const softSkills = [
    { name: 'Leadership', level: 90 },
    { name: 'Team Management', level: 88 },
    { name: 'Communication', level: 92 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Public Speaking', level: 80 },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const SkillCard = ({ skill }) => (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">{skill.icon}</div>
        <span className="skill-name">{skill.name}</span>
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-category"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="category-title">Front-End Development</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-category"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="category-title">AI & Machine Learning</h3>
          <div className="skills-grid">
            {aiSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-category"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="category-title">Other Technologies</h3>
          <div className="skills-grid">
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-category"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="category-title">Leadership & Soft Skills</h3>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
