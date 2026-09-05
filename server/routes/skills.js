const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const { dbEnabled } = require('../config/db');

const fallbackSkills = [
  { name: 'JavaScript', category: 'Frontend', proficiency: 88 },
  { name: 'React.js', category: 'Frontend', proficiency: 90 },
  { name: 'HTML5', category: 'Frontend', proficiency: 95 },
  { name: 'CSS3', category: 'Frontend', proficiency: 92 },
  { name: 'Node.js', category: 'Backend', proficiency: 82 },
  { name: 'Express.js', category: 'Backend', proficiency: 84 },
  { name: 'RESTful APIs', category: 'Backend', proficiency: 88 },
  { name: 'MongoDB', category: 'Database', proficiency: 80 },
  { name: 'Git', category: 'Tools', proficiency: 90 }
];

// GET / - list all skills, optionally group by category in response
router.get('/', async (req, res, next) => {
  try {
    const skills = dbEnabled ? await Skill.find() : fallbackSkills;
    if (req.query.group === 'category') {
      const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      }, {});
      return res.json(grouped);
    }
    res.json(skills);
  } catch (err) {
    next(err);
  }
});

// POST / - create skill
router.post('/', async (req, res, next) => {
  try {
    if (!dbEnabled) {
      return res.status(503).json({ message: 'Skill management requires a database connection' });
    }
    const skill = new Skill(req.body);
    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (err) {
    next(err);
  }
});

// PUT /:id - update skill
router.put('/:id', async (req, res, next) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(updatedSkill);
  } catch (err) {
    next(err);
  }
});

// DELETE /:id - delete skill
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
