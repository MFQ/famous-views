var should = require('chai').should(),
    fs = require("fs"), 
    shell = require('shelljs/global');

describe('#generator', function() {
	it("verifies file generation", function(){
		// var a = true;
		// a.should.equals(true);
		exec('node lib/main.js test -p test/ ')
		var fileExist =fs.existsSync('test/testView.js', 'utf8')
		fileExist.should.equal(true);
		exec('rm test/testView.js')
	});
});