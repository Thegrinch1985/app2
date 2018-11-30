#! /usr/bin/env node
console.log('This script populates some repo, dependencies and repodep to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');


// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Repo = require('./models/repo')
var Dependencies = require('./models/dependencies')
var Repodependencies = require('./models/repodependencies')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var repos = []
var dependenciess = []
var repodependenciess = []

function repoCreate(name, url, filetype, cb) {
    repodetail = { name: name, url: url, filetype: filetype }

    var repo = new Repo(repodetail);

    repo.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Repo : ' + repo);
        repos.push(repo)
        cb(null, repo)
    });
}

function dependenciesCreate(name, version_no, filetype, cb) {
    dependenciesdetail = { name: name, version_no: version_no, filetype: filetype }

    var dependencies = new Dependencies(dependenciesdetail);
    dependencies.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Dependencies: ' + dependencies);
        dependenciess.push(dependencies)
        cb(null, dependencies)
    });
}

function repodependenciesCreate(repo_id, dependency_id, cb) {
    repodependenciesdetail = {
        repo_id: repo_id,
        dependency_id: dependency_id

    }
    var repoDep = new Repodependencies(repodependenciesdetail);
    repoDep.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('Repo Dep: ' + repoDep);
        repodependenciess.push(repoDep)
        cb(null, repoDep)
    });
}

function createRepo(cb) {
    async.parallel([
        function (callback) {
            repoCreate('Our Java Repo', 'g-repo', 'Java', callback);
        },
        function (callback) {
            repoCreate('Our Python Repo', 'gitpo', 'Python', callback);
        },
    ],
        // optional callback
        cb);
}
function createDependencies(cb) {
    async.parallel([
        function (callback) {
            dependenciesCreate((' org.springframework:spring-web', '4.3.4.RELEASE', 'Java', callback));
        },
        function (callback) {
            dependenciesCreate((' org.springframework:spring-web', '4.3.4.RELEASE', 'Java', callback));
        },
    ],
        // optional callback
        cb);
}

function createRepoDepend(_cb) {
    async.parallel([
        function (callback) {
            repodependenciesCreate(repo_id[0], dependency_id[0], callback);
        },
        function (callback) {
            repodependenciesCreate(repo_id[1], dependency_id[1], callback);
        },

    ])


}



async.series([
    createRepo,
    createDependencies,
    createRepoDepend
],
    // Optional callback
    function (err, _results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('IBM Github ');

        }
        // All done, disconnect from database
        mongoose.connection.close();
    });


