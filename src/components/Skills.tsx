import React from 'react';
import { motion } from 'framer-motion';
import { Box, LinearProgress, Typography } from '@mui/material';

const skills = [
  { name: 'Frontend Development', level: 90, color: '#3B82F6' },
  { name: 'Backend Development', level: 85, color: '#10B981' },
  { name: 'UI/UX Design', level: 75, color: '#8B5CF6' },
  { name: 'PowerBI', level: 70, color: '#EC4899' },
  { name: 'Mobile Development', level: 65, color: '#F59E0B' },
  { name: 'Database Management', level: 80, color: '#6366F1' }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Expertise</h2>
        </motion.div>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: skill.color,
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;