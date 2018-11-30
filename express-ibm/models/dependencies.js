var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DependenciesSchema = new Schema(
	{
		name: {type: String, required:true},
		version_no: {type: String, required:true},
		filetype: {type: String},
	
	}

);

DependenciesSchema 
.virtual('GetName')
.get(function () {
  return this.name;
});

DependenciesSchema
.virtual('GetVersion_no')
.get(function () {
  return this.version_no;
});

DependenciesSchema
.virtual('GetFiletype')
.get(function () {
  return this.filetype;
});

DependenciesSchema
.virtual('GetAll')
.get(function () {
  return this.name + this.version_no + this.filetype;
});

module.exports = mongoose.model('Dependencies',DependenciesSchema);

