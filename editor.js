
var calcium = {

    logging    : require('calcium.logging'),

    storage    : require('calcium.storage'),

    template   : require('calcium.template'),

    web        : require('calcium.web'),

    editor     : require('calcium.editor')
};

// configure editable storage

var mount = new calcium.storage.mount.Storage();

mount.push("application", new calcium.storage.local.Storage({ basepath: __dirname }) );

// create editor

var editor = new calcium.editor.App( mount );

editor.listen(8888);

console.log('editor running on port 8888');

