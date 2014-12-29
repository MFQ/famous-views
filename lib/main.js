(function () {
	var generator = require("./generator");
	var argv = require('minimist')(process.argv.slice(2));

	if(argv.help || argv._.length == 0){
		//////show help
		console.log("		");
		console.log("		");
		console.log("To create Famo.us veiws: ");
		console.log("	famous-views <view name> ");
		console.log("Commands: ")
		console.log(" 	-p or -path		generate view on speificed path")
		console.log("		");
		console.log("		");
			
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