"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(response => {
    //console.log(response.data);
    const todo = response.data;
    //const userId = todo.userId;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, completed, title);
});
const logTodo = (id, completed, title) => {
    console.log(`
		 The Todo with id ${id}
	 	 The Todo with title ${title}
		 The Todo with completed is ${completed}
	
	`);
};
