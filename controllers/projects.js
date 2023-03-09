const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Project = require('../models/Project');


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