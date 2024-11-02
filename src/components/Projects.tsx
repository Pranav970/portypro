import React from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with collaborative features",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://example.com"
  },
  {
    title: "AI Image Generator",
    description: "Generate unique images using AI and machine learning",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "https://example.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    link: "https://example.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="w-8 h-8" />
            Projects
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                sx={{ 
                  bgcolor: 'rgba(31, 41, 55, 0.5)',
                  color: 'white',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                    </a>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgb(156, 163, 175)', mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(55, 65, 81, 0.5)',
                          color: 'white',
                          '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.5)' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;