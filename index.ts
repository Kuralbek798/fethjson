import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/todos/1';


interface Todo {
	id: number;
	title: string;
	completed: boolean;
}




axios.get(url).then(response => {
	//console.log(response.data);
	const todo = response.data as Todo


	//const userId = todo.userId;
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, completed, title)


});
const logTodo = (id: number, completed: boolean, title: string) => {
	console.log(`
		 The Todo with id ${id}
	 	 The Todo with title ${title}
		 The Todo with completed is ${completed}
	
	`)
}

