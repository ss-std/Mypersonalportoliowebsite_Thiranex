const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Frontend', 'Backend', 'Database', 'Tools', 'Other']
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 100
  },
  icon: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Skill', skillSchema);
