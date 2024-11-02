import React from 'react';
import { Mail as MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2 justify-center">
            <MailIcon className="w-8 h-8" />
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { mb: 2 },
              '& .MuiInputBase-root': { 
                color: 'white',
                '& fieldset': { borderColor: 'rgba(255,255,255,0.23)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' }
              },
              '& label': { color: 'rgba(255,255,255,0.7)' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 2,
                background: 'linear-gradient(to right, #3B82F6, #10B981)',
                '&:hover': {
                  background: 'linear-gradient(to right, #2563EB, #059669)'
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;