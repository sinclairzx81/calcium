
var calcium = {

    logging    : require('calcium.logging'),

    storage    : require('calcium.storage'),

    template   : require('calcium.template'),

    web        : require('calcium.web'),

    editor     : require('calcium.editor')
};

var device = new calcium.storage.local.Device({basepath:__dirname});

var editor = new calcium.editor.App(device);

editor.listen(8888);

console.log('editor running on port 8888');

