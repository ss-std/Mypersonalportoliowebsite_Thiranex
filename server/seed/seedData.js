require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Message = require('../models/Message');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB Connected for Seeding');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const projects = [
  {
    title: 'AI Resume Builder',
    description: 'Built an AI-powered resume builder using Python and Django, enabling users to create professional, structured resumes efficiently. Implemented resume customization features and streamlined resume generation through a user-friendly web interface.',
    technologies: ['Python', 'Django', 'GenAI', 'RESTful API', 'HTML5', 'CSS3', 'JavaScript'],
    featured: true
  },
  {
    title: 'EMS Portal (Employee Management System)',
    description: 'Developed a responsive EMS portal using React.js, JavaScript, HTML, and CSS for managing employee information and core HR functions. Built interactive components and responsive layouts to enhance usability and overall user experience.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS Modules', 'State Management'],
    featured: true
  },
  {
    title: 'Image Gallery — CodeAlpha',
    description: 'Developed a responsive, interactive image gallery with a clean, user-friendly interface using HTML, CSS, and JavaScript. Implemented JavaScript-based image navigation and interactive features with fully responsive layouts.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive UI'],
    featured: true
  }
];

const skills = [
  // Languages
  { name: 'Java', category: 'Backend', proficiency: 90 },
  { name: 'JavaScript', category: 'Frontend', proficiency: 88 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 80 },
  { name: 'C++', category: 'Backend', proficiency: 82 },
  { name: 'C', category: 'Backend', proficiency: 85 },
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 90 },
  { name: 'HTML5', category: 'Frontend', proficiency: 95 },
  { name: 'CSS3', category: 'Frontend', proficiency: 92 },
  { name: 'CSS Modules', category: 'Frontend', proficiency: 86 },
  { name: 'Web Accessibility', category: 'Frontend', proficiency: 82 },
  { name: 'Vite', category: 'Frontend', proficiency: 88 },
  { name: 'Axios', category: 'Frontend', proficiency: 84 },
  // Backend & APIs
  { name: 'Node.js', category: 'Backend', proficiency: 82 },
  { name: 'Express.js', category: 'Backend', proficiency: 84 },
  { name: 'Spring Boot', category: 'Backend', proficiency: 80 },
  { name: 'RESTful API Design', category: 'Backend', proficiency: 88 },
  { name: 'Mongoose', category: 'Backend', proficiency: 80 },
  { name: 'dotenv & CORS', category: 'Backend', proficiency: 82 },
  // Databases
  { name: 'MongoDB', category: 'Database', proficiency: 80 },
  { name: 'MongoDB Atlas', category: 'Database', proficiency: 78 },
  { name: 'Schema Design', category: 'Database', proficiency: 82 },
  // Tools & Practices
  { name: 'Git', category: 'Tools', proficiency: 90 },
  { name: 'GitHub', category: 'Tools', proficiency: 92 },
  { name: 'npm', category: 'Tools', proficiency: 88 },
  { name: 'CI/CD Pipelines', category: 'Tools', proficiency: 78 }
];

const seedData = async () => {
  try {
    await connectDB();

    console.log('Clearing old data...');
    await Project.deleteMany();
    await Skill.deleteMany();
    await Message.deleteMany();

    console.log('Inserting portfolio projects...');
    await Project.insertMany(projects);

    console.log('Inserting portfolio skills...');
    await Skill.insertMany(skills);

    console.log('Data successfully seeded with resume details!');
    process.exit();
  } catch (error) {
    console.error(`Error with seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
