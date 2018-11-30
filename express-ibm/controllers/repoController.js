var Repo = require('../models/repo');

//Display list of Rep

exports.repo_list = function(req, res,next) {
	
	Repo.find()
	.sort([['name','ascending']])
	.exec(function (err, list_repo) {
	if (err) { return next(err); }
	//succesful so render
	res.render('repo_list', {title:'Repository List', repo_list :list_repo});
});	


};


// Display detail page for a specific Repo
exports.repo_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Repo detail: ' + req.params.id);
};


// Display Repo create form on GET.
exports.repo_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Repo create GET');
};

// Handle Repo create on POST.
exports.repo_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Repo create POST');
};

// Display Repo delete form on GET.
exports.repo_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Repo delete GET');
};

// Handle Repo delete on POST.
exports.repo_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: REpo delete POST');
};

// Display REpo update form on GET.
exports.repo_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Repo update GET');};


exports.repo_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: repo update POST');
};
