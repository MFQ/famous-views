var fs = require('fs');
var Mustache = require('mustache');
var S = require('string');
var argv = require('minimist')(process.argv.slice(2));

module.exports = {
	CLI : function(){
		if(argv.help || argv._.length == 0)
			showHelp();	
		else{
			var path = '.'
			if(argv.p || argv.path)
				path = argv.p || argv.path
			generateAllViews(path);
		}

	}
}
function generateAllViews(path){
	argv._.forEach(function(name){
		generateView(name, path);
	});
}

function generateView(viewName, path){
	viewName = S(viewName).camelize().s;
	fs.readFile('templateFile', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var s=Mustache.render(data, {name:viewName+"View"});
		fs.writeFile(path+"/"+viewName+"View.js", s, function (err) {
  			if (err) return console.log(err);
		});
	});
}

function showHelp(){
	console.log("Generate view .......")
}


console.log(__dirname);