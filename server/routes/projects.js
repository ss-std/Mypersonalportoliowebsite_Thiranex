const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { dbEnabled } = require('../config/db');

const fallbackProjects = [
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    description: 'AI-powered resume builder built with Python, Django, GenAI, HTML, CSS, and JavaScript.',
    technologies: ['Python', 'Django', 'GenAI', 'HTML5', 'CSS3', 'JavaScript'],
    featured: true
  },
  {
    id: 'ems-portal',
    title: 'EMS Portal',
    description: 'Responsive employee management dashboard built with React and REST APIs.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    featured: true
  }
];

// GET / - list all projects, optional query ?featured=true
router.get('/', async (req, res, next) => {
  try {
    if (!dbEnabled) {
      const projects = req.query.featured === 'true'
        ? fallbackProjects.filter(project => project.featured)
        : fallbackProjects;
      return res.json(projects);
    }
    const filter = req.query.featured === 'true' ? { featured: true } : {};
    const projects = await Project.find(filter).sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

// GET /:id - get single project by ID
router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

// POST / - create project
router.post('/', async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    next(err);
  }
});

// PUT /:id - update project
router.put('/:id', async (req, res, next) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(updatedProject);
  } catch (err) {
    next(err);
  }
});

// DELETE /:id - delete project
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
