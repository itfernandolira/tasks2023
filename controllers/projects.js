const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Project = require('../models/Project');


// @desc      Add task
// @route     POST /api/v1/projects/:id
// @access    Private
exports.addTask = asyncHandler(async (req, res, next) => {

    const project = await Project.findById(req.params.id);
  
    if (!project) {
      return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    
     project.tasks.push(req.body);

     const addTask = await Project.findByIdAndUpdate(req.params.id, project, {
        new: true,
        runValidators: true
      });

      if (!addTask) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
      }

      res.status(200).json({ success: true, data: project });
});

// @desc      Create new project
// @route     POST /api/v1/projects
// @access    Private
exports.createProject = asyncHandler(async (req, res, next) => {
    const project = await Project.create({...req.body,user: req.user.id});
    res.status(201).json({
        success: true,
        project
    });
});

// @desc      Update project
// @route     PUT /api/v1/projects/:id
// @access    Private
exports.updateProject = asyncHandler(async (req, res, next) => {

    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });

      if (!project) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
      }

      res.status(200).json({ success: true, data: project });

});