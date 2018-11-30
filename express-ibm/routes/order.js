var express = require('express');
var router = express.Router();

var repoController = require('../controllers/repoController');
var site =require('../controllers/siteController');
/// AUTHOR ROUTES ///

router.get('/', site.index);
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/repo/create', repoController.repo_create_get);

// POST request for creating Author.
router.post('/repo/create', repoController.repo_create_post);

// GET request to delete Author.
router.get('/repo/:id/delete', repoController.repo_delete_get);

// POST request to delete Author.
router.post('/repo/:id/delete', repoController.repo_delete_post);

// GET request to update Author.
router.get('/repo/:id/update', repoController.repo_update_get);

// POST request to update Author.
router.post('/repo/:id/update', repoController.repo_update_post);

// GET request for one Author.
router.get('/repo/:id', repoController.repo_detail);

// GET request for list of all Authors.
router.get('/repo', repoController.repo_list);

module.exports = router;
