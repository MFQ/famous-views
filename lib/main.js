(function () {
	var generator = require("./generator");
	var argv = require('minimist')(process.argv.slice(2));

	if(argv.help || argv._.length == 0){
		//////show help
		console.log("Generate view .......");
	}
	else{
		var path = '.';
		if(argv.p || argv.path)
			path = argv.p || argv.path;

		argv._.forEach(function(name){
			generator.view(name, path);
		});
	}
	
}).call(this);