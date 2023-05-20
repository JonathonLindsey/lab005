const TodoListCoordinator = require('../coordinators/todoList.coordinators');

const getTodoList = async (_req, res, _next) => {
    console.log('todoListController.getTodoList');

    const result = TodoListCoordinator.getTodoList();
    res.status(200).json(result);
};

const getTodo = async (req, res, _next) => {
 console.log('todoListConatroller.getTodo');

const foundTodo = TodoListCoordinator.getTodo(req.params.id);
if (foundTodo) {
  res.status(200).json(foundTodo);
} else {
    res.status(404).json();
}
};

const createTodo = async (req, res, _next) => {
    console.log('todoListController.createTodo');

const result = TodoListCoordinator.createTodo(req.body);
res.status(200).json(result);
};

const deleteTodo = async (req, res, _next) => {
    console.log('todoListController.deleteTodo');

const deleteResult = TodoListCoordinator.deleteTodo(req.params.id);
if (deleteResult) {
    res.status(204).json(deleteResult);
} else {
    res.status(404).json();
}
};

const replaceTodo = async (req, res, _next) => {
    console.log('todoListController.replaceTodo');

const replaceResults = TodoListCoordinator.replaceTodo(req.params.id, req.body);
if (replaceResults) {
    res.status(200).json(replaceResults);
} else {
    res.status(404).json();
}
};

const updateTodo = async (req, res, _next) => {
    console.log('todoListController.updateTodo');

const updateResults = TodoListCoordinator.updateTodo(req.params.id, req.body);
if (updateResults) {
    res.status(200).json(updateResults);
} else {
    res.status(400).json();
}
};

module.exports = {
    getTodoList,
    getTodo,
    createTodo,
    deleteTodo,
    replaceTodo,
    updateTodo,
};
