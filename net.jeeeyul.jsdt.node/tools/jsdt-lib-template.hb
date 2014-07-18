/**
 * @constructor
 */
{{name}} = function(){
}
{{#each methods}}
{{{wrapJSDoc desc}}}
{{../name}}.prototype.{{name}} = function({{join (validParams) ", " "name"}}){
};
{{/each}}