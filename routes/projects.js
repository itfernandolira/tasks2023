const express = require('express');
const { getProjects,createProject,getProject,updateProject,deleteProject,addTask } = require('../controllers/projects');
const { protect } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  //.get(protect,getProjects)
  .post(protect,createProject);

router
  .route('/:id')
  .put(protect,updateProject)
  .post(protect,addTask);

module.exports = router;