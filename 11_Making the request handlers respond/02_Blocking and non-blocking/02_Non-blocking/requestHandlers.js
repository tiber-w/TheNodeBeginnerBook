var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");
    var content = "empty";

    // For linux server, use "ls -lah" instead of "dir c:\\ /s"
    exec("dir c:\\ /s", function (error, stdout, stderr) {
        content = stdout;
    });

    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start
exports.upload = upload
