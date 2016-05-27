var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

/*
var wiring = require("html-wiring");
var mkdirp = require('mkdirp');
*/

var NodeExpressGenerator = module.exports = function NodeExpressGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

/* 
 this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });
*/

 // this.pkg = JSON.parse(wiring.readFileAsString(path.join(__dirname, '../package.json'))); 
 
  console.log(this.yeoman);
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
   
};

util.inherits(NodeExpressGenerator, yeoman.generators.Base);

NodeExpressGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // section to prompt the user for a response. In this case to launch the prototype or not on completion.
  var prompts = [
    {
      name: 'RunOnComplete',
      type: 'confirm',
      message: 'Do you want to start the appzation in localhost on compeltion?',
      default: true
    }
  ];


   /**
   * If you add a prompt above, make sure you add it below here as well
   * e.g this.newName = props.newName;
   */
 

this.prompt(prompts, function (props) {
    this.RunOnComplete = props.RunOnComplete;
    cb();
  }.bind(this));


};


NodeExpressGenerator.prototype.copyRootFiles = function copyRootFiles() {
  
  console.log("Creating app template application root files...");
  this.copy('gitignore', '.gitignore');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('Procfile', 'Procfile');
  this.copy('README.md', 'README.md');
  this.copy('_package.json', 'package.json');
  this.copy('server.js', 'server.js');
  this.copy('start.js', 'start.js');  
  this.copy('LICENSE.txt', 'LICENSE.txt');  
  this.copy('port.tmp', '.port.tmp');
  this.copy('travis.yml', '.travis.yml');
};

NodeExpressGenerator.prototype.routes = function routes() {
  
  console.log("Creating app directory and the application routes and config file...");
  this.mkdir('app')
  this.copy('routes.js', 'app/routes.js');
  this.copy('config.js', 'app/config.js');
  this.copy('filters.js', 'app/filters.js');
};

NodeExpressGenerator.prototype.views = function views() {
  
  console.log("Scaffolding the application views...");
  console.log("Creating the app/views folders and copying view content files...");
  this.mkdir('app')
  this.mkdir('app/views');
  this.mkdir('app/views/examples');
  this.mkdir('app/views/examples/elements');
  this.mkdir('app/views/includes');

  this.copy('views/index.html', 'app/views/index.html'); 
  this.copy('views/start.html', 'app/views/start.html');
  this.copy('views/scenarios.html', 'app/views/scenarios.html');
  this.copy('views/layout.html', 'app/views/layout.html');
  this.copy('views/layout_unbranded.html', 'app/views/layout_unbranded.html');
  //this.copy('views/unbranded.html', 'app/views/unbranded.html');
  //this.copy('views/unbranded_template.html', 'app/views/unbranded_template.html');

  console.log("Creating the view/examples folder and copying its content files...");  
  this.copy('views/examples/about-company.html', 'app/views/examples/about-company.html');
  this.copy('views/examples/about-company-session.html', 'app/views/examples/about-company-session.html');
  this.copy('views/examples/about-company-two.html', 'app/views/examples/about-company-two.html');
  this.copy('views/examples/about-company-two-session.html', 'app/views/examples/about-company-two-session.html');
  this.copy('views/examples/about-person.html', 'app/views/examples/about-person.html');
  this.copy('views/examples/about-person-session.html', 'app/views/examples/about-person-session.html');
  this.copy('views/examples/about-person-two.html', 'app/views/examples/about-person-two.html');
  this.copy('views/examples/about-person-two-session.html', 'app/views/examples/about-person-two-session.html');
  this.copy('views/examples/about-service.html', 'app/views/examples/about-service.html');
  this.copy('views/examples/about-service-session.html', 'app/views/examples/about-service-session.html');
  this.copy('views/examples/summary.html', 'app/views/examples/summary.html');
  this.copy('views/examples/summary-session.html', 'app/views/examples/summary-session.html');


  console.log("Creating the view/examples/elements folder and copying its content files..."); 
  this.copy('views/examples/elements/forms.html', 'app/views/examples/elements/forms.html');
  this.copy('views/examples/elements/grid-layout.html', 'app/views/examples/elements/grid-layout.html');
  this.copy('views/examples/elements/radio-buttons-checkboxes.html', 'app/views/examples/elements/radio-buttons-checkboxes.html');
  this.copy('views/examples/elements/toggled-content.html', 'app/views/examples/elements/toggled-content.html');
  this.copy('views/examples/elements/typography.html', 'app/views/examples/elements/typography.html');

  console.log("Creating the view/includes folder and copying its content files..."); 
  this.copy('views/includes/breadcrumb_examples.html', 'app/views/includes/breadcrumb_examples.html');
  this.copy('views/includes/examples_head.html', 'app/views/includes/examples_head.html');
  this.copy('views/includes/head.html', 'app/views/includes/head.html');
  this.copy('views/includes/phase_banner_alpha.html', 'app/views/includes/phase_banner_alpha.html');
  this.copy('views/includes/phase_banner_beta.html', 'app/views/includes/phase_banner_beta.html');
  this.copy('views/includes/propositional_navigation.html', 'app/views/includes/propositional_navigation.html');
  this.copy('views/includes/propositional_navigation_alpha.html', 'app/views/includes/propositional_navigation_alpha.html');
  this.copy('views/includes/scripts.html', 'app/views/includes/scripts.html');
  this.copy('views/includes/address_pattern.html', 'app/views/includes/address_pattern.html');
};

NodeExpressGenerator.prototype.lib = function lib() {
  
  console.log("Scaffolding the lib folder...");  
  console.log("Creating the lib folder and copying its content files...");  

  this.mkdir('lib');
  // root lib folder
  this.copy('lib/govuk_template.html', 'lib/govuk_template.html');
  this.copy('lib/govuk_template_unbranded.html', 'lib/govuk_template_unbranded.html');
  this.copy('lib/utils.js', 'lib/utils.js');
  this.copy('lib/core_filters.js', 'lib/core_filters.js');
};


NodeExpressGenerator.prototype.assets = function assets() {

  console.log("Scaffolding the app/assets folder...");  
  console.log("Creating the app/assets folder and copying its content files...");  

  // scaffold all target directories
  this.mkdir('app');
  this.mkdir('app/assets');
  this.mkdir('app/assets/images');
  this.mkdir('app/assets/javascripts');
  this.mkdir('app/assets/javascripts/govuk');
  this.mkdir('app/assets/sass');
  this.mkdir('app/assets/sass/elements');
  this.mkdir('app/assets/sass/elements/forms');
  this.mkdir('app/assets/sass/patterns');
 

  // scaffold these by copying in all the required items from the template folders to the tyarget app folders:
  // assets/images
  console.log("copying the assets/images content files...");   
  this.copy('assets/images/favicon.ico', 'app/assets/images/favicon.ico');
  this.copy('assets/images/hmrc_crest_27px.png', 'app/assets/images/hmrc_crest_27px.png');
  this.copy('assets/images/separator.png', 'app/assets/images/separator.png');
  this.copy('assets/images/separator-2x.png', 'app/assets/images/separator-2x.png');

  // assets/javascripts
  console.log("copying the assets/javascripts content files...");   
  this.copy('assets/javascripts/application.js', 'app/assets/javascripts/application.js');
  //this.copy('assets/javascripts/jquery.lazy.min.js', 'app/assets/javascripts/jquery.lazy.min.js');
  this.copy('assets/javascripts/details.polyfill.js', 'app/assets/javascripts/details.polyfill.js');
  this.copy('assets/javascripts/jquery-1.11.3.js', 'app/assets/javascripts/jquery-1.11.3.js');
  this.copy('assets/javascripts/govuk/selection-buttons.js', 'app/assets/javascripts/govuk/selection-buttons.js');

  // assets/sass
  console.log("copying the assets/sass content files...");   
  this.copy('assets/sass/application.scss', 'app/assets/sass/application.scss');
  // this.copy('assets/sass/elements.scss', 'app/assets/sass/elements.scss');
  this.copy('assets/sass/_govuk-elements.scss', 'app/assets/sass/_govuk-elements.scss');

  this.copy('assets/sass/examples.scss', 'app/assets/sass/examples.scss');
  this.copy('assets/sass/patterns.scss', 'app/assets/sass/patterns.scss');

  console.log("copying the assets/sass/elements content files...");   
  this.copy('assets/sass/elements/_base.scss', 'app/assets/sass/elements/_base.scss');
  this.copy('assets/sass/elements/_breadcrumbs.scss', 'app/assets/sass/elements/_breadcrumbs.scss');
  this.copy('assets/sass/elements/_buttons.scss', 'app/assets/sass/elements/_buttons.scss');
  this.copy('assets/sass/elements/_components.scss', 'app/assets/sass/elements/_components.scss'); 
  this.copy('assets/sass/elements/_details.scss', 'app/assets/sass/elements/_details.scss');
  this.copy('assets/sass/elements/_elements-typography.scss', 'app/assets/sass/elements/_elements-typography.scss');
  this.copy('assets/sass/elements/_forms.scss', 'app/assets/sass/elements/_forms.scss');
  this.copy('assets/sass/elements/_helpers.scss', 'app/assets/sass/elements/_helpers.scss');
  this.copy('assets/sass/elements/_icons.scss', 'app/assets/sass/elements/_icons.scss');
  this.copy('assets/sass/elements/_layout.scss', 'app/assets/sass/elements/_layout.scss');
  this.copy('assets/sass/elements/_lists.scss', 'app/assets/sass/elements/_lists.scss');
  this.copy('assets/sass/elements/_panels.scss', 'app/assets/sass/elements/_panels.scss');
  this.copy('assets/sass/elements/_phase-banner.scss', 'app/assets/sass/elements/_phase-banner.scss');
  this.copy('assets/sass/elements/_reset.scss', 'app/assets/sass/elements/_reset.scss');
  this.copy('assets/sass/elements/_tables.scss', 'app/assets/sass/elements/_tables.scss');

  this.copy('assets/sass/elements/forms/_form-block-labels.scss', 'app/assets/sass/elements/forms/_form-block-labels.scss');
  this.copy('assets/sass/elements/forms/_form-date.scss', 'app/assets/sass/elements/forms/_form-date.scss');
  this.copy('assets/sass/elements/forms/_form-validation.scss', 'app/assets/sass/elements/forms/_form-validation.scss');
  
   console.log("copying the assets/sass/patterns content files...");   
  
  this.copy('assets/sass/patterns/check-your-answers.scss', 'app/assets/sass/patterns/check-your-answers.scss');
 };

NodeExpressGenerator.prototype.docs = function docs() {

  console.log("Scaffolding the app/assets folder...");  
  console.log("Creating the app/assets folder and copying its content files...");  

  // scaffold all target directories
  this.mkdir('docs');
  this.mkdir('docs/assets');
  this.mkdir('docs/assets/images');
  this.mkdir('docs/guides');
  this.mkdir('docs/install');

  //docs
  console.log("copying the docs content files..."); 
  this.copy('docs/README.md', 'docs/README.md');
  this.copy('docs/creating-routes.md', 'docs/creating-routes.md');
  this.copy('docs/principles.md', 'docs/principles.md');
  this.copy('docs/tips-and-tricks.md', 'docs/tips-and-tricks.md');
  this.copy('docs/updating-the-kit.md', 'docs/updating-the-kit.md');
  this.copy('docs/writing-css.md', 'docs/writing-css.md');

  // docs/images
  console.log("copying the docs/assets/images content files...");   
  this.copy('docs/assets/images/installing-mavericks-popup.png', 'docs/assets/images/installing-mavericks-popup.png');
  this.copy('docs/assets/images/mac-home-folder-projects.png', 'docs/assets/images/mac-home-folder-projects.png');
  this.copy('docs/assets/images/prototype_kit_homepage.png', 'docs/assets/images/prototype_kit_homepage.png');

  // docs/guides
  console.log("copying the docs/guides content files...");   
  this.copy('docs/guides/publishing-on-heroku.md', 'docs/guides/publishing-on-heroku.md');
  this.copy('docs/guides/publishing-on-heroku.md', 'docs/guides/setting-up-git.md');
  this.copy('docs/guides/publishing-on-heroku.md', 'docs/guides/using-verify.md');

  // docs/install
  console.log("copying the docs/install content files...");   
  this.copy('docs/install/install-the-kit.md', 'docs/install/install-the-kit.md');
  this.copy('docs/install/introduction.md', 'docs/install/introduction.md');
  this.copy('docs/install/requirements.md', 'docs/install/requirements.md');
  this.copy('docs/install/run-the-kit.md', 'docs/install/run-the-kit.md');
 
};

NodeExpressGenerator.prototype.install = function install() {
  // Install Grunt and Bower dependencies
  this.installDependencies({ skipInstall: this.skipInstall });
};
