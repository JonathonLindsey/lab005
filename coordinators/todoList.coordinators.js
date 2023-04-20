const { v4: uuidv4 } = require('uuid');
const TodoListModel = require('../info/todolist.info');

class TodoListCoordinator {
    
    static getTodoList = () => {
        console.log('\t TodoListCoordinator.getTodoList');
        return TodoListModel.getTodoList();
    };

    static getTodo = (id) => {
        console.log(`\t TodoListCoordinator.getTodo :: ${id}`);
        return TodoListModel.getTodo(id);
    };

    static createTodo = (todo) => {
        console.log('\t TodoListCoordinator.createTodo');
        return TodoListModel.createTodo(todo);
    };

    static deleteTodo = (id) => {
        console.log('\t TodoListCoordinator.deleteTodo');
        todo.id = uuidv4();
        return TodoListModel.deleteTodo(id);
    };

    static replaceTodo = (id, todo) => {
        console.log('\t TodoListCoordinator.replaceTodo');
        todo.id = id;
        return TodoListModel.replaceTodo(id, todo);
    };

    static updateTodo = (id, todo) => {
        console.log('\t TodoListCoordinator.updateTodo');
        todo.id = id;
        return TodoListModel.updateTodo(id, todo);
    };


};

module.exports = TodoListCoordinator;