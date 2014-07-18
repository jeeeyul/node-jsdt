/**
 * @type fsModule
 */
var fs = require("fs");
var path = require("path");
var handlebars = require("handlebars");
var _ = require("underscore-keypath");

var inputDir = path.join(__dirname, "..", "nodejs-api-json");
var outputDir = path.join(__dirname, "..", "jsdt-libraries", "node-gen");

var template = handlebars.compile(fs.readFileSync(path.join("jsdt-lib-template.hb")).toString());

handlebars.registerHelper("wrap", function(text) {
	return "{" + text + "}";
});

handlebars.registerHelper("join", function(arr, sep, keypath) {
	if (!(arr instanceof Array)) {
		return "";
	}

	if (sep == undefined) {
		sep = ", ";
	}
	if (keypath) {
		arr = arr.map(function(it) {
			return _(it).valueForKeyPath(keypath);
		});
	}
	return arr.join(sep);
});

handlebars.registerHelper("filter", function(arr, keypath, expected) {
	return arr.filter(function(it) {
		return _(it).valueForKeyPath(keypath) == expected;
	});
});

handlebars.registerHelper("validParams", function() {
	return this.signatures[0].params.map(function(it) {
		it.name = it.name.replace(/\.\.\./g, "").trim();
		return it;
	}).filter(function(it) {
		return it.name.length > 0;
	});
});

handlebars.registerHelper("wrapJSDoc", function(desc) {
	desc = desc.replace(/\*/g, "%2F");
	return "/**\n * " + desc.replace(/\n/g, "\n * ") + "*/";
});

/**
 * @type Array
 */
var filenames = fs.readdirSync(inputDir);
filenames.forEach(function(each) {
	var fullPath = path.join(inputDir, each);
	var json=JSON.parse(fs.readFileSync(fullPath).toString());
	if(json.modules == undefined){
		return;
	}
	
	var model = json.modules[0];
	if (model.classes) {
		model.classes.forEach(function(each) {
			generateJSDTLibrary(each);
		});
	}

	generateJSDTLibrary(_.extend(model, {
		name : "_NPM_" + model.name
	}));
});

function generateJSDTLibrary(classOrModule) {
	var outputFile = path.join(outputDir, classOrModule.name + ".js");
	fs.writeFileSync(outputFile, template(classOrModule));
}