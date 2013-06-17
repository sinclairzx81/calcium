var typescript = require('typescript.project');

var project = 
{
    basepath : __dirname, 

    modules  : [

        {name:'calcium.logging',    references: [], build : false},

        {name:'calcium.storage',    references: ['calcium.logging'], build : true},

        {name:'calcium.template',   references: ['calcium.storage'], build : false},

        {name:'calcium.web',        references: ['calcium.logging'], build : false},

        {name:'calcium.editor',     references: ['calcium.web', 'calcium.logging',  'calcium.template', 'calcium.storage'], build : true}
    ]
};

typescript.build(project, function(){

    require('./editor.js');
});


   

