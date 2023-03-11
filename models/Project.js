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
    },
    tasks: [{
        task: {
            type: String,
            required: [true, 'Please add a task'],
            unique: false,
            trim: true
        },
        creationDate: Date,
        finishDate: Date,
        done: {
            type: Boolean,
            default: false
        }
    }]
  });

  module.exports = mongoose.model('Project', ProjectSchema);