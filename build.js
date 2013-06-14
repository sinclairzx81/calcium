var typescript = require('typescript.project');

var project = 
{
    basepath : __dirname, 

    modules  : [

        {name:'calcium.logging',    references: [], build : true},

        {name:'calcium.storage',    references: ['calcium.logging'], build : true},

        {name:'calcium.template',   references: ['calcium.storage'], build : true},

        {name:'calcium.web',        references: ['calcium.logging'], build : true},

        {name:'calcium.editor',     references: ['calcium.web', 'calcium.logging',  'calcium.template', 'calcium.storage'], build : true}
    ]
};

typescript.build(project, function(){

    require('./editor.js');
});


   

