// src/pages/ProjectDetails.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 bg-gray-50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${typeStyles[project.type]}`}>
                {typeLabels[project.type]}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Project Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-500">Client</h3>
                    <p>{project.details.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Timeline</h3>
                    <p>{project.details.timeline}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Results</h3>
                    <p>{project.details.results}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Challenges</h3>
                    <p>{project.details.challenges}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Full Description</h2>
                <p className="text-gray-600">{project.details.fullDescription}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;

// Add these outside the component (same as in RecentProjects)
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