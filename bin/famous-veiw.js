exports.generateView = function (viewName, path){
    
	viewName = S(viewName).camelize().s;
	fs.readFile('templates/boilerplateTemplate', 'utf8', function (err,data) {
	    
		if (err) 
			return console.log(err);
		var s=Mustache.render(data, {name:viewName+"View"});
		
		if(path =="")
		    path =__dirname;
		
		fs.writeFile(path+"/"+viewName+"View.js", s, function (err) {
  			if (err) return console.log(err);
		});
	});
}
