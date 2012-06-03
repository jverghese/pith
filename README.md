pith
====

pith = nodjs + express + requirejs + backbone + handlebars + twitter bootstrap + grunt

- Super light-weight
- Completely modularized
- Out of the box build process that lints, compiles, minifies etc.
- Easy to add to
- Easy to remove from

#Dependencies
- nodejs & npm

#Install
- fork this repo
- `git clone <your-new-github-url>`
- `sudo npm install -g grunt`
- `npm install`

#Run Server
`npm start`

#Build Commands
- `grunt` Do a full build, which will do everything below
- `grunt css` Compile less into css
- `grunt lint` Lint all JavaScript files
- `grunt compile` RequireJS optimize and compile all client-side JavaScript

#TODO
- Optimize jshint options
- Add Jasmine grunt plugin for testing
- Setup a lesss watcher/auto-compiler (hopefully recess will just work)
- Add JSDoc parser
- Add JSDoc comments to all code
- Compile handlebars templates in build
- Possibly add Restify instead/in-addition to Express
