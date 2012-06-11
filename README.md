pith
====

pith = nodjs + express + requirejs + backbone + handlebars + twitter bootstrap + grunt

- Super light-weight
- Completely modularized
- Out of the box build process that lints, compiles, minifies etc.
- Easy to add to
- Easy to remove from

#Dependencies
- [nodejs](http://nodejs.org)
- [grunt](http://gruntjs.com)

#Install
- fork this repo
- `git clone <your-new-github-url>`
- `sudo npm install -g grunt` *(if not already installed)*
- `npm install`

#Run Server
`npm start`

#Build Commands
- `grunt` Default runs development only related tasks.
- `grunt less` Compile less into css.
- `grunt lint` Lint all JavaScript files.
- `grunt templates` Precompile all client-side Handlebars templates.
- `grunt compile` RequireJS/Uglify optimize and compile all client-side JavaScript.
- `grunt prod` Executes a production-ready build which basically does everything above with more optimization.

#Watch Commands
- `grunt watch` All inclusive watch. Same as running all of the below
  simultaneously.
- `grunt watch:less` Compiles all less files when any of them change.
- `grunt watch:lint` Runs JSHint when any JS files change.

#TODO
- Optimize jshint options
- Add Jasmine grunt plugin for testing
- Add JSDoc parser
- Compile handlebars templates in build
- Possibly add Restify instead/in-addition to Express
- Travis CI integration
