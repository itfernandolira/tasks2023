const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please add a project name']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Project', ProjectSchema);