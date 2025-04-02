import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const typeStyles = {
  development: 'bg-blue-100 text-blue-800',
  'digital-marketing': 'bg-purple-100 text-purple-800',
  'social-media': 'bg-pink-100 text-pink-800',
  pr: 'bg-green-100 text-green-800'
};

const typeLabels = {
  development: 'Development',
  'digital-marketing': 'Digital Marketing',
  'social-media': 'Social Media',
  pr: 'Public Relations'
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      custom={index}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-48 bg-gray-200 overflow-hidden relative">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
        <motion.span 
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${typeStyles[project.type]}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          {typeLabels[project.type]}
        </motion.span>
      </div>
      
      <div className="p-6 flex-grow">
        <motion.h3 
          className="text-xl font-semibold text-gray-800 mb-2"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {project.description}
        </motion.p>
      </div>
      
      <div className="px-6 pb-6">
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {project.tech.map((tech, techIndex) => (
            <motion.span 
              key={techIndex}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Built a custom online store with payment integration',
      type: 'development',
      tech: ['React', 'Node.js', 'Stripe'],
      image: '/images/seo.jpg',
      link: '#',
      details: {
        client: "Fashion Retail Co.",
        timeline: "3 months",
        results: "Increased conversion by 35%",
        challenges: "Legacy system integration",
        fullDescription: "We developed a custom e-commerce platform with seamless payment integration and inventory management..."
      }
    },
    {
      id: 'brand-awareness',
      title: 'Brand Awareness Campaign',
      description: 'Increased social engagement by 240% for a fashion brand',
      type: 'social-media',
      tech: ['Instagram', 'TikTok', 'Influencers'],
      image: '/images/ppc.jpg',
      link: '#',
      details: {
        client: "Luxury Fashion Brand",
        timeline: "6 months",
        results: "240% engagement increase",
        challenges: "Breaking into new markets",
        fullDescription: "Our social media campaign targeted key demographics through influencer partnerships..."
      }
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Improved organic traffic by 180% in 3 months',
      type: 'digital-marketing',
      tech: ['SEO', 'Content Strategy', 'Analytics'],
      image: '/project3.jpg',
      link: '#',
      details: {
        client: "B2B SaaS Company",
        timeline: "3 months",
        results: "180% traffic increase",
        challenges: "Competitive keywords",
        fullDescription: "Comprehensive SEO strategy focusing on technical improvements and content optimization..."
      }
    },
    {
      id: 'product-launch',
      title: 'Product Launch PR',
      description: 'Secured coverage in 15+ industry publications',
      type: 'pr',
      tech: ['Press Releases', 'Media Outreach', 'Events'],
      image: '/project4.jpg',
      link: '#',
      details: {
        client: "Tech Startup",
        timeline: "2 months",
        results: "15+ publications",
        challenges: "Breaking through noise",
        fullDescription: "Strategic media outreach and press release distribution for maximum impact..."
      }
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-800">Our Recent Work</h2>
            <motion.p 
              className="text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore our diverse portfolio across multiple disciplines
            </motion.p>
          </motion.div>
          
          <motion.a 
            href="/projects" 
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;