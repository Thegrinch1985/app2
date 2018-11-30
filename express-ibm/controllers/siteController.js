var RepoDep = require('../models/repodependencies');
var Repo = require('../models/repo');
var Dependencies = require('../models/dependencies');


var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
       
        repo_count: function(callback) {
            Repo.countDocuments({}, callback);
        },
     
    }, function(err, results) {
        res.render('index', { title: 'IBM,', error: err, data: results });
    });
};
