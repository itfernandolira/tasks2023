const express = require('express');
const { getProjects,createProject,getProject,updateProject,deleteProject } = require('../controllers/projects');
const { protect } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  //.get(protect,getProjects)
  .post(protect,createProject);

/* router
  .route('/:id')
  .get(protect, getProject)
  .put(protect,updateProject)
  .delete(protect,deleteProject); */

module.exports = router;