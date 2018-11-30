var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RepoDepSchema = new Schema(
	{
		repo_id: {type: Schema.Types.ObjectId, ref: 'Repo', required:true},
	dependency_id: {type: Schema.Types.ObjectId, ref: 'Dependencies', required:true},
    
	
	
	});

module.exports = mongoose.model('RepoDep',RepoDepSchema);

