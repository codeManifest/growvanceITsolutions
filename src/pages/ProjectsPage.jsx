import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Content from '../components/reuse/Content';
import Para_card from '../components/reuse/Para_card';

const ProjectsPage = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Built a custom online store with payment integration',
      type: 'development',
      tech: ['React', 'Node.js', 'Stripe'],
      image: '/project1.jpg',
      results: 'Increased conversion by 35%',
      details: {
        client: "Fashion Retail Co.",
        timeline: "3 months",
        challenges: "Legacy system integration",
        fullDescription: "Complete e-commerce solution with..."
      }
    },
    {
      id: 'brand-campaign',
      title: 'Brand Awareness Campaign',
      description: 'Social media strategy for fashion brand',
      type: 'social-media',
      tech: ['Instagram', 'TikTok', 'Influencers'],
      image: '/project2.jpg',
      results: '240% engagement growth',
      details: {
        client: "Luxury Brand",
        timeline: "6 months",
        challenges: "Market penetration",
        fullDescription: "Comprehensive social media campaign..."
      }
    }
  ];

  const projectTypes = [
    { id: 'all', name: 'All Projects' },
    { id: 'development', name: 'Development' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'pr', name: 'Public Relations' }
  ];

  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const handleCardClick = (project) => {
    navigate(`/projects/${project.id}`, { 
      state: { project } // Pass the entire project object
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our <span className="text-primary-200">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across multiple industries and disciplines.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {projectTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveFilter(type.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === type.id
                  ? 'bg-primary-200 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {type.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
              onClick={() => handleCardClick(project)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    {project.type.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Results:</p>
                  <p className="text-blue-600 font-semibold">{project.results}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

<Para_card btn_color={"bg-zinc-900 cursor-pointer "} main_bg={'bg-gradient-to-tr from-card-primary-300 to-card-primary-100  '} />
      </div>
    </div>
  );
};

export default ProjectsPage;