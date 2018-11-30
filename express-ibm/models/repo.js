var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RepoSchema = new Schema(
	{
		name: {type: String, required: true},
		url: {type: String, required: true},
		filetype: {type: String},
	}
	
	
	);

RepoSchema
.virtual('GetName')
.get(function () {
	return this.name;
});

RepoSchema
.virtual('GetUrl')
.get(function () {
        return this.url;
});

RepoSchema
.virtual('Getfiletype')
.get(function () {
        return this.filetype;
});

RepoSchema
.virtual('GetAll')
.get(function () {
        return this.name + this.url + this.filetype;
});

module.exports = mongoose.model('Repo', RepoSchema);



