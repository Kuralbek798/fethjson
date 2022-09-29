"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    //console.log(response.data);
    var todo = response.data;
    //const userId = todo.userId;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, completed, title);
});
var logTodo = function (id, completed, title) {
    console.log("\n\t\t The Todo with id ".concat(id, "\n\t \t The Todo with title ").concat(title, "\n\t\t The Todo with completed is ").concat(completed, "\n\t\n\t"));
};
