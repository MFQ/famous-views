var fs = require('fs');
var Mustache = require('mustache');
var S = require('string');

exports.view = function (viewName, path){
    
	viewName = S(viewName).camelize().s;
	fs.readFile('templates/boilerplateTemplate', 'utf8', function (err,data) {
	    
		if (err) 
			return console.log(err);
		var content=Mustache.render(data, {name:viewName+"View"});
		
		if(path =="")
		    path =__dirname;
		path = path+"/"+viewName+"View.js"
		if(fs.existsSync(path)){
			return console.log("already exist...")
		}
		
		fs.writeFile(path, content, function (err) {
  			if (err) return console.log(err);
		});
	});
}
