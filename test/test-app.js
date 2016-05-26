'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('hmrc-prototype-kit:app', function () {
	describe('default', function(){
		before(function(done){
			helpers.run(path.join(__dirname, '../app'))
			.withArguments(['Y'])
			.withOptions({skipInstall:true})
			.on('end', done);
			
		});

		
		// verify expected files created		
		it('creates files', function()  {
			assert.file([
				'package.json',
				'server.js',
				'start.js',
                                'Gruntfile.js',
                                'Procfile',
                                'README.md',
                                '.gitignore',
                                'app/routes.js',
                                'app/views/examples/about-company.html',
                                'app/views/examples/about-company-session.html',
                                'app/views/examples/about-company-two.html',
                                'app/views/examples/about-company-two-session.html',
                                'app/views/examples/about-person.html',
                                'app/views/examples/about-person-session.html',
                                'app/views/examples/about-person-two.html',
                                'app/views/examples/about-person-two-session.html',
                                'app/views/examples/about-service.html',
                                'app/views/examples/about-service-session.html',
                                'app/views/examples/summary-session.html'
			]);
        	});

        	it('Server file has require express-session', function()  {
			assert.fileContent('server.js', "session = require('express-session')");
        	});

		it('Server file has require body-parser', function()  {
			assert.fileContent('server.js', "bodyParser = require('body-parser')");
        	});

                // verify the routes file has the expected routing data for the example views
		it('routes file has expected route data', function()  {
			assert.fileContent('app/routes.js', "router.get('/examples/about-person'");
			assert.fileContent('app/routes.js', "router.post('/examples/about-person-session'");

        	});

		// verify the generated package.json file has the expected express-session dependency
		it('package.json file has expected express-session dependency', function()  {
			assert.fileContent('package.json', '"express-session":');

        	});

      	});
   });
