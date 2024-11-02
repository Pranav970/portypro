import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Pranav Rajput. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;