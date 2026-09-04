const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET / - list all skills, optionally group by category in response
router.get('/', async (req, res, next) => {
  try {
    const skills = await Skill.find();
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
